import React, { useEffect } from 'react';
import './Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../redux/actions/users/userActions';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';


const Profile = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch, history]);
  
  //Check if user is login otherwise redirect
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo === null) history.push('/login');
  }, [userInfo, history]);

  //Get user Profile
  const userProfile = useSelector(state => state.userProfile);
  const { loading, user } = userProfile;

  return (
    <div className='container3'>
      <div className='row'>
        <div className='col mt-5'>
          {loading && !user ? (
            <Loading />
          ) : (
            <div className='card m-auto card-with-background' style={{ paddingTop: '20px' }}>
              <div className='card-body' style={{ width: '100%', alignItems: 'center' }}>
                <h5 className='card-title'>{user && user.email}</h5>
                <p className='card-text'>{user && user.name}</p>
                <Link to='/user-update' className='btn button'>
                  Update your profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
