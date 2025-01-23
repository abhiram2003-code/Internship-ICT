import { Button, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Well = () => {
    
    var [names, setnames] = useState()
    
    const label = (e) => {
        console.log(e.target.textContent)
        setnames(e.target.textContent)
    }
    const load = (names) => {
        setnames(names)
    }
    useEffect((names) => {
        load('Angular')
    },[])
  return (
    <div class='sign'>
          <h1>Welcome {names}</h1>
          <Button varient='outlined' onClick={label}>React</Button> <br />
          <Button varient='outlined' onClick={label}>Angular</Button><br />
          <Button varient='outlined' onClick={label}>View</Button>
    </div>
  )
}

export default Well