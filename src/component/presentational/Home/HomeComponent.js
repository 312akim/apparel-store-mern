import React from 'react';
import { Link } from 'react-router-dom'
import { FeaturedContainer, HeroContainer, HeroImage, HeroText, ShopAllLink, LinkContainer } from './HomeComponentStyles'
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
            }
        })
        
    const heroImage = require('../../../shared/images/home-background.jpg');
    
    return (
        <div>
            <HeroContainer>
                <HeroImage src={heroImage}/>
                <HeroText>Brand Logo/Motto here. Image is 1720x600</HeroText>
            </HeroContainer>
            
            {/* Maybe limit to 3 or pass props for how many displayed for mobile/other views */}
            <FeaturedContainer>
                <div>Featured</div>
                {featuredProducts}
            </FeaturedContainer>
            <Link to={`/store`}>
                <LinkContainer>
                    <ShopAllLink>
                        Shop All
                    </ShopAllLink>
                </LinkContainer>
            </Link>
        </div>
    )
}

export default HomePage;