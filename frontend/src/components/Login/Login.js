import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/users/userActions';
import ErrorMessage from '../DisplayMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import './Login.css';

const Login = ({ history }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();

  // Before logging in, we will check if the user is already logged in, then redirect to the home page.
  const userLoginDetails = useSelector(state => state.userLogin);
  const { loading, userInfo, error } = userLoginDetails;

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo, history]);

  // Submit form
  const submitFormHandler = e => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className='login-page1'>
      <div className='login-card1'>
        {loading && <Loading />}
        {error && <ErrorMessage error={error} />}
        <h1 className='login-title1'>Login</h1>
        <form className='login-form1' onSubmit={submitFormHandler}>
          <div className='form-group1'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              value={email}
              onChange={e => setemail(e.target.value)}
              type='email'
              className='form-control1'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group1'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              value={password}
              onChange={e => setpassword(e.target.value)}
              type='password'
              className='form-control1'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <button type='submit' className='login-button1'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
