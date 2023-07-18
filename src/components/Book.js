/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <>
      <li key={book.item_id}>
        {book.title}
        <span>{book.author}</span>
        <button type="submit" onClick={() => dispatch(removeBook(book.item_id))}>Delete</button>
        <span>{book.item_id}</span>
      </li>
    </>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};
