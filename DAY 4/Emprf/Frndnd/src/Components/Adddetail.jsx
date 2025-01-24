import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Adddetail = () => {
  var [input, setvalue] = useState({ name: " ", Age: " ", Dept: " ", Sal: " " })
  var navigate = useNavigate()

  const inputhandler = (e) => {
    setvalue({...input, [e.target.name]: e.target.value})
    console.log(input)
  }
  const addhandler=() => {
    axios.post("http://localhost:3000/add", input)
      .then((res) => {
        alert(res.data.message)
        navigate('/View')
    })
    
  }
  return (
      <div>
          <h3>ADD DETAILS</h3>
          <TextField label="name" variant="filled" name='name' value={input.name} onChange={inputhandler} /><br /><br />
          <TextField label="Age" variant="filled" name='Age' value={input.Age} onChange={inputhandler}/><br /><br />
          <TextField label='Department' variant='filled' name='Department' value={input.Dept} onChange={inputhandler}/> <br /><br />
          <TextField label='Salary' variant='filled' name='Salary' value={input.Salary} onChange={inputhandler}/><br /><br />
          <Button variant='contained' onClick={addhandler}>SUBMIT</Button>
    </div>
  )
}

export default Adddetail
