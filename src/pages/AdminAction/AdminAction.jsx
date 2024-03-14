import React, { isValidElement, useState } from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextInput from '../../common/TextInput/TextInput';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '../../common/Button/Button'

export default function AdminAction() {

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

      <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"end" , gap:"10px" ,flexWrap:"wrap"}}>
        <Box>
          <Button name={"Clear"} width={"200px"} background={'#f39c12'} hoverColor={"#f1c40f"} />
        </Box>

        <Box>
          <Button name={"Save"} width={"200px"} background={'#16a085'} hoverColor={"#1abc9c"} />
        </Box>

      </Box>
    </Box>
  )
}
