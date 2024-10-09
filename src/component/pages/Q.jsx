import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Q() {
  const navigate = useNavigate(); 

  const back = () => {
    navigate('/Section');
  };

  return (
    <>
      <div className='x'  style={{ display:'flex' , justifyContent:'space-evenly' , alignItems:'center'}}>
        <h1>Question & Answer</h1>
        <button onClick={back}>back</button> 
      </div>
    </>
  );
}

export default Q;
