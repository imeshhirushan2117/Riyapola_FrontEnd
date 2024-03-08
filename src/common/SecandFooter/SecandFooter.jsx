import React from 'react'
import { Box ,Typography } from '@mui/material'


export default function SecandFooter() {
  return (
    <Box sx={{
        background: "#000000",
        width: "100%",
        height: "90px",
        color:"white",
        textAlign:"center",
        paddingTop:"15px",
       
    }}>
        <Typography sx={{ fontSize:"15px"}} variant="h6" component="h6">
            Copyright ©2024 by Codehal | All Rights reserved by <span style={{color:"#A50010"}}>Imesh Hirushan</span>
        </Typography>
        <Typography sx={{ fontSize:"15px"}} variant="h6" component="h6">
            imeshhirushan2117@gmail.com
        </Typography>
    </Box>
  )
}
