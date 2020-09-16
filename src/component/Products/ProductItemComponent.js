import React from 'react';
import { Link } from 'react-router-dom'
import { ItemDisplayCard, ItemDisplayImg, ItemDisplayBody } from './ProductItemStyles';

const ItemDisplay = ({item}) => {
    return (
        <ItemDisplayCard>
            <Link to={`/store/${item.name}`}>
                <ItemDisplayImg src={item.images[0].src} alt={item.name}/>
            </Link>
            <ItemDisplayBody>
                <div>Price</div>
                <div>Cart Button</div>
            </ItemDisplayBody>
        </ItemDisplayCard>
        )
}

export default ItemDisplay;