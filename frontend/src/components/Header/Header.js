import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/users/userActions';
import { FaBook, FaBars } from 'react-icons/fa';
import './Header.css'; 

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // logout handler
  const logoutHandler = () => {
    dispatch(logoutUser());
    history.push('/');
  };

  return (
    <header>
      <nav className='navbar navbar-expand-lg'>
        <Link className='navbar-brand' to='/'>
          <FaBook /> E-Shelf
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FaBars />
        </button>

        <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                HOME <span className='sr-only'>(current)</span>
              </Link>
            </li>

            {userInfo ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    BOOKS
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addbook'>
                    ADD BOOKS
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to='/users'>
                    USERS
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/login'
                    onClick={() => dispatch(logoutUser())}
                  >
                    LOGOUT
                  </Link>
                </li>
                {/* Show "Profile" option */}
                <li className='nav-item'>
                  <Link className='nav-link' to='/profile'>
                    PROFILE
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    LOGIN
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    REGISTER
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
