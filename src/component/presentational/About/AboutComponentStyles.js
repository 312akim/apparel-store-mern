import styles from "styled-components"

export const MainAboutUsContainer = styles.div`

`;

export const TopContainer = styles.div`
    width: 100%;

    @media (min-width: 768px) {
        padding-top: 10%;
    }
`

export const TopContainerHeader = styles.h1`
    display: inline-block;
    padding-top: 3vh;
    padding-bottom: 2vh;
    margin: 0;
    padding: 3vh 15vw 2vh 15vw;

    @media (min-width: 768px) {
        width: 50%;
        padding-right: 5vw;
    }
`

export const TopContainerHeaderText = styles.p`
    display: block;
    padding: 0 15vw 2vh 15vw;

    @media (min-width: 768px) {
        display: inline-block;
        padding-left: 5vw;
        padding-right: 10vw;
        width: 50%;
    }
`

export const BottomContainer = styles.div`
    width: 100%;
    margin-bottom: 10vh;
    margin-top: 10vh;

    @media (min-width: 768px) {
        height: 35vh;
    }
`

export const BottomContainerImage = styles.img`
    width: 80%;
    padding: 0 5vw 2vh 5vw;


    @media (min-width: 768px) {
        display: inline-block;
        width: 50%;
        vertical-align: top;
        padding: 3vh 7.5vw 2vh 15vw;
    }

    @media (min-width: 1200px) {
        padding: 2vh 10%;
        height: 100%;
    }
`

export const BottomContainerCard = styles.div`
display: block;

@media (min-width: 768px) {
    display: inline-block;
    width: 50%;
    padding: 2vh 10vw 0 5vw;
}
`

export const BottomContainerCardHeader = styles.h2`
    height: 50%;
    padding: 2vh 20vw 0 20vw;
    
    @media (min-width: 768px) {
        padding: 2vh 3vw 0 3vw;
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

