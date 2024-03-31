import React from 'react'
import { Box, Card } from '@mui/material'
import img_temp1 from '../../assets/img/carViewImg1.jpg'

export default function ViewCard() {
    return (
        <Card sx={{ padding:'20px' ,  borderRadius: '20px' ,  width:'50%' ,  display:'flex' ,  flexDirection:'row'}}>
            <Box sx={{padding:'0px'}}>
                <img style={{width:'50%' , borderRadius: '20px'}} src={img_temp1} alt="" />
            </Box>
            <Box>

            </Box>
        </Card>
    )
}
