import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    const handleData = async (values) => {
        console.log("values", values);
        try {
            var res = await axios.post("https://interviewhub-3ro7.onrender.com/admin/login", values)
            var token = res.data.token
            localStorage.setItem("token", token)
            navigate('/dashboard'); 
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (

        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleData}
            >
                <Form>
                    <Box
                         sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '200px'
                        }}  
                    >
                        <Box
                             className="loginBox"
                             sx={{
                                border: 2,
                                borderWidth: '2px',
                                borderColor: '#1976d2',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px',
                                borderRadius: '30px',
                                boxShadow: '2px 2px 5px 2px   #1976d290',
                             }}>
                        
                            <Box>
                                <h1>Admin Panel</h1>
                            </Box>

                            <Box>
                                <Field
                                    as={TextField}
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />

                                <Field
                                    as={TextField}
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            </Box>

                            <Box>
                                <Button type="submit" variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Form>
            </Formik>


        </>

    )
}

export default Login