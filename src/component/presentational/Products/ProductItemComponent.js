import React from 'react';
import { Link } from 'react-router-dom'
import { spacesToHashDelimiter } from '../../../shared/stringSpaceToHash';
import { StyledItemDisplayCard, StyledItemDisplayImg, StyledItemDisplayBody, StyledItemDisplayName } from './ProductItemComponentStyles';

const ItemDisplay = ({item}) => {
    // Replaces spaces with -'s in URL
    let delimitedUrl = spacesToHashDelimiter(item.name);

    return (
        <StyledItemDisplayCard>
            <Link to={`/store/${delimitedUrl}`}>
                <StyledItemDisplayImg src={item.images[0].src} alt={item.name}/>
                <StyledItemDisplayBody>
                    <StyledItemDisplayName>{item.name}</StyledItemDisplayName>
                </StyledItemDisplayBody>
            </Link>
        </StyledItemDisplayCard>
    )
}

export default ItemDisplay;