import React from 'react'
import { Box, Typography } from '@mui/material'
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
import MyButton from '../../common/Button/Button'
import instance from '../../services/Axios'
import Swal from 'sweetalert2';
import DiologBoxCommon from '../../common/DiologBoxCommon/DiologBoxCommon';
import UpdateCarModule from '../../Components/UpdateCarModule/UpdateCarModule';

export default function AdminCar() {

  const [brandName, setBrandName] = useState("")
  const [moduleName, setModuleName] = useState("")
  const [passenger, setPassenger] = useState("")
  const [fulType, setFulType] = useState("")
  const [tmType, setTmType] = useState("")
  const [drPrice, setDrPrice] = useState("")
  const [dlimet, setDlimet] = useState("")
  const [extraKm, setExtraKm] = useState("")
  const [status, setStatus] = useState("")
  const [data, setData] = useState([])
  const [openPopup , setOpenPopup] = useState(false)
  const [updateData, setUpdateData] = useState()

  useEffect(() => {
    getAllCars(setData)
  }, [])

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
    { label: 'Petrol', value: 'Petrol' },
    { label: 'Diesel ', value: 'Diesel ' },
    { label: 'Hybrid', value: 'Hybrid' }
  ]

  const type = [
    { label: 'Automic', value: 'Automic' },
    { label: 'Manual', value: 'Manual' }
  ]

  const sts = [
    { label: 'Available', value: 'Available' },
    { label: 'Not Available', value: 'Not Available' }
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
    { field: 'dlimet', headerName: 'Daily Limit Kilometers', width: 170 },
    { field: 'extraKm', headerName: 'Extra Km', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton
            color='info'
            aria-label="edit"
            onClick={() => { clickOpen(params.row) 
          
            }}
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

  const save = () => {

    if (brandName && moduleName && passenger && fulType && tmType && drPrice && dlimet && extraKm && status != null) {
      instance.post('/vehicle/saveVehicle', {
        brandName: brandName ? brandName.toUpperCase() : null,
        moduleName: moduleName ? moduleName.toUpperCase() : null,
        passengers: passenger,
        fuelType: fulType,
        transmissionType: tmType,
        dailyRentalPrice: drPrice,
        dailyLimitKilometers: dlimet,
        extraKm: extraKm,
        status: status,
      })
        .then(function (response) {
          console.log(response);
          getAllCars()
          alert("success", "Vehicle Save Success")
          clear()
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      Swal.fire({
        position: "top-center",
        icon: "info",
        title: "Enter Data",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  const deleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#A50010",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        instance.delete('/vehicle/deletedVehicle/' + id, {
        })
          .then(response => {
            console.log(response);
            getAllCars()
          })
          .catch(error => {
            console.log(error.config);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


  const alert = (icon, title) => {
    Swal.fire({
      position: "top-center",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  const clear = () => {
    setBrandName("")
    setModuleName("")
    setPassenger("")
    setFulType("")
    setTmType("")
    setDrPrice("")
    setDlimet("")
    setExtraKm("")
    setTraveled("")
    setStatus("")
  }


  const getAllCars = () => {
    instance.get('/vehicle/getAllVehicles/vehicles')
      .then(function (response) {
        const array = response.data.map((val) => ({
          id: val.vehicleId,
          brandName: val.brandName,
          moduleName: val.moduleName,
          passengers: val.passengers,
          fuelType: val.fuelType,
          tmType: val.transmissionType,
          drPrice: "Rs." + val.dailyRentalPrice + ".00",
          dlimet: val.dailyLimitKilometers + " Km",
          extraKm: "Rs." + val.extraKm + ".00",
          status: val.status

        }))

        console.log(array);
        setData(array)
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  const clickOpen = (val) => {

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to updated this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a085",
      cancelButtonColor: "#A50010",
      confirmButtonText: "Yes, update it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setOpenPopup(true)
        setUpdateData(val)
      }
    });
  }

  const canselBtn = () => {
    setOpenPopup(false)
    getAllCars()
  }

  return (
    <Box>

      <Box sx={{ padding: "10px", textAlign: "end" }}>
        <DateTime style={{ color: "#B9B9B9", fontSize: "17px" }} />
      </Box>

      <Box sx={{ textAlign: "center", fontSize: "30px", marginBottom: "40px", fontWeight: 'bold' }}>
        Manage<samp style={{ color: "#A50010" }}> Vehicle</samp>
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box>
              <TextInput width={"100%"} label={"Brand Name"} type={'text'} value={brandName} onChange={(val) => setBrandName(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box>
              <TextInput width={"100%"} label={"Module Name"} type={'text'} value={moduleName} onChange={(val) => setModuleName(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={numberOfSeats}
                value={passenger}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Number Of Passengers" />}
                onChange={(event, value) => setPassenger(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={fuelType}
                value={fulType}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Fuel Type" />}
                onChange={(event, value) => setFulType(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={type}
                sx={{ width: '100%' }}
                value={tmType}
                renderInput={(params) => <TextField {...params} label="Transmission Type" />}
                onChange={(event, value) => setTmType(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box>
              <TextInput width={"100%"} label={"Daily Rental Price"} value={drPrice} type={'text'} onChange={(val) => setDrPrice(val.target.value)} />
            </Box>
          </Grid>


          <Grid item xs={2}>
            <Box>
              <TextInput width={"100%"} label={"Limit Kilometers"} value={dlimet} type={'text'} onChange={(val) => setDlimet(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box>
              <TextInput width={"100%"} label={"Extra Km Tax"} type={'text'} value={extraKm} onChange={(val) => setExtraKm(val.target.value)} />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={sts}
                sx={{ width: '100%' }}
                value={status}
                renderInput={(params) => <TextField {...params} label="Availability" />}
                onChange={(event, value) => setStatus(value.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={2}>
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


        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "10px", flexWrap: "wrap" }}>
          <Box>
            <MyButton name={"Clear"} width={"200px"} background={'#f39c12'} hoverColor={"#f1c40f"} onClick={clear} />
          </Box>

          <Box>
            <MyButton name={"Save"} width={"200px"} background={'#16a085'} hoverColor={"#1abc9c"} onClick={save} />
          </Box>
        </Box>

      </Box>

      <Box sx={{ marginTop: "20px" }}>
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
            checkboxSelection
          />
        </div>
      </Box>

      {openPopup &&
       <UpdateCarModule
       open={openPopup}
       close={() => setOpenPopup(false)}
       updateData={updateData}
       canselBtn={canselBtn}
       />    
      }
     
    </Box>
  )
}
