import React from 'react';
import { FeaturedContainer, HeroImage } from './HomeComponentStyles'
import ProductItem from '../Products/ProductItemComponent'


const HomePage = ({products}) => {
    //Limit # of displayed products
    const limit = 4;
    let count = 0;
    const featuredProducts = products.map((item) => {
        if ((item.featured === true) && (count < limit)) {
            count++;
            return (
                <ProductItem className="homeFeaturedItems" item={item} key={item.id}/>
                )
            }
        })
        
    const heroImage = require('../../shared/images/home-background.jpg');
    
    return (
        <div>
            <div>
                <HeroImage src={heroImage}/>
                <div>Brand Logo/Motto within Hero here</div>
            </div>

            
            {/* Maybe limit to 3 or pass props for how many displayed for mobile/other views */}
            <FeaturedContainer>
                <div>Featured</div>
                {featuredProducts}
            </FeaturedContainer>
            <div>
                Fade in Featured Clothes display
            </div>
        </div>
    )
}

export default HomePage;