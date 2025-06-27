import React, { useEffect, useState } from 'react'
import {TextField,Button,Typography} from '@mui/material';
import axios from "axios"
import {useLocation, useNavigate} from "react-router-dom"

const Sub = (props) => {
  var location=useLocation();
  console.log("loc",location.state)
  var navi=useNavigate()
  var[kai,setkai]=useState({name:"",
    age:"",
    course:"",
    place:""})
    useEffect(()=>{
      if(location.state!=null){
        setkai({...kai,name:location.state.name,age:location.state.age,course:location.state.course,place:location.state.place})
      }
    },[])
    const click=()=>{
     if(location.state!=null){
      axios.put(`http://localhost:3007/${location.state._id}`,kai)
      .then((res)=>{
        console.log(res)
         navi("/b");
      })
      .catch((err)=>{
         console.log(err)
      })
     }
      else{
         axios.post("http://localhost:3007/",kai)
      .then((res)=>{
        console.log(res)
        alert(res.data)
        navi("/b");
      })
      .catch((err)=>{
         console.log(err)
      })
      }
    }
    const inputhandler=(e)=>{
      setkai({...kai,[e.target.name]:e.target.value})
      console.log(kai)

    }
  return (
    <div className='b'>
        <Typography variant='h1'>Add Students</Typography>
      <TextField id="outlined-basic" label="name" variant="outlined" name="name" value={kai.name} onChange={inputhandler}/><br />
       <TextField id="outlined-basic" label="age" variant="outlined" name="age" value={kai.age} onChange={inputhandler}/><br />
        <TextField id="outlined-basic" label="course" variant="outlined" name="course" value={kai.course} onChange={inputhandler}/><br />
         <TextField id="outlined-basic" label="place" variant="outlined" name="place" value={kai.place} onChange={inputhandler}/><br />
         <br />
         <Button variant="outlined" onClick={click}>Outlined</Button>
    </div>
  )
}

export default Sub
