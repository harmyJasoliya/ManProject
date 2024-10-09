import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { Field, Formik, Form } from 'formik';
import Switch from '@mui/material/Switch';
// icons
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Mainpage from '../../Mainpage';
import Catogary from './Category';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function QA2() {
    const [subcategory, setSubcategory] = useState([])
    const [editId, setEditId] = useState(null)
    const [searchValues, setSearchValues] = useState([])
    const [initialvalues, setInitialValues] = useState({
        questions: '',
        answer: '',
        subcatagoryID: ''
    })
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = React.useState('');
    const token = localStorage.getItem('token')
    const [open, setOpen] = React.useState(false);




    const handleData = (values, { resetForm }) => {
        console.log(values);
        if (editId !== null) {
            axios.patch(`https://interviewhub-3ro7.onrender.com/questions/${editId}`, values, {
                headers: {
                    Authorization: token
                }
            })
                .then((res) => {
                    console.log(res);
                    getData()
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {

            axios.post('https://interviewhub-3ro7.onrender.com/questions/create', values, {

                headers: {
                    Authorization: token
                }
            })
                .then((res) => {
                    console.log("sucess", res);
                    handleClose()

                })
                .catch((error) => {
                    console.log(error);
                })
        }
        resetForm()
        setEditId(null)
    }
    useEffect(() => {
        getData()
        getSubcatagories()
    }, []);





    const getData = (values) => {
        axios.get('https://interviewhub-3ro7.onrender.com/questions/', {

            headers: {
                Authorization: token
            }

        })
            .then((res) => {
                console.log("response", res);
                handleClose()
                setData(res.data.data);
                const data = res.data.data;
                localStorage.setItem("QA", data.length)
            })
            .catch((error) => {
                console.log(error);
            })

        console.log(values);
    }


    const getSubcatagories = () => {
        axios.get('https://interviewhub-3ro7.onrender.com/subcatagory/', {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                const filterData = res.data.data.filter((item) => item.status === 'on')
                setSubcategory(filterData);

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

    const deletedata = (id) => {
        console.log(id);
        axios.delete('https://interviewhub-3ro7.onrender.com/questions/' + id, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log(res);
                getData()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const editdata = (item, id) => {
        handleClickOpen(true)
        console.log(item);
        setInitialValues({
            questions: item.questions,
            answer: item.answer,
            subcatagoryID: item.subcatagoryID,

        })
        setEditId(id)


    }




    return (
        <>
            <Mainpage>
                <section>
                    <div className='questions d-flex'>


                        {/* Add QA */}
                        <React.Fragment>
                            <Typography component="div" sx={{width:'80%'}}>

                            </Typography>
                            <Typography component="div" sx={{ width:'20%'}}>
                                <Button variant="contained" sx={{  padding: '15px 0px', width:'200px' }} onClick={handleClickOpen}>
                                    ADD QA
                                </Button>
                            </Typography>
                            <Formik
                                enableReinitialize
                                initialValues={initialvalues}
                                onSubmit={handleData}
                            >
                                {
                                    ({ values, setFieldValue }) => (
                                        <BootstrapDialog
                                            onClose={handleClose}
                                            aria-labelledby="customized-dialog-title"
                                            open={open}
                                        >
                                            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                                Add QA
                                            </DialogTitle>
                                            <IconButton
                                                aria-label="close"
                                                onClick={handleClose}
                                                sx={{
                                                    position: 'absolute',
                                                    right: 8,
                                                    top: 8,
                                                    
                                                    color: (theme) => theme.palette.grey[500],
                                                }}
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                            <DialogContent dividers>
                                                <Form>

                                                    <Field as={TextField} type="text" name="questions" label="Questions" variant="outlined"></Field><br /><br />



                                                    <Field as={TextField} type="text" name="answer" label="Answer" variant="outlined"></Field><br /><br />
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Subcategory</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            name="subcatagoryID"
                                                            label="Subcatagory Name"
                                                            value={values.subcatagoryID}

                                                            onChange={(e) => setFieldValue('subcatagoryID', e.target.value)}
                                                        >
                                                            {
                                                                subcategory.map((item, index) => (
                                                                    <MenuItem value={item._id}>{item.subCatagoryname}</MenuItem>
                                                                ))
                                                            }
                                                        </Select>
                                                    </FormControl>

                                                    <DialogActions>
                                                        <Button autoFocus onClick={handleClose} type='submit'>
                                                            Submit
                                                        </Button>
                                                    </DialogActions>
                                                </Form>
                                            </DialogContent>

                                        </BootstrapDialog>
                                    )
                                }
                            </Formik>
                        </React.Fragment>

                    </div>



                    <div className='Qtable table'>
                        <table>
                            <tr>
                                <th>No</th>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>subcatagory</th>
                                <th>catagory</th>
                                <th>Delete</th>
                                <th>Edit</th>

                            </tr>
                            {data.map((item, index) => (
                                <tr key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <td component="th" scope="row" sx={{ color: '#fff' }}>{index + 1}</td>
                                    <td sx={{ color: '#fff' }}>{item.questions}</td>
                                    <td sx={{ color: '#fff' }}>{item.answer}</td>
                                    <td sx={{ color: '#fff' }}>{item.subcatagoryID?.subCatagoryname}</td>
                                    <td sx={{ color: '#fff' }}>{item.subcatagoryID?.catagoryID?.catagoryName}</td>
                                    <td sx={{ color: '#fff' }} align="right"><Button onClick={() => deletedata(item._id)}><DeleteIcon sx={{ color: 'gray' }} /></Button></td>
                                    <td sx={{ color: '#fff' }} align="right"><Button onClick={() => editdata(item, item._id)} ><CreateIcon sx={{ color: 'gray' }} /></Button></td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </section>

            </Mainpage>
        </>

    );
}


