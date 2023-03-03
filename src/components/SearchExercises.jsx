import { Button, Stack, Typography, TextField, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({bodyPart, setBodyPart, setExercises}) => {
  const [search, setSearch]=useState('')
  const [bodyParts, setBodyParts]=useState([])

  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExerciseData()
  }, [])

  const handleSearch=async()=>{
    if(search){
      const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      const searchedExercises= exerciseData.filter(
        (exercise)=>exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack 
        alignItems='center' 
        mt='36px' 
        justifyContent='center' 
        p='20px'>
        <Typography 
            fontWeight={700} 
            sx={{fontSize:{lg: '44px', xs:'30px'}}}
            mb='40px'
            textAlign='center'>
            Awesome Exercises You <br/> Should know
        </Typography>
        <Box
            position='relative'
            mb='72px'>
              <TextField
                height="76px"
                sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
              />
              <Button className='search-btn'
                sx={{bgcolor:'#FF2625', color:"#fff", textTransform:'none', width:{lg:'173px', xs:'80px'}, height:'56px', position:'absolute', right:'0px', fontSize:{lg:'20px', xs:'14px'}}}
                onClick={handleSearch}>
                Search
              </Button>
        </Box>
        <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data ={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
        </Box>
    </Stack>
  )
}

export default SearchExercises