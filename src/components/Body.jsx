import './main.css'
import {Box,TextField} from '@mui/material';
import Message from './Message';
import { useState } from 'react';
import { useEffect } from 'react';
import Display from './Display';
import axios from 'axios';
const Body = () =>{
    const[inputText,setInputText] = useState("");
    const[debounceTimeout,setDebounceTimeout] = useState(null);
    const[weatherData,setWeatherData] = useState(null);
    const[dataAvailable,setDataAvailable] = useState(false);

  

const fetchData = async(data)=>{
    const url = `http://api.weatherapi.com/v1/current.json?key=a742dabdf30f4e5e9f490637240103&q=${data}`
    if(data.length>0){
        await axios.get(url).then((res)=>{
            if(res.status===200){
                setWeatherData(res);
                setDataAvailable(true);
                
            }
        }).catch((err)=>{
                if(err.response.status===400){
                    setDataAvailable(true);
                    setWeatherData(null);
                    

                }
            
        })
      
    }

    else {
    setDataAvailable(false);
    setWeatherData(null);
    }
   
}

const debounceSearch = (value, debounceTimeout) => {
    

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
        fetchData(value);
    }, 500);

    setDebounceTimeout(timeout);
  };

  useEffect(()=>{
        debounceSearch(inputText,debounceTimeout);
  },[inputText])


    return(
        <>
     
        <Box sx={{width:"600px",m:"20px auto"}} id="input-container">
        <TextField
         id="outlined-basic" 
         
         label="Enter location" 
         variant="outlined" 
         InputLabelProps={{style: { fontSize: '20px', fontWeight:"500",background:"#ffffff",padding: "0px 11px"}}} 
         value={inputText}
        onChange={(e)=>{setInputText(e.target.value)}}
         fullWidth
         />
        </Box>
   

      
      {dataAvailable && weatherData && <Display data={weatherData.data}/>}

  
        
       {dataAvailable && !weatherData && <Message/>}
       

       
        
        </>
    )
}

export default Body;