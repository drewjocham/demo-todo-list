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
	ErrCreatingTodo = errors.New("error occurred while saving the Todo")
	ErrDeletingTodo = errors.New("error occurred while deleting the Todo")
	ErrGetTodo      = errors.New("error Todo not found")
	ErrUpdateTodo   = errors.New("error updating Todo")
	ErrGetAllTodo   = errors.New("error getting all Todos")
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
	Create(ctx context.Context, todo *repositories.Todo) (string, error)
	Get(ctx context.Context, id string) (*repositories.Todo, error)
	Update(ctx context.Context, todo *repositories.Todo) (int64, error)
	Delete(ctx context.Context, id string) (int64, error)
	GetAll(ctx context.Context) ([]repositories.Todo, error)
}

func (s *ApiServiceServer) GetOne(ctx context.Context, req *api.TodoRequest) (*api.TodoResponse, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("Received request...")
	todo, err := s.repo.Get(ctx, req.Id)
	if err != nil {
		clog.Warn("Todo not found..")
		return nil, ErrGetTodo
	}

	ts := timestamppb.New(todo.LastUpdated).String()

	return &api.TodoResponse{
		Id:    todo.Id,
		Title: todo.Title,
		Time:  ts,
	}, nil

}

func (s *ApiServiceServer) Delete(ctx context.Context, req *api.TodoDeleteRequest) (*api.TodoDeleteResponse, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("DeleteTodo request...")

	count, err := s.repo.Delete(ctx, req.Id)
	if err != nil {
		return nil, ErrDeletingTodo
	}

	clog.Info("Deleted Todo")

	return &api.TodoDeleteResponse{
		Count: count,
	}, nil
}

func (s *ApiServiceServer) Create(ctx context.Context, req *api.TodoCreateRequest) (*api.TodoResponse, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("CreateTodo request...")

	time := time.Now()

	todo := &repositories.Todo{
		Id:          req.Id,
		Title:       req.Title,
		DateCreated: time,
	}

	result, err := s.repo.Create(ctx, todo)
	if err != nil {
		return nil, ErrCreatingTodo
	}

	clog.Info(result)

	return &api.TodoResponse{
		Id:    req.Id,
		Title: req.Title,
		Time:  time.String(),
	}, nil
}

func (s *ApiServiceServer) Update(ctx context.Context, req *api.TodoUpdateRequest) (*api.TodoUpdateResponse, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("UpdateTodo request...")

	time := time.Now()

	todo := &repositories.Todo{
		Id:          req.Id,
		Title:       req.Title,
		LastUpdated: time,
	}

	count, err := s.repo.Update(ctx, todo)
	if err != nil {
		return nil, ErrUpdateTodo
	}

	return &api.TodoUpdateResponse{Count: count}, nil
}

func (s *ApiServiceServer) GetAll(ctx context.Context, req *api.TodoRequest) (*api.TodoAllResponse, error) {
	clog := logger.GetLoggerFromContext(ctx)

	clog.Info("GetAll request...")

	todos, err := s.repo.GetAll(ctx)
	if err != nil {
		return nil, ErrGetAllTodo
	}

	todoArr := make([]*api.Todo, len(todos))

	for i, todo := range todos {

		res := api.Todo{
			Title: todo.Title,
			Id:    todo.Id,
		}
		todoArr[i] = &res

	}

	return &api.TodoAllResponse{Todo: todoArr}, nil
}
