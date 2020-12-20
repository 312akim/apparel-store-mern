import React from 'react';
import { FeaturedContainer } from '../Home/HomeComponentStyles'
import ProductItem from '../Products/ProductItemComponent'


const StorePage = ({products}) => {
    const featuredProducts = products.map((item) => {
        if (item.featured === true) {
            return (
                    <ProductItem className="itemColumn" item={item} key={item.id}/>
            )
        }
    })

    const tshirtCategory = products.map((item) => {
        if (item.category.includes("shirt")) {
            return (
                    <ProductItem item={item} key={item.id}/>
            )
        }
    })

    return (
        <div>
            <div>This is the Main store Page!!</div>
            <div>
                <h3>Featured Products</h3>
                <FeaturedContainer>
                    {featuredProducts}
                </FeaturedContainer>
            </div>
            <h3>T Shirts</h3>
            {tshirtCategory}
        </div>
    )
}

export default StorePage;