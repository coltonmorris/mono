import {grpc} from "grpc-web-client";
import {BookService} from "@proto/book_service_pb_service";
import {QueryBooksRequest, Book, GetBookRequest} from "@proto/book_service_pb";

const host = "http://localhost:9090";

function getBook() {
  const getBookRequest = new GetBookRequest();
  getBookRequest.setIsbn(60929871);
  grpc.unary(BookService.GetBook, {
    request: getBookRequest,
    metadata: new grpc.Metadata({"x-grpc-web":"1", "authorization":"Bearer teest"}),
    host: host,
    onEnd: res => {
      const { status, statusMessage, headers, message, trailers } = res;
      console.log("getBook.onEnd.status", status, statusMessage);
      console.log("getBook.onEnd.headers", headers);
      if (status === grpc.Code.OK && message) {
        console.log("getBook.onEnd.message", message.toObject());
      }
      console.log("getBook.onEnd.trailers", trailers);
      queryBooks();
    }
  });
}

function queryBooks() {
  const queryBooksRequest = new QueryBooksRequest();
  queryBooksRequest.setAuthorPrefix("Geor");
  const client = grpc.client(BookService.QueryBooks, {
    host: host,
    metadata: new grpc.Metadata({"Authorization": "Bearer teeeeeest"}),
  });
  client.onHeaders((headers: grpc.Metadata) => {
    console.log("queryBooks.onHeaders", headers);
  });
  client.onMessage((message: Book) => {
    console.log("queryBooks.onMessage", message.toObject());
  });
  client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
    console.log("queryBooks.onEnd", code, msg, trailers);
  });
  client.start();
  client.send(queryBooksRequest);
}

console.log('start');
setInterval(function() {
  console.log("Executing grpc request...");
  getBook();
} , 2000);

var ele = document.getElementById("app")
if (ele && ele.innerHTML) {
  ele.innerHTML = "Check the console";
}
