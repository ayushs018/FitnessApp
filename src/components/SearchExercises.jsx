import React , {useEffect , useState} from 'react'
import {Box , Button , Stack , TextField , Typography} from '@mui/material'
import { fetchData  , exerciseOptions} from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

function SearchExercises({setExercises , bodyPart , setBodyPart}) {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState();
    useEffect (()=> {
        const fetchExercisesData = async () => {
            const bodyPartsData = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']
            setBodyParts(['all' , ...bodyPartsData]) 
        }
        fetchExercisesData() ; 
    } , [])
    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300' , exerciseOptions) ; 
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) || 
                exercise.target.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search) ||
                exercise.bodyPart.toLowerCase().includes(search)
            )
            setSearch('')
            setExercises(searchedExercises)
        
        }
    }

  return (
    <Stack alignItems={"center"} mt = '37px' justifyContent='center' p = '20px'
    > 
    <Typography fontWeight= {700} sx={{
        fontSize : {lg : '44px' , xs : '30px'}
    }} textAlign='center' mb = '50px  '>
        Search for any exercises or equipment<br />   </Typography>

    <Box position='relative' mb = '72px'>
        <TextField
            sx={{
                input : {fontWeight : '700' , border : 'none' , borderRadius : '4px'  } , 
                width : {lg : '1170px' , xs : '350px'} , 
                backgroundColor : '#fff' , 
                borderRadius : '40px'
                
            }}
            height = '76px'
            value= {search}
            placeholder='Search Exercises' 
            onChange={(e) => {setSearch(e.target.value.toLowerCase( ))}}
            type = 'text' 
        />

        <Button variant='contained' color='error' sx={{
            mx : '10px' , mt : '8px' , minWidth : '100px'
        }}
            onClick={handleSearch}
        >Search</Button>
    </Box>

    <Box sx={{
        position : 'relative', 
        width : '100%' , 
        p : '20px' 
    }}>
        <HorizontalScrollBar data = {bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart} />
    </Box>
    </Stack>
  )
}

export default SearchExercises
