import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class='menu'>
          <AppBar>
              <Toolbar>
                  <h2>Menu</h2>
                  <Link to='/'>
                      <Button variant='text' color="white">Login</Button>
                  </Link>
                  <Link to='/s'>
                      <Button variant='text' color="white">Signup</Button>
                  </Link>
                  <Link to='/c'>
                      <Button variant='text' color="white">Counter</Button>
                  </Link>
                  <Link to='/w'>
                      <Button variant='text' color="white">Welcome</Button>
                  </Link>
                  <Link to='/site'>
                      <Button variant='text' color="white">Site</Button>
                  </Link>
              </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
