import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail, ExerciseVideos, SimilarExercises } from '../components'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail]= useState({})
  const [exerciseVideos, setExerciseVideos]= useState([])
  const [targetMuscle, setTargetMuscle]=useState([])
  const [equipmentExercises, setEquipmentExercise]=useState([])
  const { id } = useParams()

  useEffect(()=>{
    const fetchExerciseData = async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'


      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const youtubeVideos = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(youtubeVideos.contents)

      const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscle(targetMuscleData)

      const equipmentExrciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercise(equipmentExrciseData)
    }

    fetchExerciseData()
  }, [id])

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos name={exerciseDetail.name} exerciseVideos={exerciseVideos}/>
      <SimilarExercises targetMuscle={targetMuscle} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetails