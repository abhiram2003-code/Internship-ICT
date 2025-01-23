import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'


const Name = () => {
    var [name, setname] = useState("Explorer")

    const  handleinput = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    var [displayname,setdisplayname]= useState('')
    const handleclick = () => {
        console.log("clicked")
        setdisplayname(name)

    }
  return (
    <div>
          <h5>Welcome to SpaceX <br /> {displayname}</h5>
          <TextField label="NAME" variant="outlined" onChange={handleinput}/>
          <br />
          <Button variant="contained" color="success" onClick={handleclick}>
              Submit
          </Button>
    </div>
  )
}

export default Name
