// package: examplecom.library
// file: book_service.proto

import * as book_service_pb from "./book_service_pb";

type BookServiceGetBook = {
  readonly methodName: string;
  readonly service: typeof BookService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof book_service_pb.GetBookRequest;
  readonly responseType: typeof book_service_pb.Book;
};

type BookServiceQueryBooks = {
  readonly methodName: string;
  readonly service: typeof BookService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof book_service_pb.QueryBooksRequest;
  readonly responseType: typeof book_service_pb.Book;
};

export class BookService {
  static readonly serviceName: string;
  static readonly GetBook: BookServiceGetBook;
  static readonly QueryBooks: BookServiceQueryBooks;
}
