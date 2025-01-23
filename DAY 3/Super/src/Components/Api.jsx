import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material';


const Api = () => {
    axios.get('https://fakestoreapi.com/products')
        .then[(res) => (
            console.log(res.data.slice(0, 20))
        )]
    const [datas, setdatas] = useState([])
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data.slice(0, 20));
                setdatas(res.data.slice(0, 20));
            })
    }, []);
  return (
      <div>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  {datas.map((product)=>(
                      <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                          <Item>
                              <Card sx={{ maxWidth: 345 }}>
                                  <CardMedia
                                      component="img"
                                      alt={product.title}
                                      height="140"
                                      image={product.image}
                                  />
                                  <CardContent>
                                      <Typography gutterBottom variant="h5" component="div">
                                          {product.title}
                                      </Typography>
                                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                          {product.description}
                                      </Typography>
                                  </CardContent>
                                  
                                  <CardActions>
                                      <Button size="small">Share</Button>
                                      <Button size="small">Learn More</Button>
                                  </CardActions>
                              </Card>
                          </Item>
                      </Grid>
                  ))}
              </Grid>
          </Box>

    </div>
  )
}

export default Api