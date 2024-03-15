import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextInput from '../../common/TextInput/TextInput';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function AdminCar() {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const numberOfSeats = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },

  ]

  const fuelType = [
    { label: 'Petrol', value: 'petrol' },
    { label: 'Diesel ', value: 'diesel ' },
    { label: 'Hybrid', value: 'hybrid' }
  ]

  const type = [
    { label: 'Auto', value: 'auto' },
    { label: 'Manual', value: 'manual' }
  ]

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <p style={{ color: "#B9B9B9", fontSize: "15px" }}>{currentDate.toLocaleString()}</p>
      </Box>
      <Box>
        <Grid container spacing={2}>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Brand Name"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Module Name"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={numberOfSeats}
                sx={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Number Of Passengers" />}
                onChange={(event, value) => console.log(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={fuelType}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Fuel Type" />}
                onChange={(event, value) => console.log(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={type}
                sx={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Transmission Type" />}
                onChange={(event, value) => console.log(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Daily Rental Price"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Extra Km Tax"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Kilometers Traveled"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>


          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Availability"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ padding: "10px" }}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload Images
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
          </Grid>


        </Grid>
      </Box>
    </Box>
  )
}
