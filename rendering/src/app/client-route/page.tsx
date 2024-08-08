"use client";

import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';

// import { serverSideFunction } from '../utils/server-utils';

export default function ClientRoutePage() {
  // console.log('Client side rendered');

  // const result = serverSideFunction(); //* not available because server-only is used in the server-utils

  // const settings = {
  //   dots: true,
  // };


  const result = clientSideFunction();

  const theme = useTheme();
  return (
    <>
      <h1>Client Route Page {result}</h1>
      {/* <p>{result}</p> */}

      {/* <div className='image-slider-container'>
        <Slider {...settings}>
          <div>
            <img src='https://picsum.photos/400/200' />
          </div>
          <div>
            <img src='https://picsum.photos/400/200' />
          </div>
          <div>
            <img src='https://picsum.photos/400/200' />
          </div>
          <div>
            <img src='https://picsum.photos/400/200' />
          </div>
        </Slider>
      </div> */}

      {/* <h1
        style={{
          color: theme.colors.secondary,
        }}
      >
        Client Route Page
      </h1> */}
    </>
  );
}
