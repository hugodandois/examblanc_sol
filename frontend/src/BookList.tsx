import { Book } from "./types";
import { Link } from "react-router-dom";
import "./BookList.css";

interface BookListProps {
    books: Book[];
}

const BookList = ({ books }: BookListProps) => {
    return (
       <ul className="book-list">
            {books.map((book) => (
                <li key={book.id} className="book-item">
                    <div className="book-content">
                        <span className="book-title">{book.title}</span>
                        <Link 
                            to={`/books/${book.id}`}
                            className="details-button"
                        >
                            Voir détails
                        </Link>
                    </div>
                </li>
            ))}
       </ul>
    )
}

export default BookList