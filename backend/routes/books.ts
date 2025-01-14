import { Router } from 'express';
import { readAllBooks, readBookById } from '../services/books';
import {  isAdmin, authorize } from '../utils/auths';

const router = Router();

router.get('/', authorize, isAdmin, (_req, res) => {
  const books = readAllBooks();
  return res.json(books);
});

router.get('/:id',authorize, isAdmin, (req, res) => {
  const id = Number(req.params.id);
  const book = readBookById(id);
  if (!book) {
    return res.sendStatus(404);
  }
  return res.json(book);
});

export default router;