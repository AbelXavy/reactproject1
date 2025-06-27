import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
   var [stu,setstu]=useState([])
  var [stu, setstu] = useState([]);
   var navigate=useNavigate()
  useEffect(() => {

    axios.get("http://localhost:3007/").then((res) => { console.log(res); setstu(res.data)}) .catch((err) => { console.log(err) })
  }, []) 
  const delstu=(id)=>{
    console.log(id)
    axios.delete(`http://localhost:3007/${id}`)
      .then((res)=>{
        console.log(res)
        alert(res.data)
        window.location.reload();
       
      })
      .catch((err)=>{
         console.log(err)
      })
    
  }
   const upstu=(item)=>{
    console.log("item",item)
    navigate("/a",{state:item});
   
   
   }
  return (
    <div align="center">
      <TableContainer component={Paper} sx={{maxWidth:"1000px"}} >
        <Table sx={{ minWidth: 650,maxWidth:"1000px" }} aria-label="simple table" align="center">
          <TableHead>
            <TableRow>
              
              <TableCell align="left">name</TableCell>
              <TableCell align="left">age</TableCell>
              <TableCell align="left">course</TableCell>
              <TableCell align="left">Place</TableCell>
               <TableCell align="right">action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {stu.map((item,i)=>{
                return(
                <TableRow key={i}>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="left">{item.age}</TableCell>
                  <TableCell align="left">{item.course}</TableCell>
                   <TableCell align="left">{item.place}</TableCell>
                   <TableCell align="right">
                    <Button variant="outlined" color='error' onClick={()=>{delstu(item._id)}}>
                      remove
                    </Button>
                    &nbsp;&nbsp;
                    <Button variant="outlined" color='success' onClick={()=>{upstu(item) }}>
                      edit
                    </Button>
                    </TableCell>
                 
                </TableRow>
            
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
