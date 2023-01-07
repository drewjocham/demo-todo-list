// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: api.proto

package api

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ApiServiceClient is the client API for ApiService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ApiServiceClient interface {
	CreateBlog(ctx context.Context, in *BlogCreateRequest, opts ...grpc.CallOption) (*BlogResponse, error)
	GetBlog(ctx context.Context, in *BlogRequest, opts ...grpc.CallOption) (*BlogResponse, error)
	GetAll(ctx context.Context, in *BlogRequest, opts ...grpc.CallOption) (*BlogAllResponse, error)
	UpdateBlog(ctx context.Context, in *BlogUpdateRequest, opts ...grpc.CallOption) (*BlogUpdateResponse, error)
	DeleteBlog(ctx context.Context, in *BlogDeleteRequest, opts ...grpc.CallOption) (*BlogDeleteResponse, error)
}

type apiServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewApiServiceClient(cc grpc.ClientConnInterface) ApiServiceClient {
	return &apiServiceClient{cc}
}

func (c *apiServiceClient) CreateBlog(ctx context.Context, in *BlogCreateRequest, opts ...grpc.CallOption) (*BlogResponse, error) {
	out := new(BlogResponse)
	err := c.cc.Invoke(ctx, "/ApiService/CreateBlog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiServiceClient) GetBlog(ctx context.Context, in *BlogRequest, opts ...grpc.CallOption) (*BlogResponse, error) {
	out := new(BlogResponse)
	err := c.cc.Invoke(ctx, "/ApiService/GetBlog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiServiceClient) GetAll(ctx context.Context, in *BlogRequest, opts ...grpc.CallOption) (*BlogAllResponse, error) {
	out := new(BlogAllResponse)
	err := c.cc.Invoke(ctx, "/ApiService/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiServiceClient) UpdateBlog(ctx context.Context, in *BlogUpdateRequest, opts ...grpc.CallOption) (*BlogUpdateResponse, error) {
	out := new(BlogUpdateResponse)
	err := c.cc.Invoke(ctx, "/ApiService/UpdateBlog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiServiceClient) DeleteBlog(ctx context.Context, in *BlogDeleteRequest, opts ...grpc.CallOption) (*BlogDeleteResponse, error) {
	out := new(BlogDeleteResponse)
	err := c.cc.Invoke(ctx, "/ApiService/DeleteBlog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ApiServiceServer is the server API for ApiService service.
// All implementations must embed UnimplementedApiServiceServer
// for forward compatibility
type ApiServiceServer interface {
	CreateBlog(context.Context, *BlogCreateRequest) (*BlogResponse, error)
	GetBlog(context.Context, *BlogRequest) (*BlogResponse, error)
	GetAll(context.Context, *BlogRequest) (*BlogAllResponse, error)
	UpdateBlog(context.Context, *BlogUpdateRequest) (*BlogUpdateResponse, error)
	DeleteBlog(context.Context, *BlogDeleteRequest) (*BlogDeleteResponse, error)
	mustEmbedUnimplementedApiServiceServer()
}

// UnimplementedApiServiceServer must be embedded to have forward compatible implementations.
type UnimplementedApiServiceServer struct {
}

func (UnimplementedApiServiceServer) CreateBlog(context.Context, *BlogCreateRequest) (*BlogResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateBlog not implemented")
}
func (UnimplementedApiServiceServer) GetBlog(context.Context, *BlogRequest) (*BlogResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBlog not implemented")
}
func (UnimplementedApiServiceServer) GetAll(context.Context, *BlogRequest) (*BlogAllResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAll not implemented")
}
func (UnimplementedApiServiceServer) UpdateBlog(context.Context, *BlogUpdateRequest) (*BlogUpdateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateBlog not implemented")
}
func (UnimplementedApiServiceServer) DeleteBlog(context.Context, *BlogDeleteRequest) (*BlogDeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteBlog not implemented")
}
func (UnimplementedApiServiceServer) mustEmbedUnimplementedApiServiceServer() {}

// UnsafeApiServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ApiServiceServer will
// result in compilation errors.
type UnsafeApiServiceServer interface {
	mustEmbedUnimplementedApiServiceServer()
}

func RegisterApiServiceServer(s grpc.ServiceRegistrar, srv ApiServiceServer) {
	s.RegisterService(&ApiService_ServiceDesc, srv)
}

func _ApiService_CreateBlog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BlogCreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiServiceServer).CreateBlog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ApiService/CreateBlog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiServiceServer).CreateBlog(ctx, req.(*BlogCreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiService_GetBlog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BlogRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiServiceServer).GetBlog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ApiService/GetBlog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiServiceServer).GetBlog(ctx, req.(*BlogRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiService_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BlogRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiServiceServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ApiService/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiServiceServer).GetAll(ctx, req.(*BlogRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiService_UpdateBlog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BlogUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiServiceServer).UpdateBlog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ApiService/UpdateBlog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiServiceServer).UpdateBlog(ctx, req.(*BlogUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiService_DeleteBlog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BlogDeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiServiceServer).DeleteBlog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ApiService/DeleteBlog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiServiceServer).DeleteBlog(ctx, req.(*BlogDeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ApiService_ServiceDesc is the grpc.ServiceDesc for ApiService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ApiService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ApiService",
	HandlerType: (*ApiServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateBlog",
			Handler:    _ApiService_CreateBlog_Handler,
		},
		{
			MethodName: "GetBlog",
			Handler:    _ApiService_GetBlog_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _ApiService_GetAll_Handler,
		},
		{
			MethodName: "UpdateBlog",
			Handler:    _ApiService_UpdateBlog_Handler,
		},
		{
			MethodName: "DeleteBlog",
			Handler:    _ApiService_DeleteBlog_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api.proto",
}
