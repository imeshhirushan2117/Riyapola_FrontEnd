import React from 'react'
import { Box , TextField  } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';

export default function TextInput({label , width , type , value , onChange,isDisable=false ,  InputProps}) {
  return (
    <Box>
         <TextField disabled={isDisable} sx={{width ,marginBottom:"15px"}} id="outlined-basic" label={label} variant="outlined" type={type} value={value} onChange={onChange} InputProps={InputProps}/>
    </Box>
  )
}
