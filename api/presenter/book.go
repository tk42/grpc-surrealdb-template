package presenter

import (
	"fmt"
	"time"

	bufbuild "github.com/tk42/grpc-surrealdb-template/gen/proto/golang/github.com/tk42/grpc-surrealdb-template"
	"github.com/tk42/grpc-surrealdb-template/pkg/entities"
	"google.golang.org/genproto/googleapis/type/datetime"
)

func time2datetime(t time.Time) *datetime.DateTime {
	return &datetime.DateTime{
		Year:    int32(t.Year()),
		Month:   int32(t.Month()),
		Day:     int32(t.Day()),
		Hours:   int32(t.Hour()),
		Minutes: int32(t.Minute()),
		Seconds: int32(t.Second()),
		Nanos:   int32(t.Nanosecond()),
	}
}

func SuccessAddBookResponse(book *entities.Book) (*bufbuild.AddBookResponse, error) {
	return &bufbuild.AddBookResponse{
		Book: &bufbuild.Book{
			Id:        book.ID,
			Title:     book.Title,
			Author:    book.Author,
			CreatedAt: time2datetime(book.CreatedAt),
			UpdatedAt: time2datetime(book.UpdatedAt),
		},
	}, nil
}

func FailAddBookResponse(msg string) (*bufbuild.AddBookResponse, error) {
	return nil, fmt.Errorf(msg)
}

func SuccessDeleteBookResponse() (*bufbuild.DeleteBookResponse, error) {
	return &bufbuild.DeleteBookResponse{}, nil
}

func FailDeleteBookResponse(msg string) (*bufbuild.DeleteBookResponse, error) {
	return nil, fmt.Errorf(msg)
}

func SuccessUpdateBookResponse(book *entities.Book) (*bufbuild.UpdateBookResponse, error) {
	return &bufbuild.UpdateBookResponse{
		Book: &bufbuild.Book{
			Id:        book.ID,
			Title:     book.Title,
			Author:    book.Author,
			CreatedAt: time2datetime(book.CreatedAt),
			UpdatedAt: time2datetime(book.UpdatedAt),
		},
	}, nil
}

func FailUpdateBookResponse(msg string) (*bufbuild.UpdateBookResponse, error) {
	return nil, fmt.Errorf(msg)
}

func SuccessGetBooksResponse(books *[]entities.Book) (*bufbuild.GetBooksResponse, error) {
	return &bufbuild.GetBooksResponse{
		Books: func() []*bufbuild.Book {
			var booksProto []*bufbuild.Book
			for _, book := range *books {
				booksProto = append(booksProto, &bufbuild.Book{
					Id:        book.ID,
					Title:     book.Title,
					Author:    book.Author,
					CreatedAt: time2datetime(book.CreatedAt),
					UpdatedAt: time2datetime(book.UpdatedAt),
				})
			}
			return booksProto
		}(),
	}, nil
}

func FailGetBooksResponse(msg string) (*bufbuild.GetBooksResponse, error) {
	return nil, fmt.Errorf(msg)
}
