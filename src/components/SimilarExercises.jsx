import React from 'react'
import {Box , Stack , Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'


function SimilarExercises({targetMuscleExercises , equipmentExercises}) {
  return (
    <div>
      
        <Typography variant='h4'>Exercises that target the same muscle group</Typography>
        <br />
        
        <Stack direction='row'>
          {targetMuscleExercises.slice(0,3).map((exercise , index) => (
            <ExerciseCard exercise={exercise} index={index}/>
          ))}
        </Stack>
      
      
      <br /><br />

        <Typography variant='h4'>Exercises that uses similar equipment</Typography>
        <br />
        <Stack direction='row'  sx={{right : '15px' , marginLeft:'4px' }}>
          {equipmentExercises.slice(0,3).map((exercise , index) => (
            <ExerciseCard exercise={exercise} index={index}/>
          ))}

        </Stack>

    </div>
  )
}

export default SimilarExercises
