// package: 
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_pb from "./api_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createBlog: IApiServiceService_ICreateBlog;
    getBlog: IApiServiceService_IGetBlog;
    getAll: IApiServiceService_IGetAll;
    updateBlog: IApiServiceService_IUpdateBlog;
    deleteBlog: IApiServiceService_IDeleteBlog;
}

interface IApiServiceService_ICreateBlog extends grpc.MethodDefinition<api_pb.BlogCreateRequest, api_pb.BlogResponse> {
    path: "/ApiService/CreateBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.BlogCreateRequest>;
    requestDeserialize: grpc.deserialize<api_pb.BlogCreateRequest>;
    responseSerialize: grpc.serialize<api_pb.BlogResponse>;
    responseDeserialize: grpc.deserialize<api_pb.BlogResponse>;
}
interface IApiServiceService_IGetBlog extends grpc.MethodDefinition<api_pb.BlogRequest, api_pb.BlogResponse> {
    path: "/ApiService/GetBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.BlogRequest>;
    requestDeserialize: grpc.deserialize<api_pb.BlogRequest>;
    responseSerialize: grpc.serialize<api_pb.BlogResponse>;
    responseDeserialize: grpc.deserialize<api_pb.BlogResponse>;
}
interface IApiServiceService_IGetAll extends grpc.MethodDefinition<api_pb.BlogRequest, api_pb.BlogAllResponse> {
    path: "/ApiService/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.BlogRequest>;
    requestDeserialize: grpc.deserialize<api_pb.BlogRequest>;
    responseSerialize: grpc.serialize<api_pb.BlogAllResponse>;
    responseDeserialize: grpc.deserialize<api_pb.BlogAllResponse>;
}
interface IApiServiceService_IUpdateBlog extends grpc.MethodDefinition<api_pb.BlogUpdateRequest, api_pb.BlogUpdateResponse> {
    path: "/ApiService/UpdateBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.BlogUpdateRequest>;
    requestDeserialize: grpc.deserialize<api_pb.BlogUpdateRequest>;
    responseSerialize: grpc.serialize<api_pb.BlogUpdateResponse>;
    responseDeserialize: grpc.deserialize<api_pb.BlogUpdateResponse>;
}
interface IApiServiceService_IDeleteBlog extends grpc.MethodDefinition<api_pb.BlogDeleteRequest, api_pb.BlogDeleteResponse> {
    path: "/ApiService/DeleteBlog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.BlogDeleteRequest>;
    requestDeserialize: grpc.deserialize<api_pb.BlogDeleteRequest>;
    responseSerialize: grpc.serialize<api_pb.BlogDeleteResponse>;
    responseDeserialize: grpc.deserialize<api_pb.BlogDeleteResponse>;
}

export const ApiServiceService: IApiServiceService;

export interface IApiServiceServer extends grpc.UntypedServiceImplementation {
    createBlog: grpc.handleUnaryCall<api_pb.BlogCreateRequest, api_pb.BlogResponse>;
    getBlog: grpc.handleUnaryCall<api_pb.BlogRequest, api_pb.BlogResponse>;
    getAll: grpc.handleUnaryCall<api_pb.BlogRequest, api_pb.BlogAllResponse>;
    updateBlog: grpc.handleUnaryCall<api_pb.BlogUpdateRequest, api_pb.BlogUpdateResponse>;
    deleteBlog: grpc.handleUnaryCall<api_pb.BlogDeleteRequest, api_pb.BlogDeleteResponse>;
}

export interface IApiServiceClient {
    createBlog(request: api_pb.BlogCreateRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    createBlog(request: api_pb.BlogCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    createBlog(request: api_pb.BlogCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: api_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: api_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getBlog(request: api_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    getAll(request: api_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogAllResponse) => void): grpc.ClientUnaryCall;
    getAll(request: api_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogAllResponse) => void): grpc.ClientUnaryCall;
    getAll(request: api_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogAllResponse) => void): grpc.ClientUnaryCall;
    updateBlog(request: api_pb.BlogUpdateRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogUpdateResponse) => void): grpc.ClientUnaryCall;
    updateBlog(request: api_pb.BlogUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogUpdateResponse) => void): grpc.ClientUnaryCall;
    updateBlog(request: api_pb.BlogUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogUpdateResponse) => void): grpc.ClientUnaryCall;
    deleteBlog(request: api_pb.BlogDeleteRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogDeleteResponse) => void): grpc.ClientUnaryCall;
    deleteBlog(request: api_pb.BlogDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogDeleteResponse) => void): grpc.ClientUnaryCall;
    deleteBlog(request: api_pb.BlogDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class ApiServiceClient extends grpc.Client implements IApiServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createBlog(request: api_pb.BlogCreateRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public createBlog(request: api_pb.BlogCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public createBlog(request: api_pb.BlogCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: api_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: api_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getBlog(request: api_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: api_pb.BlogRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogAllResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: api_pb.BlogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogAllResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: api_pb.BlogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogAllResponse) => void): grpc.ClientUnaryCall;
    public updateBlog(request: api_pb.BlogUpdateRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateBlog(request: api_pb.BlogUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateBlog(request: api_pb.BlogUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogUpdateResponse) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: api_pb.BlogDeleteRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlogDeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: api_pb.BlogDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlogDeleteResponse) => void): grpc.ClientUnaryCall;
    public deleteBlog(request: api_pb.BlogDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlogDeleteResponse) => void): grpc.ClientUnaryCall;
}
