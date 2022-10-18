import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Grid , Card , CardMedia , Typography} from '@mui/material';
import {Container} from '@mui/material';
import Rating from '@mui/material/Rating';
import {Button }from '@mui/material';



export default function Detail() {
  const [value, setValue] = React.useState(4);
  let navigate = useNavigate();
    let location = useLocation();

  return (
    <div>
      <Container  maxWidth='md' sx={{marginY:"30px",}}>
      <Grid item  container spacing={3}>
       <Grid item md={12} lg={12} sm={12} xs = {12} >
       <Card sx={{boxShadow:"5px 5px 10px lightgrey ", borderRadius:'10px', display:'flex', flexDirection:'column',padding:'20px 0px', alignItems:'center'}}>
       <CardMedia 
         component="img"
         image={location.state.image}
        alt="image"
        style={{width:'20%', margin:'20px 0px', borderRadius:'8px'}}
        />
      <Typography  variant="h6">Category:{location.state.category}</Typography>
      <Typography variant="h6">Title:{location.state.title}</Typography>
      <Typography variant="h6">Price:{location.state.price}</Typography> 
      <Rating value={value} readOnly />
      <Typography m={5} variant="p">Detail:{location.state.description}</Typography>
      <Button onClick={()=>{navigate("/")}} variant = "contained">Go Back to Home Page</Button>
      </Card> 
      
      </Grid>
     </Grid>
     </Container>
    </div>
  )
}
