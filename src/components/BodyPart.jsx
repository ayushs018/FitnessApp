import React from 'react'
import {Stack , Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'


function BodyPart({item , setBodyPart , bodyPart}) {
   
  return (
    <div>
      <Stack
        type = 'button'
        className='bodyPart-card'
        alignItems='center'
        display= 'flex'
        flexDirection='row'
        justifyContent='center'
        padding= '10px'
        sx={
            bodyPart === item ? {
                border : '4px solid red' , 
                backgroundColor : '#fff' , 
                borderRadius : '100px' , 
                width : '270px' , 
                height : '280px' ,
                cursor : 'pointer', 
                gap : '47px'
            } : {
                background : '#ffe1e1' , 
                borderRadius : '100px' , 
                width : '270px' , 
                height : '280px' ,
                cursor : 'pointer', 
                gap : '47px'
            }
        }
        onClick= {() => {
            setBodyPart(item) ; 
            window.scrollTo({top:1800 , left : 100 , behavior : 'smooth' })
        }}
      > 
      <div>
      <img src={Icon} alt="dumbell" width = '100px' height = '100px'/>
        <Typography fontSize='24px' fontWeight='bold' color='red'>
            {item.toUpperCase()}
        </Typography>

      </div>
        
      </Stack>
    </div>
  )
}

export default BodyPart
