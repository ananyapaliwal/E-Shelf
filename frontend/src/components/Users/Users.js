import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/users/userActions';
import Loading from '../Loading/Loading';
import './Users.css'; // Import the CSS file

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const usersList = useSelector(state => state.usersList);
  const { loading, users, error } = usersList;

  return (
    <div className='users-page'>
      <div className='users-card-container'>
        <h1 className='users-title'>LIST OF USERS: {users && users.length}</h1>
        <hr className='users-hr' />
        {loading ? (
          <Loading />
        ) : (
          <>
            {users &&
              users.map(user => (
                <div className='users-card' key={user._id}>
                  <div className='card-body'>
                    <h5 className='users-card-title'>{user.name}</h5>
                    <p className='users-card-text'>{user.email}</p>
                    <div className="users-card-icon">
                    <i className="far fa-address-card h2 text-info"></i>
                  </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Users;
