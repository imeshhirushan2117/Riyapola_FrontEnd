import React, { isValidElement, useState } from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextInput from '../../common/TextInput/TextInput';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '../../common/Button/Button'
import { DataGrid } from '@mui/x-data-grid';

export default function AdminAction() {


  const columns = [

    { field: 'firstName', headerName: 'First name', width: 200 },
    { field: 'lastName', headerName: 'Last name', width: 200 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'role', headerName: 'Role', width:150 },
    { field: 'action', headerName: 'Action', width:300 }

  ];

  const rows = [
    { id: 1,  firstName:'Imesh', lastName: 'Hirushan',email : "imeshhirushan@gmail.com" , role:"Admin" , action:""}  
  ];


  return (
    <Box>
      <Box>
        <Grid container spacing={2}>

          <Grid item xs={4}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"First Name"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Secand Name"} type={'text'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Email"} type={'email'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ padding: "10px" }}>
              <TextInput width={"100%"} label={"Password"} type={'password'} onChange={(val) => console.log(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ padding: "10px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[{ label: "Admin", value: "Admin" }]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Role" />}
                onChange={(event, value) => console.log(value.value)}
              />
            </Box>
          </Grid>

        </Grid>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "10px", flexWrap: "wrap" }}>
        <Box>
          <Button name={"Clear"} width={"200px"} background={'#f39c12'} hoverColor={"#f1c40f"} />
        </Box>

        <Box>
          <Button name={"Save"} width={"200px"} background={'#16a085'} hoverColor={"#1abc9c"} />
        </Box>
      </Box>


      <Box sx={{marginTop:"30px"}}>
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
