import React , {useState , useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box , Stack , Typography} from '@mui/material'
import {exerciseOptions , fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

function Exercises({exercises , setExercises , bodyPart}) {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9 ; 
    const paginate = (e , value) => {
        setCurrentPage(value)
        window.scroll({top:2300 , behavior: 'smooth'})
    }
    useEffect (() => {
        const fetchExercisesData = async() => {
            let exerciseData = [] ; 
            if (bodyPart != 'all') {
                exerciseData = await fetchData (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?offset=0&limit=1300`, exerciseOptions)
            }
            
            setExercises (exerciseData)
        }
        fetchExercisesData()

    } , [bodyPart])
    const indexOfLastExercise = currentPage * 9 ; 
    const indexOfFirstExercise = indexOfLastExercise - 9 ; 
    const currentExercises = exercises.slice(indexOfFirstExercise , indexOfLastExercise)
    
    return (
    <Box id = 'exercises'
        sx={{mt : {lg : '110px'}}}
        mt = '50px'
        p = '20px'
    >
        {exercises.length > 0 && 
            <Typography variant='h3' mb = '46px'> 
                Showing Results
            </Typography>
        }
        <Stack direction='row' 
            sx={{gap : {lg : '110px' , xs : '50px'}}}
            flexWrap= 'wrap'
            justifyContent= 'center'
        >
            {currentExercises.map((exercise , index) => (
                <ExerciseCard key={index} exercise = {exercise}/>
            ))}
        </Stack>

        
        <Stack mt='100px' alignItems='center'>
            {exercises.length > 9 && (
              <Pagination
                color='standard' 
                shape='rounded'
                defaultPage={1}
                count={Math.ceil(exercises.length/9)}
                page={currentPage}
                onChange={paginate}
                size='large'
              
              />
            )}

          </Stack>
      
    </Box>
  )
}

export default Exercises
