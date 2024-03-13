import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import logIn_img from '../../assets/img/logIn.jpg'
import SecandFooter from '../../common/SecandFooter/SecandFooter'
import TextInput from '../../common/TextInput/TextInput'
import Button from '../../common/Button/Button'
import instance from '../../services/Axios'
import Swal from 'sweetalert2'

export default function LogInBackgroundImg() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const loginAdmin = () => {
        instance.post('/adminLogin/login', {
            userName: userName,
            password: password
        })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem('stmToken', response.data.token);
                window.location.reload()
                alert("success", "login Success!")
            })
            .catch(function (error) {
                console.log(error);
                alert("error", "Login Unsuccess!")
            });
    }

    const alert = (icon, title) => {
        Swal.fire({
            position: "top-end",
            icon: icon,
            title: title,
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Box sx={{
                    position: "absolute",
                    zIndex: "100",
                    background: "white",
                    opacity: "70%",
                    width: "50%",
                    borderRadius: "10px",
                    marginTop: "100px",
                    padding: "20px"
                }}>
                    <Box>
                        <Typography sx={{ fontWeight: "bold", textAlign: "center", paddingBottom: "30px" }} variant="h4" component="h4">
                            Admin <span style={{ color: "#A50010" }}>Login</span>
                        </Typography>
                    </Box>

                    <Box>
                        <TextInput width={"100%"} label={"Email Or UserName"} type={'email'} value={userName} onChange={(val) => setUserName(val.target.value)} />
                        <TextInput width={"100%"} label={"Password"} value={password} type={'password'} onChange={(val) => setPassword(val.target.value)} />
                    </Box>

                    <Box sx={{ padding: "20px" }}>
                        <Button name={"Admin LogIn"} width={"100%"} background={'#A50010'} hoverColor={"#800a1e"} onClick={loginAdmin} />
                    </Box>
                </Box>

            </Box>

            <Box sx={{ background: "black" }}>
                <img style={{ width: "100%", opacity: "50%" }} src={logIn_img} alt="" />
            </Box>
            <SecandFooter />

        </Box>
    )
}
