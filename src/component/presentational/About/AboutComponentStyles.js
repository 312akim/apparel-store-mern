import COLORS from "../../../shared/colorScheme"
import styles from "styled-components"

export const MainAboutUsContainer = styles.div`
    background: ${COLORS.primaryLight};
`;

export const TopContainer = styles.div`
    width: 100%;

    @media (min-width: 768px) {

    }
`

export const AboutUsHero = styles.img`
    width: 100%;
`

export const TopContainerHeader = styles.h1`
    padding-top: 3vh;
    padding-bottom: 2vh;
    margin: 0;
    padding: 3vh 15vw 2vh 15vw;

    @media (min-width: 768px) {
        position: absolute;
        top: 25vh;
        background: white;
        opacity: 0.8;
        left: 25vw;
        width: 50%;
        padding: 0;
    }

    @media (min-width: 1200px) {
        top: 55vh;
    }
`

export const TopContainerHeaderText = styles.p`
    display: block;
    padding: 0 15vw 2vh 15vw;

    @media (min-width: 768px) {
        display: inline-block;
        padding: 1vh 0 0 0;
        width: 50%;
    }
`

export const BottomContainer = styles.div`
    width: 100%;
    padding-bottom: 2vh;
    padding-top: 3vh;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
    }
`

export const BottomContainerImage = styles.img`
    width: 100%;
    padding: 0 10vw 2vh 10vw;


    @media (min-width: 768px) {
        display: inline-block;
        width: 50%;
        vertical-align: top;
        padding: 3vh 7.5vw 2vh 0vw;
    }
`

export const BottomContainerCard = styles.div`
display: block;

@media (min-width: 768px) {
    display: inline-block;
    width: 50%;
    padding: 2vh 5vw 0 7.5vw;
}
`

export const BottomContainerCardHeader = styles.h2`
    height: 50%;
    padding: 2vh 20vw 0 20vw;
    
    @media (min-width: 768px) {
        padding: 2vh 3vw 0 3vw;
        height: 25%;
    }
`

export const BottomContainerCardText = styles.p`
    height: 50%;
    padding: 2vh 20vw 2vh 20vw;

    @media (min-width: 768px) {
        padding: 2vh 3vw 0 3vw;
    }
`

export const Example = styles.div`

    @media (min-width: 576px) {

    }
    
    @media (min-width: 768px) {
    
    }
    
    @media (min-width: 992px) {
    
    }
    
    @media (min-width: 1200px) {
    
    }
`;

