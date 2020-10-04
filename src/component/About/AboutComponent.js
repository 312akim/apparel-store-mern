import React from "react";
import styles from "styled-components";

const AboutPage = () => {
  const AboutPageContainerDiv = styles.div`
        margin: 0 0 0 0;

        @media (min-width: 480px) {
            margin: 0 20% 0 20%;
        }
    `;

  const RightImageDiv = styles.img`
        margin-top: 2%;
        display: block;
        background: red;
        width: 100%;

        @media (min-width: 480px) {
            margin-top: 0%;
            float: right;
            background: red;
            width: 50%;
        }
    `;

  const LeftImageDiv = styles.img`
        margin-top: 2%;
        width: 100%;
        display: block;
        background: green;

        @media (min-width: 480px) {
            margin-top: 0%;
            float: left;
            background: green;
            width: 50%;
        }
    `;

  const LeftTextContainerDiv = styles.div`
        background: blue;
        width: 100%;

        @media (min-width: 480px) {
            background: blue;
            width: 50%;
        }
    `;

  const RightTextContainerDiv = styles.div`
        margin-top: 2%;
        background: yellow;
        width: 100%;

        @media (min-width: 480px) {
            margin-top: 0%;
            background: yellow;
            width: 50%;
        }
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
  );
};

export default AboutPage;
