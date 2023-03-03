import { Box, Stack } from '@mui/material'
import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="" width='40px' height='40px'/>
        <p>©{(new Date()).getFullYear()} Fitness</p>
      </Stack>
    </Box>
  )
}

export default Footer