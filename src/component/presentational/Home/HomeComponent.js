import React from 'react';
import { Link } from 'react-router-dom'
import { ProductsContainer, HeroText, ShopAllIconContainer, ShopAllLinkContainer } from './HomeComponentStyles'
import { ProductContainer, ProductHeader } from '../Store/StorePageStyles';
import { HeroContainer, HeroImage, StyledButton } from '../../../shared/themes';
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
        
    const heroImage = require('../../../shared/images/home-background.jpg');
    
    return (
        <div>
            <HeroContainer>
                <HeroImage src={heroImage}/>
                <HeroText>Brand Logo/Motto here. Image is 1720x600</HeroText>
            </HeroContainer>
            
            <ShopAllLink />
            {/* Maybe limit to 3 or pass props for how many displayed for mobile/other views */}
            <ProductContainer>
                <ProductHeader>
                    Featured
                </ProductHeader>
                <StyledButton 
                      largeWidth='70%' 
                      className="snipcart-add-item"
                      data-item-id={"Test123"}
                      data-item-price={'5'}
                      data-item-url={"/store/"}
                      data-item-description={"Test description"}
                      data-item-name={"Test312"}
                      data-item-custom1-name="Size"
                    >
                        Click
                </StyledButton>
                <ProductsContainer>
                    {featuredProducts}
                </ProductsContainer>
            </ProductContainer>
        </div>
    )
}

export default HomePage;