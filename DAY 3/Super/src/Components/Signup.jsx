import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div class='sign'>
          <h2>Sign Up</h2>
          <TextField label="Name" variant="standard" />
          <br />
          <TextField label="Password" variant="standard" type='password' /> <br /> <br />
          <Button variant="contained">Done</Button>
    </div>
  )
}

export default Signup
