import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Grid , Card , CardMedia , Typography} from '@mui/material';
import {Container} from '@mui/material';
import Rating from '@mui/material/Rating';
import {Button }from '@mui/material';



export default function NewsDetail() {
  const [value, setValue] = React.useState(4);
  let navigate = useNavigate();
    let location = useLocation();

  return (
    <div>
      <Container maxWidth="md" sx={{marginY:"30px",}}>
      <Grid item  container spacing={3}>
       <Grid item md={12} lg={12} sm={12} xs = {12} >
       <Card sx={{boxShadow:"5px 5px 10px lightgrey ", borderRadius:'10px', display:'flex', flexDirection:'column',padding:'20px 0px', alignItems:'center'}}>
       <CardMedia 
         component="img"
         image={location.state.urlToImage}
        alt="image"
        style={{width:'95%', margin:'20px 0px', borderRadius:'8px'}}
        />
      <Typography m={2} component="div" variant="h5">Title:{location.state.title}</Typography>
       <Typography m={2} component="div" variant="p">Content:{location.state.content}</Typography>
       <Typography m={2} component="div"   variant="p">Description:{location.state.description}</Typography>
       <Typography m={2} component="div" variant="h6">Author Name:{location.state.author}</Typography>
      <Button onClick={()=>{navigate("/News")}} variant = "contained">Go Back to News Page</Button>
      </Card> 
      
      </Grid>
     </Grid>
     </Container>
    </div>
  )
}
