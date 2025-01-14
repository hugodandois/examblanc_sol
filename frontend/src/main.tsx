import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx'
import Library from './Library.tsx';
import HomePage from './HomePage.tsx';
import BookPage from './BookPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "books",
        element: <Library />
      },
      {
        path: "books/:id",
        element: <BookPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
