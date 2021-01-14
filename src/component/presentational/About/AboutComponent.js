import React from "react";
import { MainAboutUsContainer, TopContainer, TopContainerHeader, BottomContainerImage,
  BottomContainer, TopContainerHeaderText, BottomContainerCard, BottomContainerCardHeader, BottomContainerCardText
 } from "./AboutComponentStyles";

const AboutPage = () => {

  const imageLink = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

  return (
    <MainAboutUsContainer>
      <TopContainer>
        <TopContainerHeader>
          WHO WE ARE
        </TopContainerHeader>
        <TopContainerHeaderText>
          We are MadCrown, proud designers, developers and anime lovers.
        </TopContainerHeaderText>
      </TopContainer>
      <BottomContainer>
        <BottomContainerImage src={imageLink}/>
        <BottomContainerCard>
          <BottomContainerCardHeader>
            WE STAND BY OUR PRODUCT
          </BottomContainerCardHeader>
          <BottomContainerCardText>
            Everyone appreciates the feeling of soft, plush, sturdy and well made clothes on their skin. You can tell the difference and we want to make sure you get the same feeling.
          </BottomContainerCardText>
        </BottomContainerCard>
      </BottomContainer>
    </MainAboutUsContainer>
  );
};

export default AboutPage;
