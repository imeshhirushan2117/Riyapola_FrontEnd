import React from 'react'
import { Box } from '@mui/material'
import logIn_img from '../../assets/img/logIn.jpg'
import SecandFooter from '../../common/SecandFooter/SecandFooter'

export default function LogInBackgroundImg() {
    return (
        <Box>
            <Box sx={{ background: "black" }}>
                <img style={{ width: "100%", opacity: "50%"}} src={logIn_img} alt="" />
            </Box>
            <SecandFooter/>

        </Box>
    )
}
