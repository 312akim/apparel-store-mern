import styles from 'styled-components';

export const HeroContainer = styles.div`
    positiion: relative;
`

export const HeroImage = styles.img`
    display: block;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: -1;
    filter: brightness(75%);

    @media (min-width: 576px) {
        
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {

    }
`

export const HeroContainerHeader = styles.h1`
    margin: 0;
    padding: 5vh 15vw 2vh 15vw;

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

export const HeroHeaderText = styles.p`
    display: block;
    padding: 0 15vw 2vh 15vw;

    @media (min-width: 768px) {
        display: inline-block;
        padding: 1vh 0 0 0;
        width: 50%;
    }
`