package handlers

import (
	"context"

	"github.com/tk42/grpc-surrealdb-template/api/presenter"
	bufbuild "github.com/tk42/grpc-surrealdb-template/gen/golang/github.com/tk42/grpc-surrealdb-template"
	"github.com/tk42/grpc-surrealdb-template/pkg/book"
	"github.com/tk42/grpc-surrealdb-template/pkg/entities"
)

type BookServiceServer struct {
	srv book.Service
}

func NewBookServiceHandler(srv book.Service) bufbuild.BookServiceServer {
	return &BookServiceServer{
		srv: srv,
	}
}

func (s BookServiceServer) AddBook(ctx context.Context, req *bufbuild.AddBookRequest) (*bufbuild.AddBookResponse, error) {
	// Write implementation here
	if req.Author == "" || req.Title == "" {
		return presenter.FailAddBookResponse("Author or Title is empty")
	}
	book, err := s.srv.InsertBook(&entities.Book{
		Title:  req.Title,
		Author: req.Author,
	})
	if err != nil {
		return presenter.FailAddBookResponse(err.Error())
	}
	return presenter.SuccessAddBookResponse(book)
}

func (s BookServiceServer) DeleteBook(ctx context.Context, req *bufbuild.DeleteBookRequest) (*bufbuild.DeleteBookResponse, error) {
	// Write implementation here
	if req.Id == "" {
		return presenter.FailDeleteBookResponse("ID is empty")
	}
	err := s.srv.RemoveBook(req.Id)
	if err != nil {
		return presenter.FailDeleteBookResponse(err.Error())
	}
	return presenter.SuccessDeleteBookResponse()
}

func (s BookServiceServer) UpdateBook(ctx context.Context, req *bufbuild.UpdateBookRequest) (*bufbuild.UpdateBookResponse, error) {
	// Write implementation here
	if req.Author == nil && req.Title == nil {
		return presenter.FailUpdateBookResponse("Both Author and Title are empty")
	}

	b := new(entities.Book)
	b.ID = req.Id
	if req.GetAuthor() != "" {
		b.Author = *req.Author
	}
	if req.GetTitle() != "" {
		b.Title = *req.Title
	}

	book, err := s.srv.UpdateBook(b)
	if err != nil {
		return presenter.FailUpdateBookResponse(err.Error())
	}
	return presenter.SuccessUpdateBookResponse(book)
}

func (s BookServiceServer) GetBooks(ctx context.Context, req *bufbuild.GetBooksRequest) (*bufbuild.GetBooksResponse, error) {
	// Write implementation here
	books, err := s.srv.FetchBooks()
	if err != nil {
		return presenter.FailGetBooksResponse(err.Error())
	}
	return presenter.SuccessGetBooksResponse(books)
}
