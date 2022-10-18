import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card,Grid,Typography,CardMedia } from '@mui/material'
import { useEffect } from 'react';
import {Container }from '@mui/material';

// //Styling
// const hehe = {
//   color: 'blue',
//   backgroundColor : "blue",
// }




export default function News() {
    let [ arr,setArr] = useState([])
    let navigate= useNavigate();
    let sendData = (obj)=>{
      console.log(obj);
      navigate('/NewsDetail',{
        state : obj
      })
    }
    let receiveData = ()=>{
        axios
        .get("https://newsapi.org/v2/everything?q=Apple&from=2022-10-17&sortBy=popularity&apiKey=dec9e69ef5c74039b15b01491bfe2cde")
        .then((success)=>{
         setArr([...success.data.articles])
        console.log(success.data.articles)
        })
        .catch((error)=>{
         console.log(error)
        })
    }
    useEffect(()=>{
        receiveData()
    },[])
  return (
    <div>
      <h1  style={{textAlign:"center",margin: "20px"}}>News Page</h1>
      <Container maxWidth='md'>
      <Grid item  container spacing={4}>
        
        {arr.map((e , i)=>{
          console.log(e)
        return <Grid item md={12} lg={12} sm={12} xs = {12} >
        <Card onClick={()=>sendData(e)} sx={{boxShadow:"5px 5px 10px lightgrey ", borderRadius:'10px', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography variant="h5">{e.category}</Typography>
       <CardMedia 
         component="img"
         image={e.urlToImage}
        alt="image"
        style={{width:'95%', margin:'20px 0px', borderRadius:'8px'}}
        />
        <Typography m={2} component="div" variant="h5">Title:{e.title}</Typography>
       <Typography m={2} component="div" variant="p">Content:{e.content}</Typography>
       <Typography m={2} component="div"   variant="p">Description:{e.description}</Typography>
       <Typography m={2} component="div" variant="h6">Author Name:{e.author}</Typography>
      </Card> 
      </Grid>
      })
    } 
      </Grid>
      </Container>
    </div>
  )
}
