import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import location from "../../assets/img/location.png"
import time from "../../assets/img/time.png"
import email from "../../assets/img/email.png"
import call from "../../assets/img/call.png"

export default function Footer() {


    return (
        <Box>
            <Box sx={{
                background: "#292524",
                width: "100%",
                height: "100px",
                marginTop: "0px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",

            }}>

                <Grid container spacing={2} sx={{}}>
                    <Grid item xs={3}>
                        <Box sx={{ color: 'white', padding: "15px", display: "flex", flexDirection: "row" }}>
                            <img style={{ width: "56px", cursor: "pointer" }} src={location} alt="" />

                            <Box>
                                <Typography sx={{ paddingLeft: "10px", cursor: "pointer" }} variant="h5" component="h5">
                                    Location
                                </Typography>

                                <Typography sx={{ paddingLeft: "10px", fontSize: "15px", cursor: "pointer" }} variant="h6" component="h6">
                                    Panadura
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={3} >
                        <Box sx={{ color: 'white', padding: "15px", display: "flex", flexDirection: "row" }}>
                            <img style={{ width: "56px", cursor: "pointer" }} src={time} alt="" />

                            <Box>
                                <Typography sx={{ paddingLeft: "10px", cursor: "pointer" }} variant="h5" component="h5">
                                    Avialable
                                </Typography>

                                <Typography sx={{ paddingLeft: "10px", fontSize: "15px", cursor: "pointer" }} variant="h6" component="h6">
                                    Service Available 24/7
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box sx={{ color: 'white', padding: "15px", display: "flex", flexDirection: "row" }}>
                            <img style={{ width: "56px", cursor: "pointer" }} src={email} alt="" />

                            <Box>
                                <Typography sx={{ paddingLeft: "10px", cursor: "pointer" }} variant="h5" component="h5">
                                    Email
                                </Typography>

                                <Typography sx={{ paddingLeft: "10px", fontSize: "15px", cursor: "pointer"}} variant="h6" component="h6">
                                    meshhirushan2117@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box sx={{ color: 'white', padding: "15px", display: "flex", flexDirection: "row", cursor: "pointer" }}>
                            <img style={{ width: "56px" }} src={call} alt="" />

                            <Box>
                                <Typography sx={{ paddingLeft: "10px", cursor: "pointer" }} variant="h5" component="h5">
                                    Call
                                </Typography>

                                <Typography sx={{ paddingLeft: "10px", fontSize: "15px", cursor: "pointer" }} variant="h6" component="h6">
                                    +94 77 920 1232
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

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
        </Box>
    )
}
