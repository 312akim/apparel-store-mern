import React, { Component } from 'react';

const samepleCartData = [
    { name: 'Test 1', description: 'Test Product 1', price: 20, id: 1},
    { name: 'Test 2', description: 'Test Product 2', price: 10, id: 2},
    { name: 'Test 3', description: 'Test Product 3', price: 30, id: 3}
];

const cartItem  = (item) => {
    <div>
        <div>
            {item.name}
        </div>
        <div>
            {item.price}
        </div>
    </div>
}

export default class Cart extends Component {
    render () {
        return (
            <div>
                <h2>
                    Your Cart!
                </h2>
                <div>
                    {samepleCartData.map(item => {
                        <cartItem item={item} />
                    })}
                </div>
            </div>
        )
    }
}