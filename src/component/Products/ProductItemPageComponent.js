import React from 'react';
  
const ProductPage = ({item}) => {

    const imageMap = item.images.map((image) => {
        return (
            <img className="imagePreview" src={image.src}></img>
        )
    })

    const Cart = () => {
        return (
            <div className="">Add to cart button here</div>
        )
    }
    

    return (
        <div>
            <div>
                <img src={item.images[0].src}></img>
                <Cart />
            </div>
            <div className="previewContainer">{imageMap}</div>
        </div>
    )
}

export default ProductPage;