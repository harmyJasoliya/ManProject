import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function C() {
  const navigate = useNavigate(); 

  const back = () => {
    navigate('/Section');
  };

  return (
    <>
      <h1>Category</h1>
      <button onClick={back}>back</button> 
    </>
  );
}

export default C;
