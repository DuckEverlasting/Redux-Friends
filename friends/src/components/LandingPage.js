import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
  return (
    <div>
      <Link to="/login">LOGIN</Link>
      <Link to="/protected">FRIENDLIST</Link>
    </div>
  )
}

export default LandingPage