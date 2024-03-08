import React from 'react'
import './styles.css'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles';

export default function myButton({name,width,background,hoverColor}) {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(background),
        backgroundColor: background,
        '&:hover': {
          backgroundColor: hoverColor,
        },
      }));

  return (
    <Box>
        <ColorButton sx={{width:{width}}} variant="contained">{name}</ColorButton>
    </Box>
  )
}

