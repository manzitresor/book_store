import React, { useState } from 'react';
import Book from './Book';

function Books() {
  const [books] = useState([
    {
      id: 1,
      title: 'the hunger games',
      author: 'suzanne collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'capital in the twenty-first century',
      author: 'suzanne collins',
    },
  ]);
  return (
    <>

      {
        books.map((book) => (
          <>
            <Book book={book} />
          </>
        ))
    }

    </>
  );
}

export default Books;
