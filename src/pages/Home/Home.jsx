import React from 'react'
import './styles.css'
import Header from '../../Components/Header/Header'
import BackgroundImg from '../../Components/BackgroundImg/BackgroundImg'
import { Box } from '@mui/material'
export default function Home() {
    return (
        <div>
           <Box sx={{position:"fixed" , zIndex:"1000", width:"100%"}} >
           <Header/>
           </Box>
           <BackgroundImg/>
        </div>
    )
}
