import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button } from '@mui/material';



const View = () => {
    const [data, setdata] = useState([])
    axios.get("http://localhost:3000/view")
        .then((res) => {
            setdata(res.data)
        })
    
    const deletevalue = (id) => {
        try {
            axios.delete('http://localhost:3000/delete/' + id)
                .then((res) => {
                    alert(res.data.message);
                    setdata(data.filter(emp => emp._id !== id));
                })
                .catch((error) => { // Fixed 'errror' to 'error'
                    alert("Error deleting value: " + error.message);
                });
            window.location.reload()
        } catch (error) {
            alert("Error: " + error.message);
        }
    }

  return (
      <div>
          
          <h3>VIEW DETAILS</h3>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Age</TableCell>
                      <TableCell align="center">Dept</TableCell>
                      <TableCell align="center">Salary</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {data.map((row) => (
                      <TableRow key={row.id}>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.Age}</TableCell>
                          <TableCell align="center">{row.Dept }</TableCell>
                          <TableCell align="center">{row.Salary}</TableCell>
                          <Button variant="contained" color='error' onClick={()=> deletevalue(row._id)}>Delete</Button>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
    </div>
  )
}

export default View
