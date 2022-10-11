import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Features.css";

export default function ActionAreaCard() {
  return (
    <>
    <div className='cards'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://img.freepik.com/premium-vector/3d-airline-boarding-pass-ticket-ready-tourism-travel-planning-summer-vacation-concept-ticket-travel-agency-booking-service-3d-vector-passenger-airplane-ticket-render-illustration_412828-1097.jpg?w=360"
          alt="hastle-free booking"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hassle-free flight booking
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Protect yourself from hefty flight cancellation charges. Click here to know more about cancellation protection. Available for domestic flights only
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://img.freepik.com/premium-vector/3d-airline-boarding-pass-ticket-ready-tourism-travel-planning-summer-vacation-concept-ticket-travel-agency-booking-service-3d-vector-passenger-airplane-ticket-render-illustration_412828-1091.jpg"
          alt="hotel recommendation"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Hotel accomodations
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://img.freepik.com/premium-vector/3d-passport-airline-boarding-pass-ticket-mobile-phone-holding-hand-holiday-vacation-ready-tourism-travel-concept-3d-vector-ticket-identity-passport-render-illustration_412828-1092.jpg?w=2000"
          alt="global recognition"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Global recognition
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
   
    </div>
    </>
    
    
  );
}

