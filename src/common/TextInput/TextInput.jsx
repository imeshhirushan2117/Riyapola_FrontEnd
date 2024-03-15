import React from 'react'
import { Box , TextField  } from '@mui/material'

export default function TextInput({label , width , type , value , onChange,isDisable=false}) {
  return (
    <Box>
         <TextField disabled={isDisable} sx={{width ,marginBottom:"15px"}} id="outlined-basic" label={label} variant="outlined" type={type} value={value} onChange={onChange}/>
    </Box>
  )
}
