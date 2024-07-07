import React from 'react'
import {Link } from 'react-router-dom'
import {Button , Stack , Typography} from '@mui/material'
function ExerciseCard({ exercise , index}) {
  return (
    <Link className='exercise-card' to = {`/exercise/${exercise.id}`}> 
        <img src= {exercise.gifUrl} alt= {exercise.name} loading='lazy' />
        <Stack direction='row'>
          <Button sx={{ml : '21px' , color : '#fff' , background : '#ffa9a9'
            , fontSize: '14px' , borderRadius: '20px' , textTransform: 'capitalize'
          }}>
            {exercise.bodyPart}

          </Button>

          <Button sx={{ml : '21px' , color : '#fff' , background : '#fcc757'
            , fontSize: '14px' , borderRadius: '20px' , textTransform: 'capitalize'
          }}>
            {exercise.target}

          </Button>

        </Stack>
        <Button sx={{ml : '21px', fontWeight: 'bold' , color : '#fff' , background : '#fcc9a9'
            , fontSize: '18px' , borderRadius: '20px' , textTransform: 'capitalize'
          }}>
            {exercise.name}

          </Button>
          
    </Link>
  )
}

export default ExerciseCard
