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

export const BottomContainer = styles.div`
    width: 100%;
    padding-bottom: 3vh;
    padding-top: 4vh;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        padding-bottom: 10vh;
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
        height: 20%;
    }
`

export const BottomContainerCardText = styles.p`
    height: 50%;
    padding: 2vh 20vw 2vh 20vw;

    @media (min-width: 768px) {
        padding: 5vh 3vw 0 3vw;
        height: 80%;
    }

    @media (min-width: 1200px) {
        padding: 0 7vw;
        font-size: 2rem;
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

