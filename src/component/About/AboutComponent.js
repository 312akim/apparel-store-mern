import React from "react";
import styles from "styled-components";
import { AboutPageContainerDiv, ContainerTitle, ContainerText, RightImageDiv, LeftImageDiv, LeftTextContainerDiv, RightTextContainerDiv} from "./AboutComponentStyles";

const AboutPage = () => {

  return (
    <AboutPageContainerDiv>
      <div>This is the about us page!</div>
      <LeftTextContainerDiv className="aboutUsContainers">
        <ContainerTitle>Who are we?</ContainerTitle>
        <ContainerText>
          Lorizzle mammasay mammasa mamma oo sa dolor black amet, consectetuer ass elit. Pellentesque tellivizzle tortizzle. 
          Fo shizzle mah nizzle fo rizzle, mah home g-dizzle erizzle. Own yo' izzle dolor dapibizzle turpis tempizzle pizzle. 
          Boom shackalack pellentesque nibh izzle turpizzle. Break it down izzle tortor. Pellentesque eleifend rhoncus shiz. 
          Brizzle tellizzle urna, pretium ass, mattizzle ac, eleifend vitae, nunc. 
          Bling bling suscipizzle. Boom shackalack sempizzle velit for sure things.
        </ContainerText>
      </LeftTextContainerDiv>
      <RightImageDiv className="aboutUsContainers" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></RightImageDiv>
      <LeftImageDiv className="aboutUsContainers" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></LeftImageDiv>
      <RightTextContainerDiv className="aboutUsContainers">
        <ContainerTitle>Our story</ContainerTitle>
        <ContainerText>
          Lorizzle mammasay mammasa mamma oo sa dolor black amet, consectetuer ass elit. Pellentesque tellivizzle tortizzle. 
          Fo shizzle mah nizzle fo rizzle, mah home g-dizzle erizzle. Own yo' izzle dolor dapibizzle turpis tempizzle pizzle. 
          Boom shackalack pellentesque nibh izzle turpizzle. Break it down izzle tortor. Pellentesque eleifend rhoncus shiz. 
          Brizzle tellizzle urna, pretium ass, mattizzle ac, eleifend vitae, nunc. 
          Bling bling suscipizzle. Boom shackalack sempizzle velit for sure things.
        </ContainerText>
      </RightTextContainerDiv>
    </AboutPageContainerDiv>
  );
};

export default AboutPage;
