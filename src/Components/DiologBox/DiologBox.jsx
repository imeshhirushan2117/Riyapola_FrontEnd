import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import TextInput from '../../common/TextInput/TextInput';
import Typography from '@mui/material/Typography';
import Button from '../../common/Button/Button'
import { useState } from 'react';
import instance from '../../services/Axios'

export default function DiologBox({ handleClose, open , closeBtn , updateData }) {

     console.log(updateData);
    
    const [firstName, setFirstname] = useState(updateData?.firstName)
    const [lastName, setLastname] = useState(updateData?.lastName)
    const [email, setEmail] = useState(updateData?.email)
    const [password, setPassword] = useState(updateData?.password)

    const update = () => {
        
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <Box>
                <Box sx={{ padding: '20px' }}>
                    <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant="h5" component="h5">
                        Update <span style={{ color: "#A50010" }}>Admin</span>
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ margin: "10px" }}>
                        <TextInput width={"500px"} label={"First Name"} type={'text'} value={firstName} onChange={(val) => setFirstname(val.target.value)} />
                    </Box>

                    <Box sx={{ margin: "10px" }}>
                        <TextInput width={"500px"} label={"Last Name"} type={'text'} value={lastName} onChange={(val) => setLastname(val.target.value)} />
                    </Box>

                    <Box sx={{ margin: "10px" }}>
                        <TextInput width={"500px"} label={"Email"} type={'email'} value={email} onChange={(val) => setEmail(val.target.value)} />
                    </Box>

                    <Box sx={{ margin: "10px" }}>
                        <TextInput width={"500px"} label={"Password"} type={'password'} value={password} onChange={(val) => setPassword(val.target.value)} />
                    </Box>
                </Box>

                <Box sx={{display:"flex" , flexWrap:'wrap' ,padding:"10px" , justifyContent:"space-between"}}>
                    <Box sx={{ margin: "10px" }}>
                        <Button name={"Update"} width={"225px"} background={'#27ae60'} hoverColor={"#2ecc71"} onClick={update} />
                    </Box>

                    <Box sx={{ margin: "10px" }}>
                        <Button name={"Cancle"} width={"225px"} background={'#c0392b'} hoverColor={"#e74c3c"} onClick={closeBtn} />
                    </Box>
                </Box>


            </Box>
        </Dialog>
    )
}
