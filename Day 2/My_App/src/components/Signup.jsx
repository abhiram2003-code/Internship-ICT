
import { Button, TextField } from '@mui/material'
import React from 'react'


const Signup = () => {
  return (
      <div> 
          <h3>Sign UP</h3>
          <TextField label="NAME" variant="outlined" /> <br /> <br />
          <TextField label="Password" variant="outlined" type='password' /> <br />
          <Button variant="contained" color="success">
            Done
          </Button>
    </div>
  )
}

export default Signup
