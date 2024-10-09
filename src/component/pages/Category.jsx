import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Switch from '@mui/material/Switch';
import Mainpage from '../../Mainpage';
import { Box, Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import Dashboard from './Dashboard';
// icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import { useLocation } from 'react-router-dom';



const OPT = ['opt1', 'opt2']


function Category() {


  const [value, setValue] = React.useState(OPT[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([])
  const [editId, setEditId] = useState(null)
  const [searchValue, setSearchValue] = useState([])
  const [initialvalues, setInitialvalues] = useState({
    catagoryName: ''
  })







  useEffect(() => {
    getData()
  }, []);
  const token = localStorage.getItem('token')
  // console.log("token ==> "+token);

  const handleData = (values, { resetForm }) => {

    console.log("==>", values);

    if (editId === null) {
      axios.post('https://interviewhub-3ro7.onrender.com/catagory/create', values, {

        headers: {
          Authorization: token
        }

      })
        .then((res) => {
          console.log("postresponse", res);
          handleClose()
          getData();
        })
        .catch((error) => {
          console.log(error);
        })
      console.log(values);
      resetForm()
    }
    else {
      axios.patch(`https://interviewhub-3ro7.onrender.com/catagory/${editId}`, values, {

        headers: {
          Authorization: token
        }

      })
        .then((res) => {
          console.log("patchresponse", res);
          handleClose()
          getData();
        })
        .catch((error) => {
          console.log("error",error);
        })
    }
  }





  const getData = () => {
    axios.get('https://interviewhub-3ro7.onrender.com/catagory/', {

      headers: {
        Authorization: token
      }

    })
      .then((res) => {

        handleClose()
        setData(res.data.data);
        const data = res.data.data
        console.log("category data =", data.length)
        localStorage.setItem("Cate", data.length)

      })
      .catch((error) => {
        console.log(error);
      })


  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Delete = (index) => {

    axios.delete('https://interviewhub-3ro7.onrender.com/catagory/' + index, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log("delete responce", res);
        getData()

      })
      .catch((error) => {
        console.log(error)
      })
  };


// edit  //

  const Edit = (item, id) => {
    handleClickOpen(true)
    setInitialvalues({
      catagoryName: item.catagoryName
    })
    setEditId(id)
  }

// search // 
  const searchCategory = (values) => {
    console.log("search==>", values)
    axios.get('https://interviewhub-3ro7.onrender.com/catagory/?search=' + values, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setData(res.data);
        console.log("99999999999999999999999999999999999999999",data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
 

  const Search = (e) => {
    console.log(e)
    const value = e.target.value;
    console.log('search===>', value);
    setSearchValue(value);
    searchCategory(value);

  }



  

  const subStatus = (fltrdata) => {
    for(let i=0; i<fltrdata.length; i++){
      const id = fltrdata[i]._id
      axios.patch('https://interviewhub-3ro7.onrender.com/subcatagory/'+ id ,{
       'status': fltrdata[i].status === 'on' ? 'off' : 'on'

      },{
        headers:{
          Authorization:token,
        },
      })
      .then((res) => {
        console.log("success")
      })
      .catch((err) =>{
        console.error("err==>",err)
      })
    }
  }



  const Subcata = (id) => {
    console.log("$$$$$$$$$$$" , id)
    axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/',{
      headers:{
        Authorization:token,
      },
    })
    .then((res) => {
      
      const fltrdata = res.data.data.filter((items) => items.catagoryID._id === id)
      subStatus(fltrdata)
    })
    .catch((err) => {
      console.log(err);
    });
  }



const handleChange = (id,e,data) => {
console.log("dataaaaaaaaaaaaaaaa",id,e,data);

 console.log("e.target.checked",e.target.checked)
 console.log("el._id",id)

  axios.patch('https://interviewhub-3ro7.onrender.com/catagory/' + data._id, {
      'status': e.target.checked ? 'on' : 'off'
  },
      {
          headers: {
              Authorization: token,
          },
      })

      .then((res) => {
          getData()
          Subcata(data._id)

      })

      .catch((err) => {
          console.error("status errrror in catagory page",err);
      });

}



  return (
    <>
      <Mainpage>
        <section>

          <Box sx={{ display: 'flex' }}>

            <React.Fragment>
              <Box sx={{ width: { xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%' } }}>
                <TextField label="Search Category" sx={{ width: '100%' }} onChange={Search} value={searchValue} />
              </Box>
              <Button variant="contained" sx={{ marginLeft: '10px', padding: '5px 10px' , width:'200px' }} onClick={handleClickOpen}>
                ADD CATAGORY
              </Button>
              <Formik
                enableReinitialize
                initialValues={initialvalues}
                onSubmit={handleData}
              >
                <Dialog
                  open={open}
                  onClose={handleClose}

                >

                  <DialogTitle>Add Catogary</DialogTitle>
                  <Form>
                    <DialogContent>

                      <Field
                        as={TextField}

                        name="catagoryName"
                        label="CatagoryName"
                        type="text"
                        fullWidth
                        variant="outlined"
                      />

                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>

                      </DialogActions>
                    </DialogContent>
                  </Form>
                </Dialog>
              </Formik>
            </React.Fragment>
          </Box>
          <div className='table ctable'>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Catagory Name</th>
                  <th>Status</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (

                  <tr key={index} sx={{ backgroundColor: (index % 2 === 0) ? 'gray' : 'white' }} >
                    <td>{index + 1}</td>
                    <td>{data.catagoryName}</td>
                    
                    <td sx={{ color: '#fff' }} align="right">
                   
                    <Switch checked={data.status === 'on'} onChange={(e) => handleChange(data._id, e, data)} />

                    </td>
                    <td><Button onClick={() => Delete(data._id)}><DeleteIcon sx={{ color: 'gray' }} /></Button></td>

                    <td><Button onClick={() => Edit(data, data._id)} > <EditSharpIcon sx={{ color: 'gray' }} /></Button> </td>
                  </tr>

                ))}


              </tbody>
            </table>

          </div>
        </section>
      </Mainpage >
    </>
  )
}

export default Category















































































// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Switch from '@mui/material/Switch';
// import {
//     TextField,
//     Table,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     Box,
// } from '@mui/material';
// import * as Yup from 'yup';

// const catagorySchema = Yup.object().shape({
//     catagoryName: Yup.string()
//         .required("Required!"),
// })


// function Category() {
//     const token = localStorage.getItem('token');
//     const history = useHistory();

//     useEffect(() => {
//         if (!token) {
//             history.push('/admin/login');
//         }

//     }, [history, token]);

//     const [openDialog, setOpenDialog] = useState(false);
//     const [categories, setCategories] = useState([]);
//     const [edit, setEdit] = useState(null);
//     const [initialValues, setInitialValues] = useState({
//         catagoryName: '',
//     });
//     const [searchValues, setSearchValues] = useState('');
//     const [subcategories, setSubcategories] = useState([]);

//     const [stutasapi, setStutasapi] = useState([])


//     useEffect(() => {
//         allDataApi();
//     }, []);


//     const allDataApi = () => {
//         console.log("GET=======>>>>>")
//         axios.get('http://localhost:5500/catagory/', {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {
//                 console.log(res)
//                 setCategories(res.data.data);

//                 const categories = res.data.data
//                 console.log("categories=====> ==> ", categories.length);

//                 localStorage.setItem("category", categories.length);

//             })

//             .catch((err) => {
//                 console.error(err);
//             });
//     };

//     const Delete = (id) => {

//         console.log("Delete=====>>>>>")

//         axios.delete("http://localhost:5500/catagory/" + id, {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {
//                 console.log(res)
//                 allDataApi();
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };

//     const updateData = (id, values) => {

//         console.log("Update=====>>>")

//         axios.patch("http://localhost:5500/catagory/" + id, values, {

//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {


//                 allDataApi(res);
//                 setEdit(null);
//                 setOpenDialog(false);
//                 handleChange(true)
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     };

//     const Submit = (values, { resetForm }) => {
//         if (edit !== null) {
//             console.log("Edit=====>>>")
//             console.log(values)

//             updateData(edit, values);

//             setInitialValues({
//                 catagoryName: ''
//             })


//         } else {
//             console.log("Else Add=====>>>")
//             axios.post('http://localhost:5500/catagory/create', values, {
//                 headers: {
//                     Authorization: token,
//                 },
//             })
//                 .then((res) => {
//                     console.log(res)
//                     allDataApi();
//                     setOpenDialog(false);
//                 })
//                 .catch((err) => {
//                     console.error(err);
//                 });
//         }
//         resetForm();
//     };


//     const searchCat = (values) => {
//         console.log("search===>", values)
//         axios.get("http://localhost:5500/catagory/?search=" + values, {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {
//                 console.log(res)
//                 setCategories(res.data.data);
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     };

//     const Search = (e) => {
//         console.log(e)
//         const value = e.target.value;
//         console.log("search==>", value)
//         setSearchValues(value);
//         searchCat(value);
//     };


//     const handleOpenDialog = () => {
//         setInitialValues({
//             catagoryName: '',
//         });
//         setEdit(null);
//         setOpenDialog(true);
//     };


//     const Edit = (category) => {
//         setInitialValues(category);
//         setEdit(category._id);
//         setOpenDialog(true);
//     };


//     const subCatStatus = (filterData) => {

//         for (let i = 0; i < filterData.length; i++) {
//             const id = filterData[i]._id

//             axios.patch('http://localhost:5500/subcatagory/' + id, {
//                 'status': filterData[i].status === 'on' ? 'off' : 'on'
//             }, {

//                 headers: {
//                     Authorization: token,
//                 },
//             })
//                 .then((res) => {
//                     console.log("success")


//                 })
//                 .catch((err) => {
//                     console.error("err===>", err)
//                 })
//         }
//     }


//     const getSubFilter = (item) => {

//         axios.get('http://localhost:5500/subcatagory/', {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {

//                 const filterData = res.data.data.filter((items) => items.catagoryID._id === item._id)
//                 subCatStatus(filterData)

//             })
//             .catch((err) => {
//                 console.error(err);
//             });

//     }


//     const handleChange = (id, e, item) => {

//         axios.patch("http://localhost:5500/catagory/" + id, {
//             'status': e.target.checked ? 'on' : 'off'
//         },
//             {
//                 headers: {
//                     Authorization: token,
//                 },
//             })

//             .then((res) => {
//                 allDataApi();
//                 getSubFilter(item)

//             })

//             .catch((err) => {
//                 console.error(err);
//             });

//     }


//     return (
//         <>
//             <Box sx={{ marginLeft: '240px', padding: '20px' }}>

//                 <TextField
//                     label="Search Category"
//                     sx={{ mb: 2, boxShadow: 1, width: "80%" }}
//                     value={searchValues}
//                     onChange={Search}
//                 />

//                 <Button variant="contained" onClick={handleOpenDialog} sx={{ padding: "16px 40px", marginLeft: "30px" }} >
//                     Add Category
//                 </Button>

//                 <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>

//                     <Formik
//                         initialValues={initialValues}
//                         validationSchema={catagorySchema}
//                         enableReinitialize={true}
//                         onSubmit={Submit}>

//                         {
//                             ({ submitForm }) => (
//                                 <Form>
//                                     <DialogTitle>
//                                         {
//                                             edit !== null ? 'Update Category' : 'Add Category'
//                                         }
//                                     </DialogTitle>

//                                     <DialogContent>
//                                         <DialogContentText>
//                                             <Field as={TextField} label="Category Name" name="catagoryName" fullWidth />
//                                             <ErrorMessage name="catagoryName" component="h5" style={{ color: 'red' }}/>
//                                         </DialogContentText>
//                                     </DialogContent>

//                                     <DialogActions>

//                                         <Button onClick={() => setOpenDialog(false)} sx={{ color: 'gray' }}>
//                                             Cancel
//                                         </Button>

//                                         <Button variant="contained" onClick={submitForm} onClose={() => setOpenDialog(false)}>
//                                             {edit !== null ? 'Update' : 'Add'}
//                                         </Button>

//                                     </DialogActions>
//                                 </Form>
//                             )
//                         }
//                     </Formik>
//                 </Dialog>

                
//                     <table size="small">
//                         <th>
//                             <tr>
//                                 <td align="left" width="20px">No.</td>
//                                 <td align="left" width="35%">Category</td>
//                                 <td align="right">Status</td>
//                                 <td align="right">Delete</td>
//                                 <td align="right">Update</td>
//                             </tr>
//                         </th>
//                         <tbody>

//                             {
//                                 categories.map((category, i) => (
//                                     <tr key={category._id}>
//                                         <td align="left">{i + 1}</td>
//                                         <td align="left">{category.catagoryName}</td>
//                                         <td align="right"><Switch checked={category.status === 'on'} onChange={(e) => handleChange(category._id, e, category)} /></td>
//                                         <td align="right">
//                                             <Button
//                                                 onClick={() => Delete(category._id)}
//                                                 style={{ border: '0', background: 'none', color: 'gray' }}
//                                             >
//                                                 <DeleteIcon />
//                                             </Button>
//                                         </td>
//                                         <td align="right">
//                                             <Button
//                                                 onClick={() => Edit(category)}
//                                                 style={{ border: '0', background: 'none', color: 'gray' }}
//                                             >
//                                                 <EditIcon />
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             }

//                         </tbody>
//                     </table>
                
//             </Box>


//         </>
//     );
// }

// export default Category;