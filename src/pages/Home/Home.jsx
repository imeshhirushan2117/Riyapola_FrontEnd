import React from 'react'
import './styles.css'
import Header from '../../Components/Header/Header'
import BackgroundImg from '../../common/BackgroundImg/BackgroundImg'
import { Box } from '@mui/material'
export default function Home() {
    return (
        <div>
           <Box sx={{position:"fixed" , zIndex:"100", width:"100%"}} >
           <Header/>
           </Box>
           <BackgroundImg/>
        </div>
    )
}
