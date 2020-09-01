import React from 'react';
import StyledVideo from './HomeComponentStyles'

const HomePage = () => {
    const videoSource = "https://www.w3schools.com/tags/movie.mp4";
    return (
        <div>
            <h1>This is the HomePage!! / Landing!!</h1>
            <div>
                <StyledVideo autoPlay loop muted className="homeBackgroundVideo">
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </StyledVideo>
            </div>
            <div>
                Fade in Featured Clothes display
            </div>
        </div>
    )
}

export default HomePage;