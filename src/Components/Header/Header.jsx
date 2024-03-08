import React from 'react'
import './styles.css'
import { Box ,Typography } from '@mui/material';
import Button from '../../common/Button/Button';
export default function Header() {
    return (
        <div>
            <Box sx={{ height: '70px', width: '100%', background: 'black' }}>
                <Box sx={{ display: "flex" , alignContent:'center' , justifyContent:"space-between"}}>
                    <Box>
                        <Typography sx={{color:'#A50010', fontWeight:"Bold", display:"flex" , alignItems:'center' ,padding:'12px'}} variant="h4" component="h4">
                            RIYAPOLA
                        </Typography>
                    </Box>
                    <Box sx={{padding:'12px'}}>
                        <Button name={"LogIn"} width={"120px"} background={'#A50010'} hoverColor={"#800a1e"}/>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
