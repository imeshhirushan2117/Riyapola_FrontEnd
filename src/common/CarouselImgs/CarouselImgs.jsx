import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper , Box } from '@mui/material';

export default function CarouselImgs({ items }) {

    return (
        <Carousel>
            {items.map((item, i) => (
                <Paper key={i}>
                    <Box>
                        <img style={{ width: '100%', borderRadius: '10px' }} src={item.img} alt="" />
                    </Box>
                </Paper>
            ))}
        </Carousel>
    );
}
