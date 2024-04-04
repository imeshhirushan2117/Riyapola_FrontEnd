import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import CarouselImgs from '../CarouselImgs/CarouselImgs'

export default function ViewCard({ img, brandName, moduleName, type, transmission, seats, drPrice, limit, extraKm, status , items }) {


    return (
        <Card sx={{

            maxWidth: '100%',
            padding: '10px',
            cursor: 'pointer',
            
            transition: 'transform 0.5s, box-shadow 0.5s',
            ':hover': {
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transform: 'scale(1.05)',
            }
        }}>
            <Box sx={{ width: '100%' }}>
                {/* <img style={{ width: '100%', borderRadius: '10px' }} src={img} alt="" /> */}
                <CarouselImgs items={items}/>
            </Box>

            <Box sx={{ padding: '20px' }}>
                <Box sx={{ textAlign: 'center', paddingBottom: '15px' }}>
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{brandName} {moduleName}</p>
                </Box>

                <Box sx={{ fontSize: '15px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Fuel Type</p>
                        <p>{type}</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Transmission Type</p>
                        <p>{transmission}</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Seats</p>
                        <p>{seats}</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Daily Rental Price</p>
                        <p>Rs.{drPrice}</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Daily Limit Kilometers</p>
                        <p>{limit} Km</p>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                        <p>Extra Km</p>
                        <p>Rs.{extraKm}</p>
                    </Box>
                </Box>

                <Box sx={{ textAlign: 'center', paddingTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
                    <p style={{ color: '#007C00' }}>{status}</p>
                </Box>
            </Box>
        </Card>
    )
}
