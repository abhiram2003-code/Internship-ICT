import { Button, TextField } from '@mui/material'
import React from 'react'


const Login = () => {
  return (
      <div class='login'>
          <h2>Login</h2>
          <TextField label="Name" variant="standard" />
          <br />
          <TextField label="Password" variant="standard" type='password' /><br /> <br />
          <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Login