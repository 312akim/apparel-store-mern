import React from 'react';
import { StyledVideo, LogoImg, FeaturedContainer } from './HomeComponentStyles'
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

    const videoSource = "https://www.videvo.net/videvo_files/converted/2018_03/preview/180301_03_B_CausewayBay_02.mp422652.webm";
    return (
        <div>
            <StyledVideo autoPlay loop muted className="homeBackgroundVideo">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </StyledVideo>
            
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