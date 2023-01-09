package service

import (
	"context"
	"github.com/interviews/internal/repositories"
	"github.com/interviews/proto/api"
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func (m *mockRepository) Get(ctx context.Context, Id string) (*repositories.Todo, error) {
	if m.err != nil {
		return nil, m.err
	}

	result := &repositories.Todo{}

	return result, nil
}

func (m *mockRepository) Update(ctx context.Context, Todo *repositories.Todo) (int64, error) {

	if m.err != nil {
		return 0, m.err
	}

	m.count++

	return m.count, nil
}

func (m *mockRepository) Delete(ctx context.Context, Id string) (int64, error) {
	if m.err != nil {
		return 0, m.err
	}
	m.count++
	return m.count, nil
}

func newMockRepository() Repository {
	return &mockRepository{}
}

type mockRepository struct {
	Todo       *repositories.Todo
	Todos      []repositories.Todo
	updateRepo *api.TodoUpdateResponse
	id         string
	count      int64
	err        error
}

func (m *mockRepository) GetAll(ctx context.Context) ([]repositories.Todo, error) {
	if m.err != nil {
		return nil, m.err
	}

	return m.Todos, nil
}

func (m *mockRepository) Create(ctx context.Context, Todo *repositories.Todo) (string, error) {
	if m.err != nil {
		return "", m.err
	}

	return m.id, nil
}

func Test_CreateTodo(t *testing.T) {

	testCases := []struct {
		name string
		res  api.TodoCreateRequest
		repo *mockRepository
		id   string
		err  error
	}{
		{
			name: "no errors",
			res: api.TodoCreateRequest{
				Id:    "test#1234",
				Title: "I am a test Title",
			},
			repo: &mockRepository{err: nil, id: "2222"},
			err:  nil,
		},
		{
			name: "error occurred",
			res: api.TodoCreateRequest{
				Id:    "",
				Title: "",
			},
			repo: &mockRepository{err: ErrCreatingTodo, id: "2221"},
			err:  ErrCreatingTodo,
		},
	}

	for _, tc := range testCases {
		TodoService := NewApiServiceServer(tc.repo)
		got, err := TodoService.Create(context.Background(), &tc.res)
		want := tc.res.Title

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, got.Title, want)
		}

	}

}

func Test_DeleteTodo(t *testing.T) {

	testCases := []struct {
		name string
		res  *api.TodoDeleteRequest
		repo *mockRepository
		err  error
	}{
		{
			name: "DeleteTodo no error",
			res: &api.TodoDeleteRequest{
				Id: "1",
			},
			repo: &mockRepository{err: nil, id: "1"},
			err:  nil,
		},
		{
			name: "DeleteTodo error",
			res: &api.TodoDeleteRequest{
				Id: "2",
			},
			repo: &mockRepository{err: ErrDeletingTodo, id: "2"},
			err:  ErrDeletingTodo,
		},
	}

	for _, tc := range testCases {
		TodoService := NewApiServiceServer(tc.repo)
		got, err := TodoService.Delete(context.Background(), tc.res)

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, got.Count, tc.repo.count)
		}
	}
}

func Test_GetTodo(t *testing.T) {

	testCases := []struct {
		name string
		res  *api.TodoRequest
		repo *mockRepository
		err  error
	}{
		{
			name: "Get Todo no error",
			res:  &api.TodoRequest{},
			repo: &mockRepository{Todo: &repositories.Todo{
				Id:          "test#1111",
				Title:       "test Title",
				DateCreated: time.Now(),
				LastUpdated: time.Now(),
			}},
			err: nil,
		},
		{
			name: "Get Todo no error",
			res:  &api.TodoRequest{},
			repo: &mockRepository{Todo: &repositories.Todo{
				Id:          "test#2222",
				Title:       "test Title",
				DateCreated: time.Now(),
				LastUpdated: time.Now(),
			}, err: ErrGetTodo},
			err: ErrGetTodo,
		},
	}

	for _, tc := range testCases {
		TodoService := NewApiServiceServer(tc.repo)
		got, err := TodoService.GetOne(context.Background(), tc.res)

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, got.Id, tc.res.Id)
		}
	}
}

func Test_UpdateTodo(t *testing.T) {

	testCases := []struct {
		name  string
		res   *api.TodoUpdateRequest
		repo  *mockRepository
		count int64
		err   error
	}{
		{
			name: "Update Todo",
			res: &api.TodoUpdateRequest{
				Id:    "2222",
				Title: "I am the updated Todo",
				Count: 1,
			},
			repo:  &mockRepository{err: nil},
			count: 1,
			err:   nil,
		},
		{
			name: "Update Todo err",
			res: &api.TodoUpdateRequest{
				Id:    "2222",
				Title: "I am the updated Todo",
			},
			repo:  &mockRepository{err: ErrUpdateTodo},
			count: 0,
			err:   ErrUpdateTodo,
		},
	}

	for _, tc := range testCases {
		TodoService := NewApiServiceServer(tc.repo)
		got, err := TodoService.Update(context.Background(), tc.res)

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, got.Count, tc.res.Count)
		}
	}
}

func Test_GetAlLTodos(t *testing.T) {

	testCases := []struct {
		name  string
		res   *api.TodoRequest
		repo  *mockRepository
		Todos []*api.Todo
		count int64
		err   error
	}{
		{
			name: "GetAllTodos (no error)",
			res:  &api.TodoRequest{},
			repo: &mockRepository{err: nil},
			Todos: []*api.Todo{
				{
					Id:    "2222",
					Title: "Test Title 1",
					Time:  time.Now().String(),
				},
				{
					Id:    "3333",
					Title: "Test Title 2",
					Time:  time.Now().String(),
				},
			},
			count: 2,
			err:   nil,
		},
		{
			name:  "GetAllTodos (no error)",
			res:   &api.TodoRequest{},
			repo:  &mockRepository{err: ErrGetAllTodo},
			count: 0,
			err:   ErrGetAllTodo,
		},
	}

	for _, tc := range testCases {
		TodoService := NewApiServiceServer(tc.repo)
		got, err := TodoService.GetAll(context.Background(), tc.res)

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, len(got.Todo), len(tc.res.GetId()))
		}
	}

}
