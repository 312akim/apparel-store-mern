import React, { Component } from 'react';

const samepleCartData = [
    { name: 'Test 1', description: 'Test Product 1', price: 20, id: 1},
    { name: 'Test 2', description: 'Test Product 2', price: 10, id: 2},
    { name: 'Test 3', description: 'Test Product 3', price: 30, id: 3}
];

const CartItem = ({item}) => {
    console.log(item);
    console.log("ITEM NAME: ", item.name);
    return (
        <>
            <div>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.price}
                </div>
            </div>
            <hr />
        </>
        )
}

export default class Cart extends Component {
    render () {
        return (
            <div>
                <h2>
                    Your Cart!
                </h2>
                <hr />
                <div>
                    {samepleCartData.map(item => {
                        return(
                            <CartItem item={item} />
                        )
                    })}
                </div>
            </div>
        )
    }
}