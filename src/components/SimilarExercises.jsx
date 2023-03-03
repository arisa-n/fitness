import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './loader'

const SimilarExercises = ({targetMuscle, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg:'100px', xs:'0'}}}>
        <Typography variant='h3' mb={5}>Exercise that target the same muscle group </Typography>
        <Stack direction='row' sx={{p: '2', position: 'relative'}}>
          {targetMuscle.length ? <HorizontalScrollbar data={targetMuscle}/> : <Loader/>}
        </Stack>
        <Typography variant='h3' mb={5} mt={5}>Exercise that use the same equipment </Typography>
        <Stack direction='row' sx={{p: '2', position: 'relative'}}>
          {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
        </Stack>
    </Box>
  )
}

export default SimilarExercises