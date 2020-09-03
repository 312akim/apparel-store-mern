import React from 'react';
import { StyledPreviewImg, PreviewContainerDiv, MainProductImg } from './ProductPageStyles';
  
const ProductPage = ({item}) => {

    const displayChanger = () => {

    }
    
    let displayedImage = item.images[0].src;

    const imageMap = item.images.map((image) => {
        return (
            <StyledPreviewImg onClick={displayChanger()} src={image.src}></StyledPreviewImg>
        )
    })

    const Cart = () => {
        return (
            <div>
                <p>Price Here</p>
                <div>Add to cart button here</div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h2>{item.name}</h2>
                <MainProductImg src={item.images[0].src}></MainProductImg>
                <Cart />
            </div>
            <PreviewContainerDiv>{imageMap}</PreviewContainerDiv>
        </div>
    )
}

export default ProductPage;