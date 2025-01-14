import { useMatch, useOutletContext } from "react-router-dom";
import { BookContext } from "./types";
import BookCard from "./BookCard";


const BookPage = () => {
    const { books } : BookContext = useOutletContext();

    const match = useMatch("/books/:id");
    const bookId = Number(match?.params.id);
    if(isNaN(bookId)) return <p>Movie not found</p>;

    const bookFound = books.find((book) => book.id === bookId);

    if(!bookFound) return <p>Movie not found</p>;

    return (
        <BookCard book={bookFound} />
    )
}

export default BookPage