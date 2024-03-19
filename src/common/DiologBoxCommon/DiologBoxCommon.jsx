import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';


export default function DiologBoxCommon({ clickOpen, clickClose, open}) {


    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={clickClose}
            >
            </Dialog>
        </React.Fragment>
    )
}
