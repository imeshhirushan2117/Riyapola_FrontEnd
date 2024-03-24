import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid';
import TextInput from '../../common/TextInput/TextInput';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MyButton from '../../common/Button/Button'
import instance from '../../services/Axios'
import Swal from 'sweetalert2';
import DiologBoxCommon from '../../common/DiologBoxCommon/DiologBoxCommon';
import { styled } from '@mui/material/styles';
export default function UpdateCarModule({ open, updateData, canselBtn }) {

    const [brandName, setBrandName] = useState(updateData?.brandName)
    const [moduleName, setModuleName] = useState(updateData?.moduleName)
    const [passenger, setPassenger] = useState(updateData?.passengers)
    const [fulType, setFulType] = useState(updateData?.fuelType)
    const [tmType, setTmType] = useState(updateData?.tmType)
    const [drPrice, setDrPrice] = useState(updateData?.drPrice)
    const [dlimet, setDlimet] = useState(updateData?.dlimet)
    const [extraKm, setExtraKm] = useState(updateData?.extraKm)
    const [status, setStatus] = useState(updateData?.status)


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


    const updateBtn = () => {
        instance.put('/vehicle/updateVehicle/' + updateData.id, {
            brandName: brandName ? brandName.toUpperCase() : null,
            moduleName: moduleName ? moduleName.toUpperCase() : null,
            passengers: passenger,
            fuelType: fulType,
            transmissionType: tmType,
            dailyRentalPrice: drPrice,
            dailyLimitKilometers: dlimet,
            extraKm: extraKm,
            status: status
        })
            .then((response) => {
                console.log(response.data);
                Swal.fire({
                    title: "Updated!",
                    text: "Your file has been updated.",
                    icon: "success"
                });
                canselBtn()
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: "Error!",
                    text: "Your file has been deleted Faild.",
                    icon: "error"
                });
            });
    }

    return (
        <>
            <DiologBoxCommon open={open} clickClose={canselBtn} >
                <Box sx={{ padding: "20px", width: "500px" }}>
                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <Box>
                                <TextInput width={"100%"} label={"Brand Name"} type={'text'} value={brandName} onChange={(val) => setBrandName(val.target.value)} />
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box>
                                <TextInput width={"100%"} label={"Module Name"} type={'text'} value={moduleName} onChange={(val) => setModuleName(val.target.value)} />
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
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

                        <Grid item xs={6}>
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


                        <Grid item xs={6}>
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


                        <Grid item xs={6}>
                            <Box>
                                <TextInput width={"100%"} label={"Daily Rental Price"} value={drPrice} type={'text'} onChange={(val) => setDrPrice(val.target.value)} />
                            </Box>
                        </Grid>


                        <Grid item xs={6}>
                            <Box>
                                <TextInput width={"100%"} label={"Limit Kilometers"} value={dlimet} type={'text'} onChange={(val) => setDlimet(val.target.value)} />
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box>
                                <TextInput width={"100%"} label={"Extra Km Tax"} type={'text'} value={extraKm} onChange={(val) => setExtraKm(val.target.value)} />
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
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


                        <Grid item xs={6}>
                            <Box>
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    sx={{width:'100%'}}
                                >
                                    Upload Images
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </Box>
                        </Grid>


                        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px", width: "100%", padding: "20px" }}>
                            <Box>
                                <MyButton name={"Cansel"} width={"200px"} background={'#A50010'} hoverColor={"#800A1E"} onClick={canselBtn} />
                            </Box>

                            <Box>
                                <MyButton name={"Update"} width={"200px"} background={'#227093'} hoverColor={"#34ace0"} onClick={updateBtn} />
                            </Box>
                        </Box>

                    </Grid>
                </Box>

            </DiologBoxCommon>



        </>
    )
}
