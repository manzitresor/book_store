import React from 'react';
import { PropTypes } from 'prop-types';
import RemoveBookBtn from './RemoveBookBtn';

function Book({ book, itemId }) {
  return (
    <>
      <div className="book">
        {book.title}
        <span>{book.author}</span>
        <RemoveBookBtn itemId={itemId} />
        <span>{itemId}</span>
      </div>
    </>
  );
}

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  itemId: PropTypes.string.isRequired,
};
