import React, { isValidElement, useState ,useEffect} from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import TextInput from '../../common/TextInput/TextInput';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '../../common/Button/Button'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import instance from '../../services/Axios';

export default function AdminAction() {


  const [data, setData] = useState([])

  
  useEffect(() => {
    getAllAdmin(setData)
  }, []);

  const columns = [

    { field: 'firstName', headerName: 'First name', width: 250 },
    { field: 'lastName', headerName: 'Last name', width: 250 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'role', headerName: 'Role', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton
            color='info'
            aria-label="edit"
            onClick={() => { editPopup(params.row) }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color='error'
            aria-label="delete"
            onClick={() => { deleted(params.row) }}
          >
            <DeleteIcon />
          </IconButton>

        </div>
      ),
    },
  ];

  const getAllAdmin = () => {
    instance.get('/getAllAdmin/getAll')
    .then(function (response) {
      console.log(response);
      const array = response.data.map(val => ({
        firstName: val.firstName,
        lastName: val.lastName,
        email: val.userName,
        role: val.role
      }));
      setData(array);
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
  }

  const clear = () => {
    console.log("clear");
  }

  const save = () => {
    console.log("save");
  }

  const editPopup = () => {
    console.log("edit");
  }

  const deleted = () => {
    console.log("deleted");
  }

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
          <Button name={"Clear"} width={"200px"} background={'#f39c12'} hoverColor={"#f1c40f"} onClick={clear} />
        </Box>

        <Box>
          <Button name={"Save"} width={"200px"} background={'#16a085'} hoverColor={"#1abc9c"} onClick={save} />
        </Box>
      </Box>


      <Box sx={{ marginTop: "30px" }}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20]}
          />
        </div>
      </Box>
    </Box>
  )
}
