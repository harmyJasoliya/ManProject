// import logo from './logo.svg';
// import './App.css';

// import { Box } from '@mui/material';
// //pages...............................................................................................
// import Mainpage2 from './Mainpage2';
// import QA2 from './component2/pages2/QA2';
// import Dashboard2 from './component2/pages2/Dashboard2';
// import Category2 from './component2/pages2/Category2';
// import Subcategory2 from './component2/pages2/Subcategory2'
// import Login2 from './component2/pages2/Login2';
// import { BrowserRouter, Route , Routes } from "react-router-dom"

// function App() {
//   return (
//     <>


//         <Box>

//           <Routes>
//             <Route path='/' element={<Login2/>} />
//             <Route path="/dashboard2" element={<Dashboard2 />} />
//             <Route path="/category2" element={<Category2 />} />
//             <Route path="/subcategory2" element={<Subcategory2 />}/>
//             <Route path="/qa2" element={ <QA2 />}/>
//           </Routes>



//          </Box>



//       </>
//   );
// }

// export default App


















import logo from './logo.svg';
import './App.css';

import { Box } from '@mui/material';
//pages...............................................................................................
import Mainpage from './Mainpage';

import Dashboard from './component/pages/Dashboard';
import Category from './component/pages/Category';
import Subcategory from './component/pages/Subcategory';
import QA from './component/pages/QA';
import C from './component/pages/C';
import S from './component/pages/S';
import Q from './component/pages/Q';
import Login from './component/pages/Login';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import FrontPage from './component/pages/frontpage/FrontPage';
import Section from './component/pages/frontpage/Section';

function App() {

  return (
    <>


        <Box>

          <Routes>
            <Route path='/' element={<FrontPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/subcategory" element={<Subcategory />}/>
            <Route path="/qa" element={ <QA />}/>
            <Route path="/Section" element={<Section/>} />
            <Route path="/C" element={<C />} />
            <Route path="/S" element={<S />}/>
            <Route path="/Q" element={ <Q />}/>
          </Routes>



         </Box>

       

      </>
  );
}

export default App



















// import React from 'react'
// import './App.css'
// import { BrowserRouter, Route , Routes } from "react-router-dom";
// import Dashboard111 from './practice/Ppage/Dashboard111';
// import Category111 from './practice/Ppage/Catagory111';
// import Subcategory111 from './practice/Ppage/Subcategory111';
// import QA111 from './practice/Ppage/QA111';
// import Loginp from './practice/Ppage/Loginp'
// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Loginp />} />
//       <Route path="/dashboard111" element={<Dashboard111 />} />
//       <Route path="/category111" element={<Category111 />} />
//       <Route path="/subcategory111" element={<Subcategory111 />} />
//       <Route path="/qa111" element={ <QA111 />}/>
//     </Routes>
//   );
// }

// export default App