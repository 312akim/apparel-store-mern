import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const ItemDisplay = ({item}) => {
    console.log(item.name)
    return (
        <Card>
            <CardImg top width="25%" src={item.images[0]} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
            </CardBody>
        </Card>
        )
}

export default ItemDisplay;