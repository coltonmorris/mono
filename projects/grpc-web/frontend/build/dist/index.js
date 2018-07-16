"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_web_client_1 = require("grpc-web-client");
var book_service_pb_service_1 = require("mono/projects/grpc-web/frontend/src/external/projects/grpc-web/proto/book_service_pb_service");
var book_service_pb_1 = require("mono/projects/grpc-web/frontend/src/external/projects/grpc-web/proto/book_service_pb");
var host = "http://localhost:9090";
function getBook() {
    var getBookRequest = new book_service_pb_1.GetBookRequest();
    getBookRequest.setIsbn(60929871);
    grpc_web_client_1.grpc.unary(book_service_pb_service_1.BookService.GetBook, {
        request: getBookRequest,
        metadata: new grpc_web_client_1.grpc.Metadata({ "x-grpc-web": "1", "authorization": "Bearer teest" }),
        host: host,
        onEnd: function (res) {
            var status = res.status, statusMessage = res.statusMessage, headers = res.headers, message = res.message, trailers = res.trailers;
            console.log("getBook.onEnd.status", status, statusMessage);
            console.log("getBook.onEnd.headers", headers);
            if (status === grpc_web_client_1.grpc.Code.OK && message) {
                console.log("getBook.onEnd.message", message.toObject());
            }
            console.log("getBook.onEnd.trailers", trailers);
            queryBooks();
        }
    });
}
function queryBooks() {
    var queryBooksRequest = new book_service_pb_1.QueryBooksRequest();
    queryBooksRequest.setAuthorPrefix("Geor");
    var client = grpc_web_client_1.grpc.client(book_service_pb_service_1.BookService.QueryBooks, {
        host: host,
    });
    client.onHeaders(function (headers) {
        console.log("queryBooks.onHeaders", headers);
    });
    client.onMessage(function (message) {
        console.log("queryBooks.onMessage", message.toObject());
    });
    client.onEnd(function (code, msg, trailers) {
        console.log("queryBooks.onEnd", code, msg, trailers);
    });
    client.start(new grpc_web_client_1.grpc.Metadata({ "Authorization": "Bearer testttting" }));
    client.send(queryBooksRequest);
}
console.log('start');
setInterval(function () {
    console.log("Executing grpc request...");
    getBook();
}, 2000);
var ele = document.getElementById("app");
if (ele && ele.innerHTML) {
    ele.innerHTML = "Check the console";
}
//# sourceMappingURL=index.js.map