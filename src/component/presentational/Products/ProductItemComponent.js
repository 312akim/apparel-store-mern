import React from 'react';
import { Link } from 'react-router-dom'
import { spacesToHashDelimiter } from '../../../shared/stringSpaceToHash';
import { ItemDisplayCard, ItemDisplayImg, ItemDisplayBody, ItemDisplayName } from './ProductItemComponentStyles';

const ItemDisplay = ({item}) => {
    // Replaces spaces with -'s in URL
    let delimitedUrl = spacesToHashDelimiter(item.name);

    return (
        <ItemDisplayCard>
            <Link to={`/store/${delimitedUrl}`}>
                <ItemDisplayImg src={item.images[0].src} alt={item.name}/>
                <ItemDisplayBody>
                    <ItemDisplayName>{item.name}</ItemDisplayName>
                </ItemDisplayBody>
            </Link>
        </ItemDisplayCard>
    )
}

export default ItemDisplay;