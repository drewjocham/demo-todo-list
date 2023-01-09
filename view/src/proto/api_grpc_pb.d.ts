// package: 
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_pb from "./api_pb";

interface IApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IApiServiceService_ICreate;
    getOne: IApiServiceService_IGetOne;
    getAll: IApiServiceService_IGetAll;
    update: IApiServiceService_IUpdate;
    delete: IApiServiceService_IDelete;
}

interface IApiServiceService_ICreate extends grpc.MethodDefinition<api_pb.TodoCreateRequest, api_pb.TodoResponse> {
    path: "/ApiService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.TodoCreateRequest>;
    requestDeserialize: grpc.deserialize<api_pb.TodoCreateRequest>;
    responseSerialize: grpc.serialize<api_pb.TodoResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TodoResponse>;
}
interface IApiServiceService_IGetOne extends grpc.MethodDefinition<api_pb.TodoRequest, api_pb.TodoResponse> {
    path: "/ApiService/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.TodoRequest>;
    requestDeserialize: grpc.deserialize<api_pb.TodoRequest>;
    responseSerialize: grpc.serialize<api_pb.TodoResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TodoResponse>;
}
interface IApiServiceService_IGetAll extends grpc.MethodDefinition<api_pb.TodoRequest, api_pb.TodoAllResponse> {
    path: "/ApiService/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.TodoRequest>;
    requestDeserialize: grpc.deserialize<api_pb.TodoRequest>;
    responseSerialize: grpc.serialize<api_pb.TodoAllResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TodoAllResponse>;
}
interface IApiServiceService_IUpdate extends grpc.MethodDefinition<api_pb.TodoUpdateRequest, api_pb.TodoUpdateResponse> {
    path: "/ApiService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.TodoUpdateRequest>;
    requestDeserialize: grpc.deserialize<api_pb.TodoUpdateRequest>;
    responseSerialize: grpc.serialize<api_pb.TodoUpdateResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TodoUpdateResponse>;
}
interface IApiServiceService_IDelete extends grpc.MethodDefinition<api_pb.TodoDeleteRequest, api_pb.TodoDeleteResponse> {
    path: "/ApiService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.TodoDeleteRequest>;
    requestDeserialize: grpc.deserialize<api_pb.TodoDeleteRequest>;
    responseSerialize: grpc.serialize<api_pb.TodoDeleteResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TodoDeleteResponse>;
}

export const ApiServiceService: IApiServiceService;

export interface IApiServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<api_pb.TodoCreateRequest, api_pb.TodoResponse>;
    getOne: grpc.handleUnaryCall<api_pb.TodoRequest, api_pb.TodoResponse>;
    getAll: grpc.handleUnaryCall<api_pb.TodoRequest, api_pb.TodoAllResponse>;
    update: grpc.handleUnaryCall<api_pb.TodoUpdateRequest, api_pb.TodoUpdateResponse>;
    delete: grpc.handleUnaryCall<api_pb.TodoDeleteRequest, api_pb.TodoDeleteResponse>;
}

export interface IApiServiceClient {
    create(request: api_pb.TodoCreateRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    create(request: api_pb.TodoCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    create(request: api_pb.TodoCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    getOne(request: api_pb.TodoRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    getOne(request: api_pb.TodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    getOne(request: api_pb.TodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    getAll(request: api_pb.TodoRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoAllResponse) => void): grpc.ClientUnaryCall;
    getAll(request: api_pb.TodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoAllResponse) => void): grpc.ClientUnaryCall;
    getAll(request: api_pb.TodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoAllResponse) => void): grpc.ClientUnaryCall;
    update(request: api_pb.TodoUpdateRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoUpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: api_pb.TodoUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoUpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: api_pb.TodoUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoUpdateResponse) => void): grpc.ClientUnaryCall;
    delete(request: api_pb.TodoDeleteRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoDeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: api_pb.TodoDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoDeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: api_pb.TodoDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class ApiServiceClient extends grpc.Client implements IApiServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: api_pb.TodoCreateRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_pb.TodoCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public create(request: api_pb.TodoCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: api_pb.TodoRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: api_pb.TodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: api_pb.TodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: api_pb.TodoRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoAllResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: api_pb.TodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoAllResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: api_pb.TodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoAllResponse) => void): grpc.ClientUnaryCall;
    public update(request: api_pb.TodoUpdateRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoUpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: api_pb.TodoUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoUpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: api_pb.TodoUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoUpdateResponse) => void): grpc.ClientUnaryCall;
    public delete(request: api_pb.TodoDeleteRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TodoDeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: api_pb.TodoDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TodoDeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: api_pb.TodoDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TodoDeleteResponse) => void): grpc.ClientUnaryCall;
}
