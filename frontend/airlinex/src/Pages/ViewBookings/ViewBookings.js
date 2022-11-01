import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/Footer"
import './ViewBookings.css';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { useNavigate } from 'react-router-dom';

export default function ViewBookings() {

  const theme = useTheme();
  return (
    <>
    <Navbar />
    <br />
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick
          >
            <AirplaneTicketIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flight ticket
          </Typography>
          <Button color="inherit" sx={{fontWeight:'bold'}}>Booking</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Card sx={{ display: 'flex',justifyContent:'space-evenly'}}
    fullwidth
    elevation={5}
    >
   
    <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://static.vecteezy.com/system/resources/previews/009/671/638/original/air-ticket-specify-flight-details-and-travel-time-for-traveling-with-airlines-vector.jpg"
        alt="flight booking"
      />
      <Box sx={{ display: 'flex', flexDirection: 'flex-end',justifyContent:'center',alignItems:'center'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5"
          sx={{fontFamily:'inherit'}}>
            Flight Number
          </Typography>
          
          <Typography variant="subtitle1" color="text.secondary" component="div"
           sx={{fontFamily:'inherit',fontWeight:'bold',flexGrow:1}}>
             <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <FlightTakeoffIcon/>
          </IconButton>
            Source: Dubai
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div"
           sx={{fontFamily:'inherit',fontWeight:'bold'}}>
              <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <FlightLandIcon/>
          </IconButton>
            Destination: Mumbai
          </Typography>
        </CardContent>
       
      </Box>
    </Card>
    </Container>
    <br />
    <Footer />
    </>
    
  );
}
