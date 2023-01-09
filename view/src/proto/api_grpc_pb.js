// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_pb = require('./api_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_TodoAllResponse(arg) {
  if (!(arg instanceof api_pb.TodoAllResponse)) {
    throw new Error('Expected argument of type TodoAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoAllResponse(buffer_arg) {
  return api_pb.TodoAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TodoCreateRequest(arg) {
  if (!(arg instanceof api_pb.TodoCreateRequest)) {
    throw new Error('Expected argument of type TodoCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoCreateRequest(buffer_arg) {
  return api_pb.TodoCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TodoDeleteRequest(arg) {
  if (!(arg instanceof api_pb.TodoDeleteRequest)) {
    throw new Error('Expected argument of type TodoDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoDeleteRequest(buffer_arg) {
  return api_pb.TodoDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TodoDeleteResponse(arg) {
  if (!(arg instanceof api_pb.TodoDeleteResponse)) {
    throw new Error('Expected argument of type TodoDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoDeleteResponse(buffer_arg) {
  return api_pb.TodoDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TodoRequest(arg) {
  if (!(arg instanceof api_pb.TodoRequest)) {
    throw new Error('Expected argument of type TodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoRequest(buffer_arg) {
  return api_pb.TodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TodoResponse(arg) {
  if (!(arg instanceof api_pb.TodoResponse)) {
    throw new Error('Expected argument of type TodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoResponse(buffer_arg) {
  return api_pb.TodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TodoUpdateRequest(arg) {
  if (!(arg instanceof api_pb.TodoUpdateRequest)) {
    throw new Error('Expected argument of type TodoUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoUpdateRequest(buffer_arg) {
  return api_pb.TodoUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TodoUpdateResponse(arg) {
  if (!(arg instanceof api_pb.TodoUpdateResponse)) {
    throw new Error('Expected argument of type TodoUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TodoUpdateResponse(buffer_arg) {
  return api_pb.TodoUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiServiceService = exports.ApiServiceService = {
  create: {
    path: '/ApiService/Create',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TodoCreateRequest,
    responseType: api_pb.TodoResponse,
    requestSerialize: serialize_TodoCreateRequest,
    requestDeserialize: deserialize_TodoCreateRequest,
    responseSerialize: serialize_TodoResponse,
    responseDeserialize: deserialize_TodoResponse,
  },
  getOne: {
    path: '/ApiService/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TodoRequest,
    responseType: api_pb.TodoResponse,
    requestSerialize: serialize_TodoRequest,
    requestDeserialize: deserialize_TodoRequest,
    responseSerialize: serialize_TodoResponse,
    responseDeserialize: deserialize_TodoResponse,
  },
  getAll: {
    path: '/ApiService/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TodoRequest,
    responseType: api_pb.TodoAllResponse,
    requestSerialize: serialize_TodoRequest,
    requestDeserialize: deserialize_TodoRequest,
    responseSerialize: serialize_TodoAllResponse,
    responseDeserialize: deserialize_TodoAllResponse,
  },
  update: {
    path: '/ApiService/Update',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TodoUpdateRequest,
    responseType: api_pb.TodoUpdateResponse,
    requestSerialize: serialize_TodoUpdateRequest,
    requestDeserialize: deserialize_TodoUpdateRequest,
    responseSerialize: serialize_TodoUpdateResponse,
    responseDeserialize: deserialize_TodoUpdateResponse,
  },
  delete: {
    path: '/ApiService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TodoDeleteRequest,
    responseType: api_pb.TodoDeleteResponse,
    requestSerialize: serialize_TodoDeleteRequest,
    requestDeserialize: deserialize_TodoDeleteRequest,
    responseSerialize: serialize_TodoDeleteResponse,
    responseDeserialize: deserialize_TodoDeleteResponse,
  },
};

exports.ApiServiceClient = grpc.makeGenericClientConstructor(ApiServiceService);
