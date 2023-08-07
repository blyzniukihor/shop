"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from "@mui/material";

import { ArrowRight, ArrowLeft } from "@mui/icons-material"
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types";

import Slide from "@/components/Slide";
import React from "react";

export default function Home() {
  
  const getData = () => {
    return fetch('https://fakestoreapi.com/products')
      .then(response => response.json());
  };
  
  const { data, isLoading, error } = useQuery<Product[]>({ queryKey: ['products'], queryFn: getData })
  
  const CustomPrevArrow = (props) => {
    return (
      <ArrowLeft
        sx={{ color: '#fff', position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 1, cursor: 'pointer' }}
        fontSize="large"
        onClick={props.onClick}
      />
    )
  };
  
  const CustomNextArrow = (props) => {
    return (
      <ArrowRight
        sx={{ color: '#fff', position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', zIndex: 1, cursor: 'pointer' }}
        fontSize="large"
        onClick={props.onClick}
      />
    );
  };
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  if (isLoading) return <div>...loading</div>
  if (error) return <div> something went wrong </div>
  
  return (
    <main>
      <Box sx={{ margin: '0 auto' }}>
        <Slider {...settings}>
          { !isLoading && !error && data?.map((product) => {
            return (
              <Slide
                key={product.id}
                product={product}
              />
            )
          }) }
        </Slider>
      </Box>
      
    </main>
  )
}


