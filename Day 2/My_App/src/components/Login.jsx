import { TextField } from '@mui/material'
import React from 'react'
TextField

const Login = () => {
  return (
      <div>
          <h2>Log in</h2>
          <TextField label="Name" variant="standard" /><br /><br />
          <TextField label="Password" variant="standard" type="password" /> <br /> <br />
          <button>LOGIN</button>
          
    </div>
  )
}

export default Login
