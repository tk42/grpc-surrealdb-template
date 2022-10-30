// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var book_v1_book_pb = require('../../book/v1/book_pb.js');
var google_type_datetime_pb = require('../../google/type/datetime_pb.js');

function serialize_book_v1_AddBookRequest(arg) {
  if (!(arg instanceof book_v1_book_pb.AddBookRequest)) {
    throw new Error('Expected argument of type book.v1.AddBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_v1_AddBookRequest(buffer_arg) {
  return book_v1_book_pb.AddBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_v1_AddBookResponse(arg) {
  if (!(arg instanceof book_v1_book_pb.AddBookResponse)) {
    throw new Error('Expected argument of type book.v1.AddBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_v1_AddBookResponse(buffer_arg) {
  return book_v1_book_pb.AddBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_v1_DeleteBookRequest(arg) {
  if (!(arg instanceof book_v1_book_pb.DeleteBookRequest)) {
    throw new Error('Expected argument of type book.v1.DeleteBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_v1_DeleteBookRequest(buffer_arg) {
  return book_v1_book_pb.DeleteBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_v1_DeleteBookResponse(arg) {
  if (!(arg instanceof book_v1_book_pb.DeleteBookResponse)) {
    throw new Error('Expected argument of type book.v1.DeleteBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_v1_DeleteBookResponse(buffer_arg) {
  return book_v1_book_pb.DeleteBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_v1_GetBooksRequest(arg) {
  if (!(arg instanceof book_v1_book_pb.GetBooksRequest)) {
    throw new Error('Expected argument of type book.v1.GetBooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_v1_GetBooksRequest(buffer_arg) {
  return book_v1_book_pb.GetBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_v1_GetBooksResponse(arg) {
  if (!(arg instanceof book_v1_book_pb.GetBooksResponse)) {
    throw new Error('Expected argument of type book.v1.GetBooksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_v1_GetBooksResponse(buffer_arg) {
  return book_v1_book_pb.GetBooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_v1_UpdateBookRequest(arg) {
  if (!(arg instanceof book_v1_book_pb.UpdateBookRequest)) {
    throw new Error('Expected argument of type book.v1.UpdateBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_v1_UpdateBookRequest(buffer_arg) {
  return book_v1_book_pb.UpdateBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_v1_UpdateBookResponse(arg) {
  if (!(arg instanceof book_v1_book_pb.UpdateBookResponse)) {
    throw new Error('Expected argument of type book.v1.UpdateBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_v1_UpdateBookResponse(buffer_arg) {
  return book_v1_book_pb.UpdateBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookServiceService = exports.BookServiceService = {
  getBooks: {
    path: '/book.v1.BookService/GetBooks',
    requestStream: false,
    responseStream: false,
    requestType: book_v1_book_pb.GetBooksRequest,
    responseType: book_v1_book_pb.GetBooksResponse,
    requestSerialize: serialize_book_v1_GetBooksRequest,
    requestDeserialize: deserialize_book_v1_GetBooksRequest,
    responseSerialize: serialize_book_v1_GetBooksResponse,
    responseDeserialize: deserialize_book_v1_GetBooksResponse,
  },
  addBook: {
    path: '/book.v1.BookService/AddBook',
    requestStream: false,
    responseStream: false,
    requestType: book_v1_book_pb.AddBookRequest,
    responseType: book_v1_book_pb.AddBookResponse,
    requestSerialize: serialize_book_v1_AddBookRequest,
    requestDeserialize: deserialize_book_v1_AddBookRequest,
    responseSerialize: serialize_book_v1_AddBookResponse,
    responseDeserialize: deserialize_book_v1_AddBookResponse,
  },
  updateBook: {
    path: '/book.v1.BookService/UpdateBook',
    requestStream: false,
    responseStream: false,
    requestType: book_v1_book_pb.UpdateBookRequest,
    responseType: book_v1_book_pb.UpdateBookResponse,
    requestSerialize: serialize_book_v1_UpdateBookRequest,
    requestDeserialize: deserialize_book_v1_UpdateBookRequest,
    responseSerialize: serialize_book_v1_UpdateBookResponse,
    responseDeserialize: deserialize_book_v1_UpdateBookResponse,
  },
  deleteBook: {
    path: '/book.v1.BookService/DeleteBook',
    requestStream: false,
    responseStream: false,
    requestType: book_v1_book_pb.DeleteBookRequest,
    responseType: book_v1_book_pb.DeleteBookResponse,
    requestSerialize: serialize_book_v1_DeleteBookRequest,
    requestDeserialize: deserialize_book_v1_DeleteBookRequest,
    responseSerialize: serialize_book_v1_DeleteBookResponse,
    responseDeserialize: deserialize_book_v1_DeleteBookResponse,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
