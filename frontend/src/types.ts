interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    image?: string;
}

interface User {
    username: string;
    password: string;
}

interface AuthenticatedUser {
    token: string;
    user: {
        username: string;
        role: 'admin';
    };
}

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

interface BookContext {
    books: Book[];
    loginUser: (user: User) => Promise<void>;
    authenticatedUser: MaybeAuthenticatedUser;
    logout: () => void;
}

export type { Book, BookContext, User, AuthenticatedUser, MaybeAuthenticatedUser };