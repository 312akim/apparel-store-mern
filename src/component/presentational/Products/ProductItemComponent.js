import React from 'react';
import { Link } from 'react-router-dom'
import { ItemDisplayCard, ItemDisplayImg, ItemDisplayBody, ItemDisplayPrice, ItemDisplayCartIcon } from './ProductItemStyles';

const ItemDisplay = ({item}) => {
    return (
        <ItemDisplayCard>
            <Link to={`/store/${item.name}`}>
                <ItemDisplayImg src={item.images[0].src} alt={item.name}/>
            </Link>
            <ItemDisplayBody>
                <ItemDisplayPrice>Price</ItemDisplayPrice>
                <ItemDisplayCartIcon>Cart Button</ItemDisplayCartIcon>
            </ItemDisplayBody>
        </ItemDisplayCard>
        )
}

export default ItemDisplay;