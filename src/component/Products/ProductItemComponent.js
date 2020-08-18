import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const ItemDisplay = ({item}) => {
    return (
        <Card className="itemCards">
            <Link to={`/store/${item.name}`}>
                <CardImg top width="20%" src={item.images[0]} alt={item.name} />
            </Link>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>${item.price}</CardText>
                <Button>+</Button>
            </CardBody>
        </Card>
        )
}

export default ItemDisplay;