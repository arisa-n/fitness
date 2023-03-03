import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Exercise, HeroBanner, SearchExercise } from '../components'

const Home = () => {
  const [bodyPart, setBodyPart]=useState('all')
  const [exercises, setExercises]=useState([])

  return (
    <Box>
      <HeroBanner/>
      <SearchExercise 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
        setExercises={setExercises}/>
      <Exercise
        bodyPart={bodyPart} 
        exercises={exercises} 
        setExercises={setExercises}/>
    </Box>
  )
}

export default Home