import React from 'react';
import styles from 'styled-components';

const AboutPage = () => {
    const AboutPageContainerDiv = styles.div`
        margin: 0 20% 0 20%;
    `; 
    
    const RightImageDiv = styles.img`
        float: right;
        background: red;
    `;
    
    const LeftImageDiv = styles.img`
        margin-top: 2%;
        float: left;
        background: green;
`;

    const LeftTextContainerDiv = styles.div`
        background: blue;
    `;

    const RightTextContainerDiv = styles.div`
        margin-top: 2%;
        background: yellow;
`;

    return (
        <AboutPageContainerDiv>
            <div>This is the about us page!</div>
            <LeftTextContainerDiv className="aboutUsContainers">
                <div>Who are we?</div>
                <div>Text for "Who are we?" Here</div>
            </LeftTextContainerDiv>
            <RightImageDiv className="aboutUsContainers" src=""></RightImageDiv>
            <LeftImageDiv className="aboutUsContainers" src=""></LeftImageDiv>
            <RightTextContainerDiv className="aboutUsContainers">
                <div>Our story</div>
                <div>Text for "Our story" Here</div>
            </RightTextContainerDiv>

        </AboutPageContainerDiv>
    )
}

export default AboutPage;