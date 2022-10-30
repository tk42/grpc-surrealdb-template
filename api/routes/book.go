package routes

import (
	"github.com/tk42/grpc-surrealdb-template/api/handlers"
	"github.com/tk42/grpc-surrealdb-template/pkg/book"

	bufbuild "github.com/tk42/grpc-surrealdb-template/gen/golang/github.com/tk42/grpc-surrealdb-template"
)

// BookRouter is the Router for App
func BookRouter(repo book.Repository) bufbuild.BookServiceServer {
	bookService := book.NewService(repo)
	return handlers.NewBookServiceHandler(bookService)
}
