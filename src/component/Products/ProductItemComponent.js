import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { ItemDisplayCard, ItemDisplayImg, ItemDisplayBody } from './ProductItemStyles';

// const ItemDisplay = ({item}) => {
//     return (
//         <Card className="itemCards">
//             <Link to={`/store/${item.name}`}>
//                 <CardImg className="productCardImage" top width="20%" src={item.images[0].src} alt={item.name} />
//             </Link>
//             <CardBody className="productCardBody">
//                 <CardTitle className="productCardTitle">{item.name}</CardTitle>
//                 <CardText className="productCardPrice">${item.price}</CardText>
//                 <Button className="productCardAddCart">+</Button>
//             </CardBody>
//         </Card>
//         )
// }

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