import React from "react";
import { StyledAboutUsContainer, StyledMainContainerImage,
  StyledMainContainer, StyledMainContainerCard, StyledMainContainerCardHeader, StyledMainContainerCardText
 } from "./AboutComponentStyles";
import { HeroContainer, HeroImage, HeroContainerHeader, HeroHeaderText } from '../../../shared/themes';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const AboutPage = () => {
  
  const aboutHero = require("../../../shared/images/group-people.jpg");
  const qualityImage = require("../../../shared/images/hand-measuring.jpg");

  const BreadcrumbComponent = () => {
    return (
            <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
    )
  }

  const HeroComponent = () => {
    return (
      <HeroContainer>
        <HeroImage src={aboutHero} />
        <HeroContainerHeader>
          WHO WE ARE
        </HeroContainerHeader>
        <HeroHeaderText>
          We are MadCrown. Local individual artists brought together by love of design, anime and friends.
        </HeroHeaderText>
      </HeroContainer>
    )
  }

  const MainComponent = () => {
    return (
      <StyledMainContainer>
        <StyledMainContainerImage src={qualityImage}/>
        <StyledMainContainerCard>
          <StyledMainContainerCardHeader>
            WE STAND BY OUR PRODUCT
          </StyledMainContainerCardHeader>
          <StyledMainContainerCardText>
            You deserve the feeling of soft, plush, sturdy and well made clothes. Our products are handmade for each order to ensure you get what you deserve and experience the joy of wearing true quality clothing. 
          </StyledMainContainerCardText>
        </StyledMainContainerCard>
      </StyledMainContainer>
    )
  }

  return (
    <>
      <BreadcrumbComponent />
      <StyledAboutUsContainer>
        <HeroComponent />
        <MainComponent />
      </StyledAboutUsContainer>
    </>
  );
};

export default AboutPage;
