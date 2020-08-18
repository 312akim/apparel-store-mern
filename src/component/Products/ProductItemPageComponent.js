import React from 'react';
import {
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  

  //Need to add image carousel
const ProductPage = ({item}) => {
    
    return (
        <div>
            This is {item.name} Page!
        </div>
    )
}

export default ProductPage;