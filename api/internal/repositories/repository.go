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

type Todo struct {
	Id          string    `bson:"id"`
	Title       string    `bson:"title"`
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

func (r *Repository) Create(ctx context.Context, todo *Todo) (string, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Creating Todo")

	doc := bson.D{
		{"id", todo.Id},
		{"title", todo.Title},
		{"created", todo.DateCreated},
		{"updated", todo.DateCreated},
	}

	res, err := r.collection.InsertOne(ctx, doc)
	if err != nil {
		return "", err
	}

	fmt.Printf("Inserted document with _id: %v\n", res.InsertedID)
	result := res.InsertedID.(primitive.ObjectID).String()

	return result, nil
}

func (r *Repository) Update(ctx context.Context, todo *Todo) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Updating Todo")

	find := bson.D{
		{"id", todo.Id},
	}

	update := bson.D{
		{"$set", bson.D{
			{"title", todo.Title},
			{"updated", time.Now()},
		},
		},
	}

	count, err := r.collection.UpdateMany(ctx, find, update)
	if err != nil {
		clog.Error(err)
		return 0, err
	}

	clog.Info("Updating Todo completed")

	return count.ModifiedCount, err
}

func (r *Repository) Get(ctx context.Context, id string) (*Todo, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Getting Blog")

	filter := bson.D{{"id", id}}

	result := &Todo{}

	err := r.collection.FindOne(ctx, filter).Decode(result)
	if err != nil {
		return result, err
	}

	clog.Info("Todo found")

	return result, nil
}

func (r *Repository) Delete(ctx context.Context, id string) (int64, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Deleting Todo")

	filter := bson.D{
		{"id", id},
	}

	num, err := r.collection.DeleteMany(ctx, filter)
	if err != nil {
		return 0, err
	}

	return num.DeletedCount, err
}

func (r *Repository) GetAll(ctx context.Context) ([]Todo, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Repo - GetAll")

	filter := bson.D{}

	cur, err := r.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}

	var todos []Todo

	err = cur.All(ctx, &todos)
	if err != nil {
		return nil, err
	}

	return todos, nil
}
