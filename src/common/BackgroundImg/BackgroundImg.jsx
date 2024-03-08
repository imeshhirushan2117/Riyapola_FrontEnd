import React from 'react'
import { Box } from '@mui/material'
import home_img from '../../assets/img/home.jpg'

export default function BackgroundImg() {
  return (
    <Box>
         <Box sx={{background:"black"}}>
            <img style={{width:"100%" , opacity:"50%" }} src={home_img} alt="" />
         </Box>
    </Box>
  )
}
