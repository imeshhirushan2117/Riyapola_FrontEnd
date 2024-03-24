import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


export default function Temp() {


    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    label="With normal TextField"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                    }}
                />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                </FormControl>
            </div>
        </Box>
    );
}
