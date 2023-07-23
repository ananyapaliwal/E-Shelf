import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook } from '../../redux/actions/books/bookActions';
import Loading from '../Loading/Loading';
import './Books.css'; // Import the CSS file

const Books = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const bookslist = useSelector(state => state.booksList);
  const { books, loading } = bookslist;


  const handlerDeleteBook = id => {
    dispatch(deleteBook(id));
    history.push('/books');
  };

  return (
    <div className="book-page">
      <div className="book-card">
        {loading && <Loading />}
        {books !== undefined && books.length === 0 ? (
          'No'
        ) : (
          <div className="row">
            <div className="col">
              <h1 className="book-title" style={{ color: "black" }}>BOOKS</h1>
              <table className="table table-hover book-table">
                <thead>
                  <tr>
                    <th scope="col">AUTHOR</th>
                    <th scope="col">BOOK NAME</th>
                    <th scope="col">ACTION</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {books &&
                    books.map(book => {
                      return (
                        <tr className="table" key={book._id}>
                          
                          <td style={{ color: 'black' }}>{book.author}</td>
                          <td scope="row" style={{ color: 'black' }}>{book.title}</td>
                          <td>
                            <i
                              onClick={() => handlerDeleteBook(book._id)}
                              className="fas fa-trash"
                              style={{ color: 'red', cursor: 'pointer' }}
                            ></i>
                          </td>
                          <td>
                            <Link to={`/book/${book && book._id}`}>
                              <i
                                className="far fa-edit"
                                style={{ color: 'blue', cursor: 'pointer' }}
                              ></i>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
