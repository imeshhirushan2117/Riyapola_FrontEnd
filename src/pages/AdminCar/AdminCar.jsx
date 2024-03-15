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
import DateTime from '../../common/DateTime/DateTime';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function AdminCar() {

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


  const columns = [
    { field: 'brandName', headerName: 'Brand Name', width: 150 },
    { field: 'moduleName', headerName: 'Module Name', width: 150 },
    { field: 'passengers', headerName: 'Passengers', width: 150 },
    { field: 'fuelType', headerName: 'Fuel Type', width: 150 },
    { field: 'tmType', headerName: 'Transmission Type', width: 150 },
    { field: 'drPrice', headerName: 'Daily Rental Price', width: 150 },
    { field: 'extraKm', headerName: 'Extra Km', width: 150 },
    { field: 'traveled', headerName: 'Kilometers Traveled', width: 150 },
    { field: 'availability', headerName: 'Availability', width: 150 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton
            color='info'
            aria-label="edit"
            onClick={() => { openPopup(params.row) }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color='error'
            aria-label="delete"
            onClick={() => { deleted(params.row.id) }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];
  
  const rows = [
    { id : 1 , brandName :"Lanser" , moduleName:"CK2" , passengers:'5' , fuelType:'Petrol' ,tmType:"Manual" , drPrice:"1500" , extraKm:"30",traveled:"25000" , availability:"Not reserved"},
    
  ];


  return (
    <Box>
      
      <Box sx={{ padding: "10px", textAlign: "end" }}>
        <DateTime style={{ color: "#B9B9B9", fontSize: "17px" }} />
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box>
              <TextInput width={"100%"} label={"Brand Name"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <TextInput width={"100%"} label={"Module Name"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={numberOfSeats}
                sx={{ width: 360 }}
                renderInput={(params) => <TextField {...params} label="Number Of Passengers" />}
                onChange={(event, value) => console.log(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={fuelType}
                sx={{ width: 360 }}
                renderInput={(params) => <TextField {...params} label="Fuel Type" />}
                onChange={(event, value) => console.log(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={type}
                sx={{ width: 360 ,}}
                renderInput={(params) => <TextField {...params} label="Transmission Type" />}
                onChange={(event, value) => console.log(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <TextInput width={"100%"} label={"Daily Rental Price"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <TextInput width={"100%"} label={"Extra Km Tax"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <TextInput width={"100%"} label={"Kilometers Traveled"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>


          <Grid item xs={3}>
            <Box>
              <TextInput width={"100%"} label={"Availability"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
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

      <Box sx={{marginTop:"20px"}}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
      </Box>
    </Box>
  )
}
