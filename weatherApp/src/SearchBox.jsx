import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"



function SearchBox({updateInfo}) {
    let [city , setCity] = useState("")
    let [error , setError] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "123229b95029b1deca71210570469215"

  

    let getWeatherInfo = async () =>{
        try{
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
    
        let result = {
          city : city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,


        }
        console.log(result)
        return result
        }catch(err){
          throw err
        }
    }

    let hadleChange=(event) =>{
        setCity(event.target.value)
    }

    let handleSubmit = async (event) =>{
      try{
        event.preventDefault();
        console.log(city)
        setCity("")
        let newInfo = await getWeatherInfo()
        updateInfo(newInfo)

      }catch(err){
        setError(true)
        
      }
        
    }
  return (
    <div className='SearchBox'>
      
      
      <form onSubmit={handleSubmit}>
      <TextField id="City" label="City Name" variant="outlined" required  value={city} onChange={hadleChange}/>
      <br/>
      <br />
      <Button variant="contained" type="submit" >Search</Button>
      {error && <p style={{color:"red"}}>NO Such place exists!!!!</p>}
      </form>
    </div>
  )
}

export default SearchBox
