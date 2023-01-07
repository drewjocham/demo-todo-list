// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_pb = require('./api_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_BlogAllResponse(arg) {
  if (!(arg instanceof api_pb.BlogAllResponse)) {
    throw new Error('Expected argument of type BlogAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogAllResponse(buffer_arg) {
  return api_pb.BlogAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogCreateRequest(arg) {
  if (!(arg instanceof api_pb.BlogCreateRequest)) {
    throw new Error('Expected argument of type BlogCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogCreateRequest(buffer_arg) {
  return api_pb.BlogCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogDeleteRequest(arg) {
  if (!(arg instanceof api_pb.BlogDeleteRequest)) {
    throw new Error('Expected argument of type BlogDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogDeleteRequest(buffer_arg) {
  return api_pb.BlogDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogDeleteResponse(arg) {
  if (!(arg instanceof api_pb.BlogDeleteResponse)) {
    throw new Error('Expected argument of type BlogDeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogDeleteResponse(buffer_arg) {
  return api_pb.BlogDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogRequest(arg) {
  if (!(arg instanceof api_pb.BlogRequest)) {
    throw new Error('Expected argument of type BlogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogRequest(buffer_arg) {
  return api_pb.BlogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogResponse(arg) {
  if (!(arg instanceof api_pb.BlogResponse)) {
    throw new Error('Expected argument of type BlogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogResponse(buffer_arg) {
  return api_pb.BlogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogUpdateRequest(arg) {
  if (!(arg instanceof api_pb.BlogUpdateRequest)) {
    throw new Error('Expected argument of type BlogUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogUpdateRequest(buffer_arg) {
  return api_pb.BlogUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlogUpdateResponse(arg) {
  if (!(arg instanceof api_pb.BlogUpdateResponse)) {
    throw new Error('Expected argument of type BlogUpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlogUpdateResponse(buffer_arg) {
  return api_pb.BlogUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiServiceService = exports.ApiServiceService = {
  createBlog: {
    path: '/ApiService/CreateBlog',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.BlogCreateRequest,
    responseType: api_pb.BlogResponse,
    requestSerialize: serialize_BlogCreateRequest,
    requestDeserialize: deserialize_BlogCreateRequest,
    responseSerialize: serialize_BlogResponse,
    responseDeserialize: deserialize_BlogResponse,
  },
  getBlog: {
    path: '/ApiService/GetBlog',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.BlogRequest,
    responseType: api_pb.BlogResponse,
    requestSerialize: serialize_BlogRequest,
    requestDeserialize: deserialize_BlogRequest,
    responseSerialize: serialize_BlogResponse,
    responseDeserialize: deserialize_BlogResponse,
  },
  getAll: {
    path: '/ApiService/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.BlogRequest,
    responseType: api_pb.BlogAllResponse,
    requestSerialize: serialize_BlogRequest,
    requestDeserialize: deserialize_BlogRequest,
    responseSerialize: serialize_BlogAllResponse,
    responseDeserialize: deserialize_BlogAllResponse,
  },
  updateBlog: {
    path: '/ApiService/UpdateBlog',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.BlogUpdateRequest,
    responseType: api_pb.BlogUpdateResponse,
    requestSerialize: serialize_BlogUpdateRequest,
    requestDeserialize: deserialize_BlogUpdateRequest,
    responseSerialize: serialize_BlogUpdateResponse,
    responseDeserialize: deserialize_BlogUpdateResponse,
  },
  deleteBlog: {
    path: '/ApiService/DeleteBlog',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.BlogDeleteRequest,
    responseType: api_pb.BlogDeleteResponse,
    requestSerialize: serialize_BlogDeleteRequest,
    requestDeserialize: deserialize_BlogDeleteRequest,
    responseSerialize: serialize_BlogDeleteResponse,
    responseDeserialize: deserialize_BlogDeleteResponse,
  },
};

exports.ApiServiceClient = grpc.makeGenericClientConstructor(ApiServiceService);
