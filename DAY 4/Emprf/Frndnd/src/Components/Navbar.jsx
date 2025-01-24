import { AppBar, ButtonGroup, Toolbar,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h2>Menu</h2>
                    <ButtonGroup color="Success" aria-label="Medium-sized button group">
                        <Link to='/'>
                            <Button>ADD</Button>
                        </Link>
                        <Link to='/v'>
                            <Button>VIEW</Button>
                        </Link>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
