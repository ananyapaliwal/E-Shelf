import React, { useState } from 'react';
import { createBook } from '../../redux/actions/books/bookActions';
import { useDispatch, useSelector } from 'react-redux';
import './AddBook.css';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

const AddBook = ({ history }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Get the user id from store
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Dispatch action
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    const data = {
      category,
      title,
      author,
      createdBy: userInfo && userInfo._id,
    };
    e.preventDefault();
    dispatch(createBook(data));
    history.push('/books');
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container1'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'
          >
            CLICK TO ADD BOOK
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create Book
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body text-center'>
                  <h1>Add Book</h1>
                  <form onSubmit={formSubmitHandler}>
                    <fieldset>
                      <div className='form-group'>
                        <label htmlFor='genre1'>Genre</label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className='custom-select'
                          id='genre1'
                          style={{ backgroundColor: 'white' }}
                        >
                          <option value='Fiction'>Fiction</option>
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
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='author1'>Author</label>
                        <input
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          type='text'
                          className='form-control'
                          id='author1'
                          aria-describedby='emailHelp'
                          placeholder='Author name'
                          style={{ backgroundColor: 'white' }} 
                        />
                      </div>
                      <div className='form-group1'>
                        <label htmlFor='title1'>Title</label>
                        <input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          type='text'
                          className='form-control'
                          id='title1'
                          placeholder='Book title'
                          style={{ backgroundColor: 'white' }} 
                        />
                      </div>
                      <button type='submit' className='btn dark-grey-btn'>
                        CREATE BOOK
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn dark-btn'
                    data-dismiss='modal'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
