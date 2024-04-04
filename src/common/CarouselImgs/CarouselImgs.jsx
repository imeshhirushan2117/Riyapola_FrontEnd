import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

export default function CarouselImgs({ items , sx}) {

    return (
        <Carousel sx={{maxWidth:'100%' , maxHeight:'100%'}}>
            {items.map((item, i) => (
                <Paper key={i}>
                    <Box>
                        <img style={{ maxWidth:'100%', borderRadius: '10px' }} src={item.img} alt="" />
                    </Box>
                </Paper>
            ))}
        </Carousel>
    );
}
