// Based off of the file at: https://github.com/improbable-eng/grpc-web/blob/master/example/go/exampleserver/exampleserver.go
package main

import (
  "fmt"
  "log"
  "net"
  "os"

  "google.golang.org/grpc"
  "google.golang.org/grpc/codes"
  "google.golang.org/grpc/grpclog"
  "google.golang.org/grpc/metadata"

  "strings"

  "golang.org/x/net/context"

  library "github.com/coltonmorris/mono/projects/grpc-web/proto"
)


func main() {
  port := 9091

  lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
  if err != nil {
    log.Fatalf("failed to listen: %v", err)
  }
  gs := grpc.NewServer()
  library.RegisterBookServiceServer(gs, &bookService{})
  grpclog.SetLogger(log.New(os.Stdout, "go server: ", log.LstdFlags))

  grpclog.Printf("Starting server at localhost:%v", port)

  gs.Serve(lis)
}

type bookService struct{}

var books = []*library.Book{
  {
    Isbn:   60929871,
    Title:  "Brave New World",
    Author: "Aldous Huxley",
  },
  {
    Isbn:   140009728,
    Title:  "Nineteen Eighty-Four",
    Author: "George Orwell",
  },
  {
    Isbn:   9780140301694,
    Title:  "Alice's Adventures in Wonderland",
    Author: "Lewis Carroll",
  },
  {
    Isbn:   140008381,
    Title:  "Animal Farm",
    Author: "George Orwell",
  },
}

func (s *bookService) GetBook(ctx context.Context, bookQuery *library.GetBookRequest) (*library.Book, error) {
  grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
  grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))

  for _, book := range books {
    if book.Isbn == bookQuery.Isbn {
      return book, nil
    }
  }

  return nil, grpc.Errorf(codes.NotFound, "Book could not be found")
}

func (s *bookService) QueryBooks(bookQuery *library.QueryBooksRequest, stream library.BookService_QueryBooksServer) error {
  stream.SendHeader(metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-stream"))
  for _, book := range books {
    if strings.HasPrefix(book.Author, bookQuery.AuthorPrefix) {
      stream.Send(book)
    }
  }
  stream.SetTrailer(metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-stream"))
  return nil
}
