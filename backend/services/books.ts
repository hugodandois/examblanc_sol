import { Book } from "../types";
import { parse } from "../utils/json";
import path from "node:path";
const jsonDbPath = path.join(__dirname, "/../data/books.json");

const defaultBooks: Book[] = [
    {
        id: 1,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt and David Thomas",
        year: 1999,
        image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        year: 2008,
        image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    },
];

function readAllBooks(): Book[] {
    const books = parse(jsonDbPath, defaultBooks);
    return books;
}

function readBookById(id: number): Book | undefined {
    const books = parse(jsonDbPath, defaultBooks);
    return books.find((book) => book.id === id);
}

export { readAllBooks, readBookById };