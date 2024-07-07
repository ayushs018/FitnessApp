import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import Logo from '../assets/images/Logo.png'

function Navbar() {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{
      gap : {
        sm : '122px' , xs : '40px' 
      }, 
      mt : {
        sm : '32px' , xs : '20px'
      }, 
      justifyContent : 'none', px : '20px'
    }}>
      <Link to = '/home '>
        <img src={Logo} alt="Unable to load image" style={{
          width : '48px' , height: '48px' , margin:'0 20px'
        }}/>
        
      </Link>
      <Stack  gap='40px'direction='row' fontSize='24px' alignItems='flex-end'>
        <Link to= '/' style={{
          textDecoration: 'none' , borderBottom : '3px solid #FF2625' , color : '#3A1212'
        }}>Home</Link>
        <a href="#exercises" style={{
          textDecoration : 'none' , color : '#3A1212'
        }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
