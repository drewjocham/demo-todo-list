import * as jspb from 'google-protobuf'


export class TodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): TodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TodoRequest): TodoRequest.AsObject;
  static serializeBinaryToWriter(message: TodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoRequest;
  static deserializeBinaryFromReader(message: TodoRequest, reader: jspb.BinaryReader): TodoRequest;
}

export namespace TodoRequest {
  export type AsObject = {
    id: string,
  }
}

export class TodoResponse extends jspb.Message {
  getId(): string;
  setId(value: string): TodoResponse;

  getTitle(): string;
  setTitle(value: string): TodoResponse;

  getTime(): string;
  setTime(value: string): TodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoResponse): TodoResponse.AsObject;
  static serializeBinaryToWriter(message: TodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoResponse;
  static deserializeBinaryFromReader(message: TodoResponse, reader: jspb.BinaryReader): TodoResponse;
}

export namespace TodoResponse {
  export type AsObject = {
    id: string,
    title: string,
    time: string,
  }
}

export class Todo extends jspb.Message {
  getId(): string;
  setId(value: string): Todo;

  getTitle(): string;
  setTitle(value: string): Todo;

  getTime(): string;
  setTime(value: string): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    id: string,
    title: string,
    time: string,
  }
}

export class TodoAllResponse extends jspb.Message {
  getTodoList(): Array<Todo>;
  setTodoList(value: Array<Todo>): TodoAllResponse;
  clearTodoList(): TodoAllResponse;
  addTodo(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoAllResponse): TodoAllResponse.AsObject;
  static serializeBinaryToWriter(message: TodoAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoAllResponse;
  static deserializeBinaryFromReader(message: TodoAllResponse, reader: jspb.BinaryReader): TodoAllResponse;
}

export namespace TodoAllResponse {
  export type AsObject = {
    todoList: Array<Todo.AsObject>,
  }
}

export class TodoDeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): TodoDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TodoDeleteRequest): TodoDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: TodoDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoDeleteRequest;
  static deserializeBinaryFromReader(message: TodoDeleteRequest, reader: jspb.BinaryReader): TodoDeleteRequest;
}

export namespace TodoDeleteRequest {
  export type AsObject = {
    id: string,
  }
}

export class TodoDeleteResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): TodoDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoDeleteResponse): TodoDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: TodoDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoDeleteResponse;
  static deserializeBinaryFromReader(message: TodoDeleteResponse, reader: jspb.BinaryReader): TodoDeleteResponse;
}

export namespace TodoDeleteResponse {
  export type AsObject = {
    count: number,
  }
}

export class TodoUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): TodoUpdateRequest;

  getTitle(): string;
  setTitle(value: string): TodoUpdateRequest;

  getCount(): number;
  setCount(value: number): TodoUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TodoUpdateRequest): TodoUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: TodoUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoUpdateRequest;
  static deserializeBinaryFromReader(message: TodoUpdateRequest, reader: jspb.BinaryReader): TodoUpdateRequest;
}

export namespace TodoUpdateRequest {
  export type AsObject = {
    id: string,
    title: string,
    count: number,
  }
}

export class TodoUpdateResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): TodoUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoUpdateResponse): TodoUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: TodoUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoUpdateResponse;
  static deserializeBinaryFromReader(message: TodoUpdateResponse, reader: jspb.BinaryReader): TodoUpdateResponse;
}

export namespace TodoUpdateResponse {
  export type AsObject = {
    count: number,
  }
}

export class TodoCreateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): TodoCreateRequest;

  getTitle(): string;
  setTitle(value: string): TodoCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TodoCreateRequest): TodoCreateRequest.AsObject;
  static serializeBinaryToWriter(message: TodoCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoCreateRequest;
  static deserializeBinaryFromReader(message: TodoCreateRequest, reader: jspb.BinaryReader): TodoCreateRequest;
}

export namespace TodoCreateRequest {
  export type AsObject = {
    id: string,
    title: string,
  }
}

