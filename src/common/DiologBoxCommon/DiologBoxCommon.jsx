import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';


export default function DiologBoxCommon({ clickClose, open, children }) {


    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={clickClose}
            >
                {children}
            </Dialog>
        </React.Fragment>
    )
}
