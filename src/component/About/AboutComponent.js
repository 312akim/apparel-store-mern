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
        <div>
          Lorizzle mammasay mammasa mamma oo sa dolor black amet, consectetuer ass elit. Pellentesque tellivizzle tortizzle. 
          Fo shizzle mah nizzle fo rizzle, mah home g-dizzle erizzle. Own yo' izzle dolor dapibizzle turpis tempizzle pizzle. 
          Boom shackalack pellentesque nibh izzle turpizzle. Break it down izzle tortor. Pellentesque eleifend rhoncus shiz. 
          In izzle habitasse platea dictumst. Own yo' yo mamma. Brizzle tellizzle urna, pretium ass, mattizzle ac, eleifend vitae, nunc. 
          Bling bling suscipizzle. Boom shackalack sempizzle velit for sure things.
        </div>
      </LeftTextContainerDiv>
      <RightImageDiv className="aboutUsContainers" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></RightImageDiv>
      <LeftImageDiv className="aboutUsContainers" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></LeftImageDiv>
      <RightTextContainerDiv className="aboutUsContainers">
        <div>Our story</div>
        <div>
          Lorizzle mammasay mammasa mamma oo sa dolor black amet, consectetuer ass elit. Pellentesque tellivizzle tortizzle. 
          Fo shizzle mah nizzle fo rizzle, mah home g-dizzle erizzle. Own yo' izzle dolor dapibizzle turpis tempizzle pizzle. 
          Boom shackalack pellentesque nibh izzle turpizzle. Break it down izzle tortor. Pellentesque eleifend rhoncus shiz. 
          In izzle habitasse platea dictumst. Own yo' yo mamma. Brizzle tellizzle urna, pretium ass, mattizzle ac, eleifend vitae, nunc. 
          Bling bling suscipizzle. Boom shackalack sempizzle velit for sure things.
        </div>
      </RightTextContainerDiv>
    </AboutPageContainerDiv>
  );
};

export default AboutPage;
