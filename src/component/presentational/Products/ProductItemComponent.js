import React from 'react';
import { Link } from 'react-router-dom'
import { ItemDisplayCard, ItemDisplayImg, ItemDisplayBody, ItemDisplayPrice, ItemDisplayCartIcon } from './ProductItemComponentStyles';

const ItemDisplay = ({item}) => {
    return (
        <ItemDisplayCard>
            <Link to={`/store/${item.name}`}>
                <ItemDisplayImg src={item.images[0].src} alt={item.name}/>
            </Link>
            <ItemDisplayBody>
                <ItemDisplayPrice>${item.price}</ItemDisplayPrice>
                <ItemDisplayCartIcon>Cart Button</ItemDisplayCartIcon>
            </ItemDisplayBody>
        </ItemDisplayCard>
        )
}

export default ItemDisplay;