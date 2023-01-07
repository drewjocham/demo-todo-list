package service

import (
    "context"
    "github.com/interviews/internal/repositories"
    "github.com/interviews/proto/api"
    "github.com/interviews/utils/logger"
    "github.com/pkg/errors"
    "google.golang.org/protobuf/types/known/timestamppb"
    "time"
)

var (
    ErrCreatingBlog = errors.New("error occurred while saving the blog")
    ErrDeletingBlog = errors.New("error occurred while deleting the blog")
    ErrGetBlog      = errors.New("error blog not found")
    ErrUpdateBlog   = errors.New("error updating blog")
    ErrGetAllBlog   = errors.New("error getting all blogs")
)

type ApiServiceServer struct {
    api.UnimplementedApiServiceServer
    repo Repository
}

func NewApiServiceServer(repo Repository) api.ApiServiceServer {
    return &ApiServiceServer{
        repo: repo,
    }
}

type Repository interface {
    Create(ctx context.Context, blog *repositories.Blog) (string, error)
    Get(ctx context.Context, blogId string) (*repositories.Blog, error)
    Update(ctx context.Context, blog *repositories.Blog) (int64, error)
    Delete(ctx context.Context, blogId string) (int64, error)
    GetAll(ctx context.Context) ([]repositories.Blog, error)
}

func (s *ApiServiceServer) GetBlog(ctx context.Context, req *api.BlogRequest) (*api.BlogResponse, error) {
    clog := logger.GetLoggerFromContext(ctx)

    clog.Info("Received request...")
    blog, err := s.repo.Get(ctx, req.BlogId)
    if err != nil {
        clog.Warn("Blog not found..")
        return nil, ErrGetBlog
    }

    ts := timestamppb.New(blog.LastUpdated).String()

    return &api.BlogResponse{
        BlogId: blog.UserId,
        Post:   blog.Post,
        Time:   ts,
    }, nil

}

func (s *ApiServiceServer) DeleteBlog(ctx context.Context, req *api.BlogDeleteRequest) (*api.BlogDeleteResponse, error) {
    clog := logger.GetLoggerFromContext(ctx)

    clog.Info("DeleteBlog request...")

    count, err := s.repo.Delete(ctx, req.BlogId)
    if err != nil {
        return nil, ErrDeletingBlog
    }

    clog.Info("Deleted blog")

    return &api.BlogDeleteResponse{
        Count: count,
    }, nil
}

func (s *ApiServiceServer) CreateBlog(ctx context.Context, req *api.BlogCreateRequest) (*api.BlogResponse, error) {
    clog := logger.GetLoggerFromContext(ctx)

    clog.Info("CreateBlog request...")

    time := time.Now()

    blog := &repositories.Blog{
        UserId:      req.BlogId,
        Post:        req.Post,
        DateCreated: time,
    }

    result, err := s.repo.Create(ctx, blog)
    if err != nil {
        return nil, ErrCreatingBlog
    }

    clog.Info(result)

    return &api.BlogResponse{
        BlogId: req.BlogId,
        Post:   req.Post,
        Time:   time.String(),
    }, nil
}

func (s *ApiServiceServer) UpdateBlog(ctx context.Context, req *api.BlogUpdateRequest) (*api.BlogUpdateResponse, error) {
    clog := logger.GetLoggerFromContext(ctx)

    clog.Info("UpdateBlog request...")

    time := time.Now()

    blog := &repositories.Blog{
        UserId:      req.BlogId,
        Post:        req.Post,
        LastUpdated: time,
    }

    count, err := s.repo.Update(ctx, blog)
    if err != nil {
        return nil, ErrUpdateBlog
    }

    return &api.BlogUpdateResponse{Count: count}, nil
}

func (s *ApiServiceServer) GetAll(ctx context.Context, req *api.BlogRequest) (*api.BlogAllResponse, error) {
    clog := logger.GetLoggerFromContext(ctx)

    clog.Info("GetAll request...")

    blogs, err := s.repo.GetAll(ctx)
    if err != nil {
        return nil, ErrGetAllBlog
    }

    blogArr := make([]*api.Blog, len(blogs))

    for i, blog := range blogs {

        res := api.Blog{
            BlogId: blog.UserId,
            Post:   blog.Post,
        }
        blogArr[i] = &res

    }

    return &api.BlogAllResponse{Blog: blogArr}, nil
}
