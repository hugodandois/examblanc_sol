import { Book } from './types';

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <div className="card">
            
            <div>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.year}</p>
            </div>
            <img src={book.image} alt={book.title} />
        </div>
    )
}

export default BookCard