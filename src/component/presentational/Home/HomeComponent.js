import React from 'react';
import { Link } from 'react-router-dom'
import { StyledProductsContainer, StyledHeroText, StyledShopAllIconContainer, StyledShopAllLinkContainer, StyledHeroTextContainer } from './HomeComponentStyles'
import { StyledProductContainer, StyledProductHeader } from '../Store/StorePageStyles';
import { StyledHeroContainer, StyledHeroImage } from '../../../shared/themes';
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
            <StyledHeroContainer>
                <StyledHeroImage src={heroImage}/>
                <StyledHeroTextContainer>
                    <StyledHeroText>Bringing Mad People &amp; Styles together</StyledHeroText>
                </StyledHeroTextContainer>
            </StyledHeroContainer>
            
            <ShopAllLink />
            {/* Maybe limit to 3 or pass props for how many displayed for mobile/other views */}
            <StyledProductContainer>
                <StyledProductHeader>
                    Featured
                </StyledProductHeader>
                <StyledProductsContainer>
                    {featuredProducts}
                </StyledProductsContainer>
            </StyledProductContainer>
        </div>
    )
}

const ShopAllLink = () => {
    return (
        <Link to={`/store`}>
            <StyledShopAllLinkContainer>
                Shop All
                <StyledShopAllIconContainer>
                    <i className="fa fa-angle-right"></i>
                </StyledShopAllIconContainer>
            </StyledShopAllLinkContainer>
        </Link>
    )
}

export default HomePage;