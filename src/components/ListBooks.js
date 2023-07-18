/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';

function Books() {
  const initialState = useSelector((state) => state.books);
  return (
    <>

      {
        initialState.map((book) => (
          <>
            <Book book={book} />
          </>
        ))
    }

    </>
  );
}

export default Books;

// Books.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };
