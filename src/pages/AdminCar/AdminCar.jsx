import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextInput from '../../common/TextInput/TextInput';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';



export default function AdminCar() {

  const numberOfSeats = [
    { label: '1' , value: '1'},
    { label: '2' , value: '2'},
    { label: '3' , value: '3'},
    { label: '4' , value: '4'},
    { label: '5' , value: '5'},
    { label: '6' , value: '6'},
    { label: '7' , value: '7'},
    { label: '8' , value: '8'},
    { label: '9' , value: '9'},
    { label: '10' , value: '10'},
  
  ]

  const fuelType = [
    {label : 'Petrol' , value : 'petrol'},
    {label : 'Diesel ' , value : 'diesel '},
    {label : 'Hybrid' , value : 'hybrid'}
  ]

  const type =[
    {label :'Auto' , value : 'auto'},
    {label :'Manual' , value : 'manual'}
  ]

  return (
    <Box>
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


        </Grid>
      </Box>
    </Box>
  )
}
