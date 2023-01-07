package service

import (
	"context"
	"github.com/interviews/internal/repositories"
	"github.com/interviews/proto/api"
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func (m *mockRepository) Get(ctx context.Context, blogId string) (*repositories.Blog, error) {
	if m.err != nil {
		return nil, m.err
	}

	result := &repositories.Blog{}

	return result, nil
}

func (m *mockRepository) Update(ctx context.Context, blog *repositories.Blog) (int64, error) {

	if m.err != nil {
		return 0, m.err
	}

	m.count++

	return m.count, nil
}

func (m *mockRepository) Delete(ctx context.Context, blogId string) (int64, error) {
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
	blog       *repositories.Blog
	blogs      []repositories.Blog
	updateRepo *api.BlogUpdateResponse
	id         string
	count      int64
	err        error
}

func (m *mockRepository) GetAll(ctx context.Context) ([]repositories.Blog, error) {
	if m.err != nil {
		return nil, m.err
	}

	return m.blogs, nil
}

func (m *mockRepository) Create(ctx context.Context, blog *repositories.Blog) (string, error) {
	if m.err != nil {
		return "", m.err
	}

	return m.id, nil
}

func Test_CreateBlog(t *testing.T) {

	testCases := []struct {
		name string
		res  api.BlogCreateRequest
		repo *mockRepository
		id   string
		err  error
	}{
		{
			name: "no errors",
			res: api.BlogCreateRequest{
				BlogId: "test#1234",
				Post:   "I am a test post",
			},
			repo: &mockRepository{err: nil, id: "2222"},
			err:  nil,
		},
		{
			name: "error occurred",
			res: api.BlogCreateRequest{
				BlogId: "",
				Post:   "",
			},
			repo: &mockRepository{err: ErrCreatingBlog, id: "2221"},
			err:  ErrCreatingBlog,
		},
	}

	for _, tc := range testCases {
		blogService := NewApiServiceServer(tc.repo)
		got, err := blogService.CreateBlog(context.Background(), &tc.res)
		want := tc.res.Post

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, got.Post, want)
		}

	}

}

func Test_DeleteBlog(t *testing.T) {

	testCases := []struct {
		name string
		res  *api.BlogDeleteRequest
		repo *mockRepository
		err  error
	}{
		{
			name: "DeleteBlog no error",
			res: &api.BlogDeleteRequest{
				BlogId: "1",
			},
			repo: &mockRepository{err: nil, id: "1"},
			err:  nil,
		},
		{
			name: "DeleteBlog error",
			res: &api.BlogDeleteRequest{
				BlogId: "2",
			},
			repo: &mockRepository{err: ErrDeletingBlog, id: "2"},
			err:  ErrDeletingBlog,
		},
	}

	for _, tc := range testCases {
		blogService := NewApiServiceServer(tc.repo)
		got, err := blogService.DeleteBlog(context.Background(), tc.res)

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, got.Count, tc.repo.count)
		}
	}
}

func Test_GetBlog(t *testing.T) {

	testCases := []struct {
		name string
		res  *api.BlogRequest
		repo *mockRepository
		err  error
	}{
		{
			name: "Get Blog no error",
			res:  &api.BlogRequest{},
			repo: &mockRepository{blog: &repositories.Blog{
				UserId:      "test#1111",
				Post:        "test post",
				DateCreated: time.Now(),
				LastUpdated: time.Now(),
			}},
			err: nil,
		},
		{
			name: "Get Blog no error",
			res:  &api.BlogRequest{},
			repo: &mockRepository{blog: &repositories.Blog{
				UserId:      "test#2222",
				Post:        "test post",
				DateCreated: time.Now(),
				LastUpdated: time.Now(),
			}, err: ErrGetBlog},
			err: ErrGetBlog,
		},
	}

	for _, tc := range testCases {
		blogService := NewApiServiceServer(tc.repo)
		got, err := blogService.GetBlog(context.Background(), tc.res)

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, got.BlogId, tc.res.BlogId)
		}
	}
}

func Test_UpdateBlog(t *testing.T) {

	testCases := []struct {
		name  string
		res   *api.BlogUpdateRequest
		repo  *mockRepository
		count int64
		err   error
	}{
		{
			name: "Update blog",
			res: &api.BlogUpdateRequest{
				BlogId: "2222",
				Post:   "I am the updated blog",
				Count:  1,
			},
			repo:  &mockRepository{err: nil},
			count: 1,
			err:   nil,
		},
		{
			name: "Update blog err",
			res: &api.BlogUpdateRequest{
				BlogId: "2222",
				Post:   "I am the updated blog",
			},
			repo:  &mockRepository{err: ErrUpdateBlog},
			count: 0,
			err:   ErrUpdateBlog,
		},
	}

	for _, tc := range testCases {
		blogService := NewApiServiceServer(tc.repo)
		got, err := blogService.UpdateBlog(context.Background(), tc.res)

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, got.Count, tc.res.Count)
		}
	}
}

func Test_GetAlLBlogs(t *testing.T) {

	testCases := []struct {
		name  string
		res   *api.BlogRequest
		repo  *mockRepository
		blogs []*api.Blog
		count int64
		err   error
	}{
		{
			name: "GetAllBlogs (no error)",
			res:  &api.BlogRequest{},
			repo: &mockRepository{err: nil},
			blogs: []*api.Blog{
				{
					BlogId: "2222",
					Post:   "Test post 1",
					Time:   time.Now().String(),
				},
				{
					BlogId: "3333",
					Post:   "Test post 2",
					Time:   time.Now().String(),
				},
			},
			count: 2,
			err:   nil,
		},
		{
			name:  "GetAllBlogs (no error)",
			res:   &api.BlogRequest{},
			repo:  &mockRepository{err: ErrGetAllBlog},
			count: 0,
			err:   ErrGetAllBlog,
		},
	}

	for _, tc := range testCases {
		blogService := NewApiServiceServer(tc.repo)
		got, err := blogService.GetAll(context.Background(), tc.res)

		require.ErrorIs(t, err, tc.err)
		if err == nil {
			require.Equal(t, len(got.Blog), len(tc.res.GetBlogId()))
		}
	}

}
