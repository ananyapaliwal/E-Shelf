import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Container'>
      <div className='Content'>
        <div className='SubContent'>
          <h1 style={{ marginTop: '50px' }}>BOOK CATALOG</h1>
          <p>Discover new worlds through the</p>
          <p>pages of our book catalog.</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link>GET STARTED</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
