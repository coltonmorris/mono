// package: examplecom.library
// file: book_service.proto

var book_service_pb = require("./book_service_pb");

var BookService = (function () {
  function BookService() {}
  BookService.serviceName = "examplecom.library.BookService";
  return BookService;
}());

BookService.GetBook = {
  methodName: "GetBook",
  service: BookService,
  requestStream: false,
  responseStream: false,
  requestType: book_service_pb.GetBookRequest,
  responseType: book_service_pb.Book
};

BookService.QueryBooks = {
  methodName: "QueryBooks",
  service: BookService,
  requestStream: false,
  responseStream: true,
  requestType: book_service_pb.QueryBooksRequest,
  responseType: book_service_pb.Book
};

exports.BookService = BookService;

