import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material'
import DateTime from '../../common/DateTime/DateTime'
import instance from '../../services/Axios'

export default function AllCustomers() {

    const [data, setData] = useState([])

    useEffect(() => {
        getaAllCustomers(setData)
    }, []);

    const columns = [
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'contact', headerName: 'Contact', width: 150 },
        { field: 'nic', headerName: 'Nic', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'dateTime', headerName: 'Date & Time', width: 200 },
    ]

    const getaAllCustomers = () => {
        instance.get('/getAllCustomers/customers')
            .then(function (response) {
                console.log(response.data)
                const array = response.data.map((val) => ({
                    id: val.customerId,
                    firstName: val.firstName,
                    lastName: val.lastName,
                    email: val.email,
                    contact: val.contact,
                    nic: val.nic,
                    address: val.address,
                    dateTime: val.dateTime

                }));
                console.log("login data", array);
                setData(array)

            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    }

    return (
        <Box>

            <Box sx={{ padding: '10px' }}>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant="h5" component="h5">
                    All <span style={{ color: "#A50010" }}>Customers</span>
                </Typography>
            </Box>

            <Box sx={{ padding: "10px", textAlign: "end" }}>
                <DateTime style={{ color: "#B9B9B9", fontSize: "17px" }} />
            </Box>

            <Box>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
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
