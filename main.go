package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/tk42/grpc-surrealdb-template/api/routes"
	"github.com/tk42/grpc-surrealdb-template/pkg/book"

	bufbuild "github.com/tk42/grpc-surrealdb-template/gen/golang/github.com/tk42/grpc-surrealdb-template"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	surrealdb "github.com/surrealdb/surrealdb.go"
)

var (
	SERVER_PORT    = os.Getenv("PORT")
	SURREALDB_URL  = os.Getenv("SURREALDB_URL")
	SURREALDB_USER = os.Getenv("SURREALDB_USER")
	SURREALDB_PASS = os.Getenv("SURREALDB_PASS")
)

func main() {
	db, err := databaseConnection()
	if err != nil {
		log.Fatal("Database Connection Error $s", err)
	}
	fmt.Println("Database connection success!")
	bookRepo := book.NewRepo(db)

	svc := routes.BookRouter(bookRepo)

	server := grpc.NewServer()

	reflection.Register(server) // Failed to list services: server does not support the reflection API
	bufbuild.RegisterBookServiceServer(server, svc)

	lis, err := net.Listen("tcp", ":"+SERVER_PORT)
	if err != nil {
		log.Fatalf("failed to listen: %s", err)
	}

	if err := server.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}

func databaseConnection() (*surrealdb.DB, error) {
	db, err := surrealdb.New(SURREALDB_URL)
	if err != nil {
		return nil, err
	}

	_, err = db.Signin(map[string]interface{}{
		"user": SURREALDB_USER,
		"pass": SURREALDB_PASS,
	})
	if err != nil {
		return nil, err
	}

	// specify Namespace and Database
	_, err = db.Use("ns", "books")
	return db, err
}
