import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import img_temp1 from '../../assets/img/carViewImg1.jpg'

export default function ViewCard() {
    return (
        <Card sx={{ maxWidth: 360, padding: '10px' }}>
            <Box sx={{ width: '100%' }}>
                <img style={{ width: '100%', borderRadius: '10px' }} src={img_temp1} alt="" />
            </Box>

            <Box sx={{ padding: '20px' }}>
                <Box sx={{ textAlign: 'center', paddingBottom: '15px' }}>
                    <p style={{fontSize:'20px' , fontWeight:'bold'}}>MAHENDRA KUV 100</p>
                </Box>

                <Box sx={{fontSize:'15px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Fuel Type</p>
                        <p>Desile</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Transmission Type</p>
                        <p>Auto</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Seats</p>
                        <p>6</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Daily Rental Price</p>
                        <p>Rs.6700</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Daily Limit Kilometers</p>
                        <p>100 Km</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Extra Km</p>
                        <p>Rs.45</p>
                    </Box>
                </Box>

                <Box sx={{ textAlign: 'center', paddingTop: '20px' , fontSize:'20px' ,  fontWeight:'bold'}}>
                    <p style={{color:'#022E1F'}}>Available</p>
                </Box>
            </Box>
        </Card>
    )
}
