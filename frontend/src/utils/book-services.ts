import { Book } from "../types";
import { getAuthenticatedUser } from "./session";

const fetchBooks = async (): Promise<Book[]> => {
    try {
        const authenticatedUser = getAuthenticatedUser();
        if (!authenticatedUser?.token) {
            throw new Error("No authorization token found");
        }

        const response = await fetch("/api/books", {
            headers: {
                'Authorization': authenticatedUser.token
            }
        });
        
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        if(!data || !Array.isArray(data)) {
            throw new Error("Invalid data received");
        }
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export { fetchBooks };