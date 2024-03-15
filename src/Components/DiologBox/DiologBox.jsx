import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

export default function DiologBox({ handleClose, open, children }) {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            {children}

            <Box sx={{ padding: '20px' }}>
                <h1>Edit Data</h1>
            </Box>
        </Dialog>
    )
}
