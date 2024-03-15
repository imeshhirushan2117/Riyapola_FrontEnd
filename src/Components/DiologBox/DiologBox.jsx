import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import TextInput from '../../common/TextInput/TextInput';
import Typography from '@mui/material/Typography';
import Button from '../../common/Button/Button'

export default function DiologBox({ handleClose, open, children }) {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const update = () => {
        console.log("update")
    }

    const cancel = () => {
        console.log("cancle")
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            {children}

            <Box>
                <Box sx={{ padding: '20px' }}>
                    <Typography sx={{ fontWeight: "bold", textAlign: "center" }} variant="h5" component="h5">
                        Update <span style={{ color: "#A50010" }}>Admin</span>
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ margin: "10px" }}>
                        <TextInput width={"500px"} label={"First Name"} type={'text'} onChange={(val) => console.log(val.target.value)} />
                    </Box>

                    <Box sx={{ margin: "10px" }}>
                        <TextInput width={"500px"} label={"Last Name"} type={'text'} onChange={(val) => console.log(val.target.value)} />
                    </Box>

                    <Box sx={{ margin: "10px" }}>
                        <TextInput width={"500px"} label={"Email"} type={'email'} onChange={(val) => console.log(val.target.value)} />
                    </Box>

                    <Box sx={{ margin: "10px" }}>
                        <TextInput width={"500px"} label={"Password"} type={'password'} onChange={(val) => console.log(val.target.value)} />
                    </Box>
                </Box>

                <Box sx={{display:"flex" , flexWrap:'wrap' ,padding:"10px" , justifyContent:"space-between"}}>
                    <Box sx={{ margin: "10px" }}>
                        <Button name={"Update"} width={"225px"} background={'#27ae60'} hoverColor={"#2ecc71"} onClick={update} />
                    </Box>

                    <Box sx={{ margin: "10px" }}>
                        <Button name={"Cancle"} width={"225px"} background={'#c0392b'} hoverColor={"#e74c3c"} onClick={cancel} />
                    </Box>
                </Box>


            </Box>
        </Dialog>
    )
}
