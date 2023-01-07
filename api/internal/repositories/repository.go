package repositories

import (
	"context"
	"fmt"
	"github.com/interviews/utils/logger"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type Blog struct {
	UserId      string    `bson:"userId"`
	Post        string    `bson:"post"`
	DateCreated time.Time `bson:"date"`
	LastUpdated time.Time `bson:"lastUpdated"`
}

type Repository struct {
	client     *mongo.Client
	collection *mongo.Collection
}

func NewRepository(client *mongo.Client) *Repository {
	return &Repository{
		client:     client,
		collection: client.Database("demo").Collection("demo"),
	}
}

func (r *Repository) Create(ctx context.Context, blog *Blog) (string, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Creating Blog")

	doc := bson.D{
		{"userId", blog.UserId},
		{"post", blog.Post},
		{"created", blog.DateCreated},
		{"updated", blog.DateCreated},
	}

	res, err := r.collection.InsertOne(ctx, doc)
	if err != nil {
		return "", err
	}

	fmt.Printf("Inserted document with _id: %v\n", res.InsertedID)
	result := res.InsertedID.(primitive.ObjectID).String()

	return result, nil
}

func (r *Repository) Update(ctx context.Context, blog *Blog) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Updating Blog")

	find := bson.D{
		{"userId", blog.UserId},
	}

	update := bson.D{
		{"$set", bson.D{
			{"post", blog.Post},
			{"updated", time.Now()},
		},
		},
	}

	count, err := r.collection.UpdateMany(ctx, find, update)
	if err != nil {
		clog.Error(err)
		return 0, err
	}

	clog.Info("Updating Blog completed")

	return count.ModifiedCount, err
}

func (r *Repository) Get(ctx context.Context, blogId string) (*Blog, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Getting Blog")

	filter := bson.D{{"userId", blogId}}

	result := &Blog{}

	err := r.collection.FindOne(ctx, filter).Decode(result)
	if err != nil {
		return result, err
	}

	clog.Info("Blog found")

	return result, nil
}

func (r *Repository) Delete(ctx context.Context, blogId string) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Deleting Blog")

	filter := bson.D{
		{"userId", blogId},
	}

	num, err := r.collection.DeleteMany(ctx, filter)
	if err != nil {
		return 0, err
	}

	return num.DeletedCount, err
}

func (r *Repository) GetAll(ctx context.Context) ([]Blog, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Repo - GetAll")

	filter := bson.D{}

	cur, err := r.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}

	var blogs []Blog

	err = cur.All(ctx, &blogs)
	if err != nil {
		return nil, err
	}

	return blogs, nil
}
