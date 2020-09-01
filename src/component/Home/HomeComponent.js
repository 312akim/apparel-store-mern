import React from 'react';
import { StyledVideo, LogoImg } from './HomeComponentStyles'

const HomePage = () => {
    const videoSource = "https://www.videvo.net/videvo_files/converted/2018_03/preview/180301_03_B_CausewayBay_02.mp422652.webm";
    return (
        <div>
            {/* Video slightly extends out right side. */}
            <LogoImg src={require('../../shared/images/sample-logo.png')} alt="Mad Crown Logo"></LogoImg>
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