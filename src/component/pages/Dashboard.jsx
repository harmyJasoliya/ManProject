import React, { useState } from 'react'
import Mainpage from '../../Mainpage'
import { Box } from '@mui/material';
import Category from './Category';

import Subcategory from './Subcategory';
import QA from './QA';
function Dashboard() {


  const [catagory, setcatagory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  const [qa, setQA] = useState([])
  const Cate = localStorage.getItem('Cate');
  const Subcate = localStorage.getItem('Subcate');
  const QA = localStorage.getItem('QA')

  return (
    <>

      <Mainpage>
        <section>
          <div className="Dashboard ">
            <div className="d-flex" >
              <div className='w-33' ><Box sx={{ borderRadius:'5px',boxShadow:'0px 0px 5px #7e7d7d', padding: '20px',margin:'4px' }}><h2>Total Category</h2><h1>{Cate}</h1></Box></div>
              <div className='w-33'><Box sx={{ borderRadius:'5px',boxShadow:'0px 0px 5px #7e7d7d', padding: '20px',margin:'4px' }}> <h2>Total SubCategory</h2><h1>{Subcate}</h1> </Box></div>
              <div className='w-33'><Box sx={{ borderRadius:'5px',boxShadow:'0px 0px 5px #7e7d7d', padding: '20px',margin:'4px' }}> <h2>Total Q / A</h2><h1>{QA}</h1></Box></div>
            </div>


          </div>
        </section>
      </Mainpage>
    </>
  )
}

export default Dashboard;