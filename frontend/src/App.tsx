import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { Book, BookContext, AuthenticatedUser, MaybeAuthenticatedUser, User } from './types';
import { fetchBooks } from './utils/book-services';
import {  getAuthenticatedUser, storeAuthenticatedUser } from './utils/session';

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const [authenticatedUser, setAuthenticatedUser] =
    useState<MaybeAuthenticatedUser>(undefined);

  const initBooks = async () => {
    try {
      
      
      const data = await fetchBooks();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const authenticatedUser = getAuthenticatedUser();
    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
    }
  }, []);

  // Ajouter ce nouvel useEffect
  useEffect(() => {
    if (authenticatedUser) {
      initBooks();
    } else {
      setBooks([]); // Vider les livres quand l'utilisateur se déconnecte
    }
  }, [authenticatedUser]);

  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

  const logout = () => {
    setAuthenticatedUser(undefined);
    localStorage.removeItem("authenticatedUser"); // Supprimer les données de session
  };

  const bookContext: BookContext = {
    books,
    loginUser,
    authenticatedUser,
    logout
  }

  return (
    <div style={{ paddingBottom: '50px' }}>
      <NavBar />
      <Outlet context={bookContext} />
      <Footer />
    </div>
  )
}

export default App
