import BookList from "./BookList";
import { BookContext } from "./types";
import { useOutletContext } from "react-router-dom";
import { Alert, Typography, Container } from "@mui/material";
import "./Library.css";

const Library = () => {
    const { books, authenticatedUser }: BookContext = useOutletContext();

    if (!authenticatedUser) {
        return (
            <Container className="library-container">
                <Typography variant="h4" component="h1" gutterBottom>
                    Library
                </Typography>
                <Alert severity="error">
                    You need to be logged in to access this page
                </Alert>
            </Container>
        )
    }
    
    return (
        <Container className="library-container">
            <Typography variant="h4" component="h1" gutterBottom>
                Library
            </Typography>
            <div className="library-content">
                <BookList books={books} />
            </div>
        </Container>
    )
}

export default Library
