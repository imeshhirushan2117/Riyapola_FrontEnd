import React from 'react'
import { Box, Typography } from '@mui/material'
import home_img from '../../assets/img/home.jpg'

export default function BackgroundImg() {
    return (
        <Box>
            <Box sx={{ background: "black" }}>
                <Box
                    sx={{
                        color: "white",
                        position: "absolute",
                        zIndex: '100',
                        alignItems: "left",
                        justifyContent: "center",
                        height: '100%',
                        display: 'flex',
                        padding: "30px",
                        flexDirection: "column"
                    }}>
                    <Typography sx={{ fontWeight: "bold" }} variant="h3" component="h3">
                        Well Come To <span style={{ color: "#A50010" }}>Riyapola</span>
                    </Typography>

                    <Typography sx={{ fontWeight: 200, textAlign: "left" }} variant="h5" component="h5">
                        Choose Your Favourite Car
                    </Typography>
                </Box>

                <img style={{ width: "100%", opacity: "50%" }} src={home_img} alt="" />

            </Box>

        </Box>
    )
}
