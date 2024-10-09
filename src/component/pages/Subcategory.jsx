// import React, { useState, useEffect } from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import Autocomplete from '@mui/material/Autocomplete';
// import { Field, Form, Formik } from 'formik';
// import axios from 'axios';

// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';

// import DeleteIcon from '@mui/icons-material/Delete';
// import CreateIcon from '@mui/icons-material/Create';
// import Mainpage from '../../Mainpage';
// import { Update } from '@mui/icons-material';

// const options = ['Option 1', 'Option 2'];

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//         padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//         padding: theme.spacing(1),
//     },
// }));


// const Subcategory = () => {



//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };

//     const [catagory, setcatagory] = useState([])
//     const [editId, setEditId] = useState(null)
//     const [data, setData] = useState([])
//     const [searchValue, setSearchValue] = useState("")
//     const [inputValue, setInputValue] = React.useState('');
//     const [initialvalues, setInitialValues] = useState({
//         subCatagoryname: '',
//         catagoryID: ''
//     })


//     const token = localStorage.getItem('token')
//     const handleData = (values, { resetForm }) => {
//         console.log(values.gt);
//         if (editId !== null) {
//             axios.patch(`https://interviewhub-3ro7.onrender.com/subcatagory/${editId}`, values, {
//                 headers: {
//                     Authorization: token
//                 }
//             })
//                 .then((res) => {
//                     console.log(res);
//                     getData()
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         }
//         else {
//             axios.post('https://interviewhub-3ro7.onrender.com/subcatagory/create', values, {
//                 headers: {
//                     Authorization: token
//                 }
//             })
//                 .then((res) => {
//                     console.log("sucess", res);
//                     handleClose()
//                     // setData(res.data.data)            
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         }
//         resetForm()
//         setEditId(null)
//     }
//     //  catagory  get api
//     useEffect(() => {
//         getCatagories()
//         getData()
//     }, [])

//     function getCatagories() {
//         axios.get('https://interviewhub-3ro7.onrender.com/catagory/', {
//             headers: {
//                 Authorization: token
//             }
//         })
//             .then((res) => {
//                 console.log(res.data);
//                 setcatagory(res.data.data)

//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }
//     // Subcategory get api
//     function getData() {
//         axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/', {
//             headers: {
//                 Authorization: token
//             }
//         })
//             .then((res) => {
//                 console.log(res.data);
//                 setData(res.data.data);
//                 const data = res.data.data
//                 localStorage.setItem("Subcate", data.length)

//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }
//     // delete api coliing
//     const deletedata = (id) => {
//         console.log(id);
//         axios.delete('https://interviewhub-3ro7.onrender.com/subcatagory/' + id, {
//             headers: {
//                 Authorization: token
//             }
//         })
//             .then((res) => {
//                 console.log(res);
//                 getData()
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }
//     // updata api
//     const editdata = (item, id) => {
//         handleClickOpen(true)
//         console.log(item);
//         setInitialValues({
//             subCatagoryname: item.subCatagoryname,
//             catagoryID: item.catagoryID._id
//         })
//         setEditId(id)


//     }


//     // search
//     const searchSubcategory = (values) => {
//         console.log("search==>", values)
//         axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/?search=' + values, {
//             headers: {
//                 Authorization: token,
//             },
//         })
//             .then((res) => {
//                 setData(res.data.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };



//     const Search = (e) => {
//         console.log(e)
//         const value = e.target.value;
//         console.log('search===>', value);
//         setSearchValue(value);
//         searchSubcategory(value);

//     }






//     const Updatestatus = (id, e, item) => {
//         if (item.catagoryID.status === "on") {
//             axios.patch('https://interviewhub-3ro7.onrender.com/subcatagory/'+id, {
//                 'status': e.target.checked ? 'on' : 'off'
//             }, {
//                 headers: {
//                     Authorization: token,
//                 },
//             })
//                 .then((res) => {
//                     const fltrData = res.data.data.filter((el) => el.status=== item.catagoryID.status ? 'on' : 'off')
//                     console.log('filter==>',fltrData)
//                     getData()
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         }

//     }









//     return (

//         <Mainpage>
//             <Box>
//                 <section>
//                     <div className='catogary d-flex'>





//                         <React.Fragment>
//                             <Box sx={{ width: { xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%' } }}>
//                                 <TextField label="Search Subcategory" sx={{ width: '100%' }} value={searchValue} onChange={Search} />
//                             </Box>
//                             <Button variant="contained" sx={{ marginLeft: '10px', padding: '5px 10px' }} onClick={handleClickOpen}>
//                                 ADD SUBCATAGORY
//                             </Button>
//                             <Formik
//                                 enableReinitialize
//                                 initialValues={initialvalues}
//                                 onSubmit={handleData}
//                             >
//                                 {
//                                     ({ values, setFieldValue }) => (
//                                         <BootstrapDialog
//                                             onClose={handleClose}
//                                             aria-labelledby="customized-dialog-title"
//                                             open={open}
//                                         >
//                                             <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//                                                 Add Sub Category
//                                             </DialogTitle>
//                                             <IconButton
//                                                 aria-label="close"
//                                                 onClick={handleClose}
//                                                 sx={{
//                                                     position: 'absolute',
//                                                     right: 6,
//                                                     top: 6,

//                                                 }}
//                                             >
//                                                 <CloseIcon />
//                                             </IconButton>
//                                             <DialogContent dividers>
//                                                 <Form>
//                                                     <Field as={TextField} type="text" name="subCatagoryname" label="sub Catagory" variant="outlined"></Field><br /><br />
//                                                     <FormControl fullWidth>
//                                                         <InputLabel id="demo-simple-select-label">Category</InputLabel>
//                                                         <Select
//                                                             labelId="demo-simple-select-label"
//                                                             id="demo-simple-select"
//                                                             name="catagoryID"
//                                                             label="Catagory"
//                                                             value={values.catagoryID}

//                                                             onChange={(e) => setFieldValue('catagoryID', e.target.value)}
//                                                         >
//                                                             {
//                                                                 catagory.map((item) => (
//                                                                     <MenuItem value={item._id}>{item.catagoryName}</MenuItem>
//                                                                 ))
//                                                             }
//                                                         </Select>
//                                                     </FormControl>

//                                                     <DialogActions>
//                                                         <Button autoFocus onClick={handleClose} type='submit'>
//                                                             Submit
//                                                         </Button>
//                                                     </DialogActions>
//                                                 </Form>
//                                             </DialogContent>

//                                         </BootstrapDialog>
//                                     )
//                                 }
//                             </Formik>
//                         </React.Fragment>

//                     </div>
//                     <Box>
//                         <div className='table Stable'>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>No</th>
//                                         <th>Sub-Category Name</th>
//                                         <th>Category Name</th>
//                                         <th align="right" >Status</th>
//                                         <th align="right">Delete</th>
//                                         <th align="right">Update</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         data.map((item , index) => (
//                                             <tr key={item._id}
//                                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                             >
//                                                 <td component="th" scope="row" sx={{ color: '#fff' }}>{index + 1}</td>
//                                                 <td sx={{ color: '#fff' }}>{item.subCatagoryname}</td>
//                                                 <td sx={{ color: '#fff' }}>{item.catagoryID}</td>
//                                                 <td sx={{ color: '#fff' }} align="right">
//                                                     <FormControlLabel control={<Switch defaultChecked />} onChange={Updatestatus} />
//                                                 </td>
//                                                 <td sx={{ color: '#fff' }} align="right"><Button onClick={() => deletedata(item._id)}><DeleteIcon sx={{ color: 'gray' }} /></Button></td>
//                                                 <td sx={{ color: '#fff' }} align="right"><Button onClick={() => editdata(item, item._id)} ><CreateIcon sx={{ color: 'gray' }} /></Button></td>
//                                             </tr>
//                                         ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </Box>
//                 </section>
//             </Box>
//         </Mainpage>
//     )
// }

// export default Subcategory

















import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Mainpage from '../../Mainpage';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Subcategory = () => {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [editId, setEditId] = useState(null);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [initialValues, setInitialValues] = useState({
        subCatagoryname: '',
        catagoryID: ''
    });

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([getCategories(), getData()]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const getCategories = async () => {
        try {
            const res = await axios.get('https://interviewhub-3ro7.onrender.com/catagory/', {
                headers: { Authorization: token }
            });
            setCategories(res.data.data.filter(item => item.status === 'on'));
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const getData = async () => {
        try {
            const res = await axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/', {
                headers: { Authorization: token }
            });
            setData(res.data.data);
            localStorage.setItem("Subcate", res.data.data.length);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const handleData = async (values, { resetForm }) => {
        try {
            if (editId !== null) {
                await axios.patch(`https://interviewhub-3ro7.onrender.com/subcatagory/${editId}`, values, {
                    headers: { Authorization: token }
                });
            } else {
                await axios.post('https://interviewhub-3ro7.onrender.com/subcatagory/create', values, {
                    headers: { Authorization: token }
                });
            }
            await getData();
            handleClose();
        } catch (error) {
            console.error("Error handling data:", error);
        }
        resetForm();
        setEditId(null);
    };

    const deleteData = async (id) => {
        try {
            await axios.delete(`https://interviewhub-3ro7.onrender.com/subcatagory/${id}`, {
                headers: { Authorization: token }
            });
            await getData();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    const editData = (item, id) => {
        handleClickOpen();
        setInitialValues({
            subCatagoryname: item.subCatagoryname,
            catagoryID: item.catagoryID._id
        });
        setEditId(id);
    };

    const searchSubcategory = async (values) => {
        console.log("search==>", values)
        axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/?search=' + values, {
            headers: {
                Authorization: token,
            },
        })
            .then((res) => {
                console.log("search Subcatagory then res", res)
                setData(res.data.data.filter((item)=>item.catagoryID && item.catagoryID.status==='on'));
            })
            .catch((err) => {
                console.log("error searching subcatagory", err);
            });

    };

    const handleSearch = (e) => {
        console.log(e)
        const value = e.target.value;
        console.log('search===>', value);
        setSearchValue(value);
        searchSubcategory(value);
    };

    // const handleChange = async (e, item) => {
    //     if (item.catagoryID.status === "on") {
    //         try {
    //             await axios.patch(`https://interviewhub-3ro7.onrender.com/subcatagory/${item._id}`, {
    //                 'status': e.target.checked ? 'on' : 'off'
    //             }, {
    //                 headers: { Authorization: token },
    //             });
    //             await getData();
    //         } catch (error) {
    //             console.error("Error updating status:", error);
    //         }
    //     }
    // };



    const handleChange = (id, e, item) => {
        // if (item.catagoryID.status === "on") {
            console.log("e.target.checked----sub",e.target.checked);
            console.log("item",item)
            axios.patch('https://interviewhub-3ro7.onrender.com/subcatagory/' + data._id, {
                'status': e.target.checked ? 'on' : 'off'
            }, {
                headers: {
                    Authorization: token,
                },
            })
                .then((res) => {
                    
                    console.log('subcatagory res',res)
                    getData()
                })
                .catch((err) => {
                    console.log(err)
                })

        // }
    }

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Mainpage>
            <Box>
                <section>
                    <div className='category d-flex'>
                        <Box sx={{ width: { xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%' } }}>
                            <TextField
                                label="Search Subcategory"
                                sx={{ width: '100%' }}
                                value={searchValue}
                                onChange={handleSearch}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{ marginLeft: '10px', padding: '5px 10px', width: '200px' }}
                            onClick={handleClickOpen}
                        >
                            ADD SUBCATEGORY
                        </Button>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            onSubmit={handleData}
                        >
                            {({ values, setFieldValue, submitForm }) => (
                                <BootstrapDialog
                                    onClose={handleClose}
                                    aria-labelledby="customized-dialog-title"
                                    open={open}
                                >
                                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                        Add Sub Category
                                    </DialogTitle>
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleClose}
                                        sx={{ position: 'absolute', right: 6, top: 6 }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <DialogContent dividers>
                                        <Form>
                                            <Field
                                                as={TextField}
                                                type="text"
                                                name="subCatagoryname"
                                                label="Sub Category"
                                                variant="outlined"
                                                fullWidth
                                            /><br /><br />
                                            <FormControl fullWidth>
                                                <InputLabel id="category-select-label">Category</InputLabel>
                                                <Select
                                                    labelId="category-select-label"
                                                    id="category-select"
                                                    name="catagoryID"
                                                    label="Category"
                                                    value={values.catagoryID}
                                                    onChange={(e) => setFieldValue('catagoryID', e.target.value)}
                                                >
                                                    {categories.map(item => (
                                                        <MenuItem key={item._id} value={item._id}>
                                                            {item.catagoryName}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <DialogActions>
                                                <Button
                                                    autoFocus
                                                    onClick={handleClose}
                                                    type='submit'
                                                >
                                                    Submit
                                                </Button>
                                            </DialogActions>
                                        </Form>
                                    </DialogContent>
                                </BootstrapDialog>
                            )}
                        </Formik>
                    </div>
                    <Box>
                        <div className='table Stable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Sub-Category Name</th>
                                        <th>Category Name</th>
                                        <th align="right">Status</th>
                                        <th align="right">Delete</th>
                                        <th align="right">Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.subCatagoryname}</td>
                                            <td>{item.catagoryID?.catagoryName}</td>
                                            <td align="right">
                                                <FormControlLabel
                                                    control={
                                                        <Switch checked={item.status === 'on'} onChange={(e) => handleChange(e, item)} />
                                                    }
                                                />
                                            </td>
                                            <td align="right">
                                                <Button onClick={() => deleteData(item._id)}>
                                                    <DeleteIcon sx={{ color: 'gray' }} />
                                                </Button>
                                            </td>
                                            <td align="right">
                                                <Button onClick={() => editData(item, item._id)}>
                                                    <CreateIcon sx={{ color: 'gray' }} />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Box>
                </section>
            </Box>
        </Mainpage>
    );
};

export default Subcategory;
