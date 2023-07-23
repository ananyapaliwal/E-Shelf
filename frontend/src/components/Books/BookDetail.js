import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, updateBook } from '../../redux/actions/books/bookActions';
import './BookDetail.css';

const BookDetail = ({ history }) => {
  const { id } = useParams();

  //Get the book details and fill it in the form
  const bookDetails = useSelector(state => state.bookDetails);
  const { book, loading } = bookDetails;

  const [category, setCategory] = useState(book && !loading && book.category);
  const [title, setTitle] = useState(book && !loading && book.title);
  const [author, setAuthor] = useState(book && book.author);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
      category,
      title,
      author,
    };
    e.preventDefault();
    dispatch(updateBook(id, data));
    history.push('/books');
  };

  return (
    <div className='book-detail-container'>
      <div className='book-detail-content'>
        {book ? (
          <>
            <h1 className='book-detail-heading'>UPDATE</h1>
            <form onSubmit={formSubmitHandler}>
              <fieldset>
                <div className='book-detail-form-group'>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className='book-detail-input'
                    style={{ backgroundColor: 'white' }}
                  >
                    <option defaultValue='Fiction'>Fiction</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Non-fiction'>Non-fiction</option>
                    <option value='Mystery/Thriller'>Mystery/Thriller</option>
                    <option value='Horror'>Horror</option>
                    <option value='Romance'>Romance</option>
                    <option value='Young Adult'>Young Adult</option>
                    <option value='Science Fiction'>Science Fiction</option>
                    <option value='Historical Fiction'>Historical Fiction</option>
                    <option value='Biography/Autobiography'>Biography/Autobiography</option>
                    <option value='Educational'>Educational</option>
                    {/* options */}
                  </select>
                </div>
                <div className='book-detail-form-group'>
                  <label htmlFor='exampleInputEmail1'>Author</label>
                  <input
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    type='text'
                    className='book-detail-input'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Author name'
                  />
                </div>
                <div className='book-detail-form-group'>
                  <label htmlFor='exampleInputPassword1'>Title</label>
                  <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    className='book-detail-input'
                    id='exampleInputPassword1'
                    placeholder='Book title'
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <button type='submit' className='book-detail-button'>
                    UPDATE BOOK
                  </button>
                </div>
              </fieldset>
            </form>
          </>
        ) : (
          'No'
        )}
      </div>
    </div>
  );
};

export default BookDetail;
