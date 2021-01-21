import React from 'react';
import { FeaturedContainer } from '../Home/HomeComponentStyles'
import { FeaturedHeader } from './StorePageStyles'
import ProductItem from '../Products/ProductItemComponent'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const StorePage = ({products}) => {
    const featuredProducts = products.products.map((item) => {
        if (item.featured === true) {
            return (
                    <ProductItem className="itemColumn" item={item} key={item.id}/>
            )
        }
    })

    const tshirtCategory = products.products.map((item) => {
        if (item.category.includes("shirt")) {
            return (
                    <ProductItem item={item} key={item.id}/>
            )
        }
    })

    const BreadcrumbComponent = () => {
        return (
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Store</BreadcrumbItem>
                </Breadcrumb>
        )
    }

    return (
        <div>
            <BreadcrumbComponent />
            <div>
                <FeaturedHeader>Featured Products</FeaturedHeader>
                <FeaturedContainer>
                    {featuredProducts}
                </FeaturedContainer>
            </div>
            <FeaturedHeader>T Shirts</FeaturedHeader>
            {tshirtCategory}
        </div>
    )
}

export default StorePage;