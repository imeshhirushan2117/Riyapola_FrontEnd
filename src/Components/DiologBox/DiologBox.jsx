import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import TextInput from '../../common/TextInput/TextInput';
import Typography from '@mui/material/Typography';
import Button from '../../common/Button/Button'
import { useState } from 'react';
import instance from '../../services/Axios'
import IconButton from '@mui/material/IconButton';
import DrawIcon from '@mui/icons-material/Draw';
import Swal from 'sweetalert2';

export default function DiologBox({ handleClose, open, closeBtn, updateData }) {

    console.log(updateData);

    const [firstName, setFirstname] = useState(updateData?.firstName)
    const [lastName, setLastname] = useState(updateData?.lastName)
    const [email, setEmail] = useState(updateData?.email)
    const [password, setPassword] = useState(updateData?.password)
    const [diseble, setDiseble] = useState(true)

    const update = () => {
        if (firstName && lastName && email != null) {
            instance.put('/updateAdmin/' + updateData.id, {
                firstName: firstName,
                lastName: lastName,
                userName: email,
                password: password,
                role: "Admin",
            })
                .then((response) => {
                    console.log(response.data);
                    Swal.fire({
                        title: "Updated!",
                        text: "Your file has been updated.",
                        icon: "success"
                    });
                    closeBtn()
                    
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            Swal.fire({
                title: "Error!",
                text: "Your file has been deleted Faild.",
                icon: "error"
            });
        }
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
                        <TextInput isDisable={diseble} width={"500px"} label={"Password"} type={'password'} value={password} onChange={(val) => setPassword(val.target.value)} />
                        <Box sx={{ textAlign: "end", display: "flex" }}>
                            <p>updatePassword</p>
                            <IconButton aria-label="delete" onClick={() => {
                                if (diseble == true) {
                                    setDiseble(false)
                                } else {
                                    setDiseble(true)
                                }
                            }}>
                                <DrawIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexWrap: 'wrap', padding: "10px", justifyContent: "space-between" }}>
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
