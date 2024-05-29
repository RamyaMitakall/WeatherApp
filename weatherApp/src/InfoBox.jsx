import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import "./InfoBox.css"



function InfoBox({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL =" https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className='InfoBox'>
      
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <SevereColdIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature = {info.temp}&deg;C</div>
         <div>Humidity = {info.humidity}</div>
         <div>Min Temp = {info.tempMin}&deg;C</div>
         <div>Max Temp = {info.tempMax}&deg;C</div>
         <div>The weather feels like = {info.feelsLike}&deg;C</div>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}

export default InfoBox
