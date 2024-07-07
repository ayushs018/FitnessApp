import React , {useEffect , useState}from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import { exerciseOptions , fetchData , youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams()
  useEffect (() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      
      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}` , exerciseOptions)
      const exerciseVideosData = await fetchData (`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}` , youtubeOptions)
      setExerciseDetail (exerciseDetailData)
      setExerciseVideos (exerciseVideosData.contents)
      const targetMuscleExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}` , exerciseOptions
      )

      const equipmentExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}` , exerciseOptions
      )
      setTargetMuscleExercises(targetMuscleExercisesData)
      setEquipmentExercises(equipmentExercisesData)

      
    }

    fetchExercisesData()
  } , [id])
  return (
    <div>
      <Box>
        <Detail exerciseDetail = {exerciseDetail} /> 
        <ExerciseVideos exerciseVideos = {exerciseVideos} name = {exerciseDetail.name} />
        <SimilarExercises  targetMuscleExercises = {targetMuscleExercises} equipmentExercises = {equipmentExercises} />
      </Box>
    </div>
  )
}

export default ExerciseDetails