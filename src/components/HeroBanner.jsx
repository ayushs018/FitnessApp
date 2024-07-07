import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
import {Box , Stack , Typography , Button} from '@mui/material'



function HeroBanner() {
  return (
    <Box
    sx={{
        mt : {lg : '212px' , xs : '70px'} , 
        ml : {sm : '50px'}
    }} position= 'relative' p = '20px' 
    >
        <Typography color = '#FF2625' fontWeight= '600' fontSize= '26px' >
            Fitness Club
        </Typography>

        <Typography  fontWeight= '700' sx = {{fontSize : {lg : '44px' , xs : '40px'}}} >
            Sweat, Smile <br />and Repeat
        </Typography>

        <Typography  fontWeight= '700' sx = {{fontSize : {lg : '22px' , xs : '22px'}}} >
            Checkout the most effective exercises
        </Typography>
        <br />
        <br />
        <Typography fontSize= "240px"  fontWeight={600} color='#ff2625' sx={{
            opacity : '0.1'
        }}>
            Exercises
        </Typography>
        <Button href='#exercises' variant= 'contained'color = 'error'>Explore Exercises</Button>
        <img src={HeroBannerImage} alt="Unable to load Image" className='hero-banner-img'/>
    
    </Box>

    
  )
}

export default HeroBanner
