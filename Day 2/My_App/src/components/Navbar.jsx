import { AppBar, Toolbar, Typography, Button } from '@mui/material';
Link
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#DC143C' }}> 
                <Toolbar>
                    <Typography variant="h6">Menu</Typography>
                    <Link to='/'>
                        <Button varient="Standard">Log In</Button>
                    </Link>
                    <Link to='/signup'>
                        <Button varient="Standard">Sign In</Button>
                    </Link>
                    <Link to='/n'>
                        <Button varient="Standard">Name</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
