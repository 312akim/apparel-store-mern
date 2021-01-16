import React from "react";
import { MainAboutUsContainer, TopContainer, AboutUsHero, TopContainerHeader, BottomContainerImage,
  BottomContainer, TopContainerHeaderText, BottomContainerCard, BottomContainerCardHeader, BottomContainerCardText
 } from "./AboutComponentStyles";

const AboutPage = () => {

  const imageLink = require("../../../shared/images/coffee-photo.jpg");
  const aboutHero = require("../../../shared/images/group-people.jpg");
  const qualityImage = require("../../../shared/images/hand-measuring.jpg");

  return (
    <MainAboutUsContainer>
      <TopContainer>
        <AboutUsHero src={aboutHero} />
        <TopContainerHeader>
          WHO WE ARE
        </TopContainerHeader>
        <TopContainerHeaderText>
          We are MadCrown. Local individual artists brought together by love of design, anime and friends.
        </TopContainerHeaderText>
      </TopContainer>
      <BottomContainer>
        <BottomContainerImage src={qualityImage}/>
        <BottomContainerCard>
          <BottomContainerCardHeader>
            WE STAND BY OUR PRODUCT
          </BottomContainerCardHeader>
          <BottomContainerCardText>
            You deserve the feeling of soft, plush, sturdy and well made clothes. Our products are handmade for each order to ensure you get what you deserve and experience the joy of wearing true quality clothing. 
          </BottomContainerCardText>
        </BottomContainerCard>
      </BottomContainer>
    </MainAboutUsContainer>
  );
};

export default AboutPage;
