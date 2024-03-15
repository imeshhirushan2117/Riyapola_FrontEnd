import React from 'react'
import { Box } from '@mui/material';
import { useState , useEffect } from 'react';

export default function DateTime({style}) {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

  return (
    <Box>
    <p style={style}>{currentDate.toLocaleString()}</p>
  </Box>
  )
}
