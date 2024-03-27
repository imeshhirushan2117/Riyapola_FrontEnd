import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material'
import DateTime from '../../common/DateTime/DateTime'
import instance from '../../services/Axios'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Swal from 'sweetalert2';
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
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div>
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

        instance.delete('/deletedByAdmin/customer/' + id, {
        })
          .then(response => {
            console.log(response);
            getaAllCustomers()
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

  return (
    <Box>

      <Box sx={{ padding: "10px", textAlign: "end" }}>
        <DateTime style={{ color: "black", fontSize: "17px", fontWeight: 'bold' }} />
      </Box>

      <Box sx={{ padding: '10px' }}>
        <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant="h5" component="h5">
          All <span style={{ color: "#A50010" }}>Customers</span>
        </Typography>
      </Box>

      <Box>
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

    </Box>
  )
}
