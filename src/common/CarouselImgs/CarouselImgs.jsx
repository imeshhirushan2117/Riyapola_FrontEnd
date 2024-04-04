import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper , Box } from '@mui/material';
import img from '../../assets/img/carViewImg1.jpg'
import img2 from '../../assets/img/carViewImg2.jpg'

export default function CarouselImgs({ items }) {
    var items = [
        {
            img: img
        },

        {
            img: img2
        },
        
    ];

    return (
        <Carousel sx={{ width: '50%' }}>
            {items.map((item, i) => (
                <Paper key={i}>
                    <Box sx={{ width: '100%' }}>
                        <img style={{ width: '100%', borderRadius: '10px' }} src={item.img} alt="" />
                    </Box>
                </Paper>
            ))}
        </Carousel>
    );
}
