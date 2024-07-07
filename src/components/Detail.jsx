import React from 'react'
import {Typography , Stack , Button} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

function Detail({exerciseDetail}) {
  return (
    <Stack gap = '60px' sx =  {{flexDirection : {lg: 'row'} , p : '20px' , alignItems : 'center'}} >
        <img src={exerciseDetail.gifUrl} alt= {exerciseDetail.name} loading='lazy' className='detail-image'/>
        <Stack
            sx={{gap : {lg : '35px' , xs : '20px' }}}
        >
            <Typography variant='h3' fontWeight='bold'>
                {exerciseDetail.name}
            </Typography>

            <Typography variant='h4'>
                Exercises keep you strong. {exerciseDetail.name} {` `} is one of the best exercises to target your {exerciseDetail.target}. It will help you improve mood and gain energy.
            </Typography>
            <Stack direction='row' alignItems='center' >
                <Button sx={{width:'100px' , borderRadius: '50%' , background : '#fff2db'}} >
                <img src={BodyPartImage} alt="" width='50px' height='50px'  />
                </Button>
            <Typography variant='h5' textTransform='capitalize' >
                {exerciseDetail.bodyPart}
            </Typography>
                
            </Stack>
            <Stack direction='row' >
            <Button sx={{width:'100px', borderRadius: '50%' , background : '#fff2db'}}>
                <img src={TargetImage} alt=""width='50px' height='50px'  />
                
            </Button>
            <Typography variant='h5' textTransform='capitalize' >
            {exerciseDetail.target}
            </Typography>
            </Stack>

            <Stack direction='row' >
            <Button sx={{width:'100px', borderRadius: '50%' , background : '#fff2db'}}>
            <img src={EquipmentImage} alt=""width='50px' height='50px'  />
           
            </Button>
            <Typography variant='h5' textTransform='capitalize' >
            {exerciseDetail.equipment}
            </Typography>
            </Stack>
            
        </Stack>

    </Stack>
  )
}

export default Detail
