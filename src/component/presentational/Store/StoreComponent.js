import React from 'react';
import { StyledProductHeader, StyledProductContainer } from './StorePageStyles'
import ProductItem from '../Products/ProductItemComponent'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const StorePage = ({products}) => {
    const featuredProducts = products.products.map((item) => {
        if (item.featured === true) {
            return (
                    <ProductItem className="itemColumn" item={item} key={item.id}/>
            )
        } else {
            return (
                <div>Failed to retrieve featured products.</div>
            )
        }
    })

    const tshirtCategory = products.products.map((item) => {
        if (item.category.includes("shirt")) {
            return (
                    <ProductItem item={item} key={item.id}/>
            )
        } else {
            return <div></div>
        }
    })

    return (
        <div>
            <BreadcrumbComponent />

            <StyledProductContainer>
                <StyledProductHeader>Featured Products</StyledProductHeader>
                {featuredProducts}
            </StyledProductContainer>
            <StyledProductContainer>
                <StyledProductHeader>T Shirts</StyledProductHeader>
                {tshirtCategory}
            </StyledProductContainer>
        </div>
    )
}

const BreadcrumbComponent = () => {
    return (
            <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Store</BreadcrumbItem>
            </Breadcrumb>
    )
}

export default StorePage;