// package: 
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BlogRequest extends jspb.Message { 
    getBlogid(): string;
    setBlogid(value: string): BlogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogRequest): BlogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogRequest;
    static deserializeBinaryFromReader(message: BlogRequest, reader: jspb.BinaryReader): BlogRequest;
}

export namespace BlogRequest {
    export type AsObject = {
        blogid: string,
    }
}

export class BlogResponse extends jspb.Message { 
    getBlogid(): string;
    setBlogid(value: string): BlogResponse;
    getPost(): string;
    setPost(value: string): BlogResponse;
    getTime(): string;
    setTime(value: string): BlogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlogResponse): BlogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogResponse;
    static deserializeBinaryFromReader(message: BlogResponse, reader: jspb.BinaryReader): BlogResponse;
}

export namespace BlogResponse {
    export type AsObject = {
        blogid: string,
        post: string,
        time: string,
    }
}

export class Blog extends jspb.Message { 
    getBlogid(): string;
    setBlogid(value: string): Blog;
    getPost(): string;
    setPost(value: string): Blog;
    getTime(): string;
    setTime(value: string): Blog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blog.AsObject;
    static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blog;
    static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
    export type AsObject = {
        blogid: string,
        post: string,
        time: string,
    }
}

export class BlogAllResponse extends jspb.Message { 
    clearBlogList(): void;
    getBlogList(): Array<Blog>;
    setBlogList(value: Array<Blog>): BlogAllResponse;
    addBlog(value?: Blog, index?: number): Blog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlogAllResponse): BlogAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogAllResponse;
    static deserializeBinaryFromReader(message: BlogAllResponse, reader: jspb.BinaryReader): BlogAllResponse;
}

export namespace BlogAllResponse {
    export type AsObject = {
        blogList: Array<Blog.AsObject>,
    }
}

export class BlogDeleteRequest extends jspb.Message { 
    getBlogid(): string;
    setBlogid(value: string): BlogDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogDeleteRequest): BlogDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogDeleteRequest;
    static deserializeBinaryFromReader(message: BlogDeleteRequest, reader: jspb.BinaryReader): BlogDeleteRequest;
}

export namespace BlogDeleteRequest {
    export type AsObject = {
        blogid: string,
    }
}

export class BlogDeleteResponse extends jspb.Message { 
    getCount(): number;
    setCount(value: number): BlogDeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlogDeleteResponse): BlogDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogDeleteResponse;
    static deserializeBinaryFromReader(message: BlogDeleteResponse, reader: jspb.BinaryReader): BlogDeleteResponse;
}

export namespace BlogDeleteResponse {
    export type AsObject = {
        count: number,
    }
}

export class BlogUpdateRequest extends jspb.Message { 
    getBlogid(): string;
    setBlogid(value: string): BlogUpdateRequest;
    getPost(): string;
    setPost(value: string): BlogUpdateRequest;
    getCount(): number;
    setCount(value: number): BlogUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogUpdateRequest): BlogUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogUpdateRequest;
    static deserializeBinaryFromReader(message: BlogUpdateRequest, reader: jspb.BinaryReader): BlogUpdateRequest;
}

export namespace BlogUpdateRequest {
    export type AsObject = {
        blogid: string,
        post: string,
        count: number,
    }
}

export class BlogUpdateResponse extends jspb.Message { 
    getCount(): number;
    setCount(value: number): BlogUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlogUpdateResponse): BlogUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogUpdateResponse;
    static deserializeBinaryFromReader(message: BlogUpdateResponse, reader: jspb.BinaryReader): BlogUpdateResponse;
}

export namespace BlogUpdateResponse {
    export type AsObject = {
        count: number,
    }
}

export class BlogCreateRequest extends jspb.Message { 
    getBlogid(): string;
    setBlogid(value: string): BlogCreateRequest;
    getPost(): string;
    setPost(value: string): BlogCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlogCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlogCreateRequest): BlogCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlogCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlogCreateRequest;
    static deserializeBinaryFromReader(message: BlogCreateRequest, reader: jspb.BinaryReader): BlogCreateRequest;
}

export namespace BlogCreateRequest {
    export type AsObject = {
        blogid: string,
        post: string,
    }
}
