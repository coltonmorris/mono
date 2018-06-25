// package: examplecom.library
// file: projects/grpc-web/proto/book_service.proto

var projects_grpc_web_proto_book_service_pb = require("../../../projects/grpc-web/proto/book_service_pb");
var grpc = require("grpc-web-client").grpc;

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
  requestType: projects_grpc_web_proto_book_service_pb.GetBookRequest,
  responseType: projects_grpc_web_proto_book_service_pb.Book
};

BookService.QueryBooks = {
  methodName: "QueryBooks",
  service: BookService,
  requestStream: false,
  responseStream: true,
  requestType: projects_grpc_web_proto_book_service_pb.QueryBooksRequest,
  responseType: projects_grpc_web_proto_book_service_pb.Book
};

exports.BookService = BookService;

function BookServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BookServiceClient.prototype.getBook = function getBook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(BookService.GetBook, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

BookServiceClient.prototype.queryBooks = function queryBooks(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BookService.QueryBooks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.BookServiceClient = BookServiceClient;
