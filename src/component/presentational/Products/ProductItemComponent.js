import React from 'react';
import { Link } from 'react-router-dom'
import { ItemDisplayCard, ItemDisplayImg, ItemDisplayBody, ItemDisplayName } from './ProductItemComponentStyles';

const ItemDisplay = ({item}) => {
    return (
        <ItemDisplayCard>
            <Link to={`/store/${item.name}`}>
                <ItemDisplayImg src={item.images[0].src} alt={item.name}/>
                <ItemDisplayBody>
                    <ItemDisplayName>{item.name}</ItemDisplayName>
                </ItemDisplayBody>
            </Link>
        </ItemDisplayCard>
    )
}

export default ItemDisplay;