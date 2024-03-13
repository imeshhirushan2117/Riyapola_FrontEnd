import React from 'react'
import './styles.css'
import { Box ,Typography } from '@mui/material';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom'
export default function Header() {

    const navLoginPage  = () => {
        console.log("navLoginPage")
    }

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
                        <Link to={'/login'}>
                        <Button name={"Sign In"} width={"120px"} background={'#A50010'} hoverColor={"#800a1e"} onClick={navLoginPage}/>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
