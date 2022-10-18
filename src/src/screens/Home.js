import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Card,Grid,Typography,CardMedia,Container,CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let [ arr,setArr] = useState([])
    let navigate= useNavigate();
    let receiveData = ()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((success)=>{
         setArr([...success.data])
        })
        .catch((error)=>{
         console.log(error)
        })
    }
    useEffect(()=>{
        receiveData()
    },[])

    let sendData = (obj)=>{
      console.log(obj);
      navigate('/Detail',{
        state : obj
      })
    }
  return (

    <div>
    <h1 style={{textAlign:"center",margin: "20px"}}>Home Page</h1>  
    <Container>
    <Grid item  container spacing={3}>
        
        {arr.map((e , i)=>{
          console.log(e);
       return <Grid item md={4} lg={3} sm={6} xs = {12} >
       <Card onClick={()=>sendData(e)} sx={{boxShadow:"5px 5px 10px lightgrey ", borderRadius:'10px', display:'flex', flexDirection:'column', alignItems:'center'}}>
     
      <CardMedia 
        component="img"
        image={e.image}
       alt="image"
       height = "300px"
       style={{width:'100%', margin:'20px 0px', borderRadius:'8px'}}
       />
         <Typography variant="h5">{e.category}</Typography>
        <Typography variant="p">Price:{e.price}</Typography>
     
     </Card> 
      </Grid>
      })
    } 
      </Grid>
      </Container>
    </div>
  )
}
