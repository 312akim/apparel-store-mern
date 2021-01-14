import styles from "styled-components"

export const MainAboutUsContainer = styles.div`

`;

export const TopContainer = styles.div`
    width: 100%;

    @media (min-width: 768px) {
        height: 35vh;
    }
`

export const TopContainerHeader = styles.h1`
    display: inline-block;
    padding-top: 3vh;
    padding-bottom: 2vh;
    margin: 0;
    padding: 3vh 15vw 2vh 15vw;

    @media (min-width: 768px) {
        padding-left: 3vw;
        padding-right: 3vw;
        width: 50%;
    }
`

export const TopContainerHeaderText = styles.p`
    display: inline-block;
    padding: 0 15vw 2vh 15vw;

    @media (min-width: 768px) {
        padding-left: 3vw;
        padding-right: 3vw;
        width: 50%;
    }
`

export const BottomContainerImage = styles.img`
    display: inline-block;
    width: 80%;
    padding: 0 0 2vh 0;

    @media (min-width: 768px) {
        width: 50%;
        vertical-align: top;
        padding: 2vh 0;
    }
`

export const BottomContainer = styles.div`
    width: 100%;

    @media (min-width: 768px) {
        height: 35vh;
    }
`


export const BottomContainerCard = styles.div`
display: inline-block;

@media (min-width: 768px) {
    width: 50%;
    padding: 2vh 0;
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

