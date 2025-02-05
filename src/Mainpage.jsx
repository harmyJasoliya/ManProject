import * as React from 'react';
import './App.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from './component/pages/Login';
// import { Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import { Dashboard } from '@mui/icons-material';

// import { useNavigate } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
// } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";



// icon
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button } from '@mui/material';
import { waitForElementToBeRemoved } from '@testing-library/react';


const pages = [{ name: 'Dashboard', path: "/dashboard" }, { name: 'Category', path: "/category" }, { name: 'Subcategory', path: "/subcategory" }, { name: 'QA', path: "/qa" }]



const drawerWidth = 240;

function Mainpage({ children }) {




    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const navigate = useNavigate();
    const location = useLocation()
    const handleLogOut = () => {
        navigate('/');
    }
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (

        <div>
            <Toolbar className='portle' sx={{ width: '100%' }}>
                <Typography variant="h6" noWrap component="div" sx={{ width: "100%", height: "100%" }} >
                    Interview Portal
                </Typography>
            </Toolbar>
            <Divider />
            {pages.map((text, index) => (
                <div className='side' >
                <Link to={text.path}>
                    <List >
                        <ListItem key={text} disablePadding>
                            <ListItemButton >
                            <Button sx={{width:'270px' ,padding:'8px 16px' }}>
                                <ListItemIcon sx={{marginLeft:'10px' }}>
                                    {index === 0 ? <SpaceDashboardIcon /> : ''}
                                    {index === 1 ? <CategoryIcon /> : ''}
                                    {index === 2 ? <ControlPointDuplicateIcon /> : ''}
                                    {index === 3 ? <HelpOutlineIcon /> : ''}

                                </ListItemIcon>
                               
                                    <ListItemText primary={text.name} sx={{textAlign:'left', fontSize:'1px'}}/>
                            </Button>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Link>
                </div>
            ))}

        </div>

    );

    // Remove this const when copying and pasting into your project.


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" noWrap component="div" >
                            
                                 Dashboard{location.pathname}
                                
                        </Typography>
                        <Typography sx={{ marginLeft: '900px', }}><button onClick={handleLogOut} >Log out</button></Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Toolbar />


                {children}
            </Box>
        </Box>
    );
}

Mainpage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default Mainpage;
