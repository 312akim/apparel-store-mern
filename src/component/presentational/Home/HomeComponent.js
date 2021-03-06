import React from 'react';
import { Link } from 'react-router-dom'
import { ProductsContainer, HeroText, ShopAllIconContainer, ShopAllLinkContainer, HeroTextContainer } from './HomeComponentStyles'
import { ProductContainer, ProductHeader } from '../Store/StorePageStyles';
import { HeroContainer, HeroImage } from '../../../shared/themes';
import ProductItem from '../Products/ProductItemComponent'


const HomePage = ({products}) => {
    //Limit # of displayed products
    const limit = 4;
    let count = 0;

    console.log("PRODUCT PRODUCTS!", products.products)

    const featuredProducts = products.products.map((item) => {
        if ((item.featured === true) && (count < limit)) {
            count++;
            return (
                <ProductItem className="homeFeaturedItems" item={item} key={item.id}/>
            )
        } else {
            return <div></div>
        }
    })
        
    const heroImage = require('../../../shared/images/home-background.jpg');
    
    return (
        <div>
            <HeroContainer>
                <HeroImage src={heroImage}/>
                <HeroTextContainer>
                    <HeroText>Bringing Mad People &amp; Styles together</HeroText>
                </HeroTextContainer>
            </HeroContainer>
            
            <ShopAllLink />
            {/* Maybe limit to 3 or pass props for how many displayed for mobile/other views */}
            <ProductContainer>
                <ProductHeader>
                    Featured
                </ProductHeader>
                <ProductsContainer>
                    {featuredProducts}
                </ProductsContainer>
            </ProductContainer>
        </div>
    )
}

const ShopAllLink = () => {
    return (
        <Link to={`/store`}>
            <ShopAllLinkContainer>
                Shop All
                <ShopAllIconContainer>
                    <i className="fa fa-angle-right"></i>
                </ShopAllIconContainer>
            </ShopAllLinkContainer>
        </Link>
    )
}

export default HomePage;