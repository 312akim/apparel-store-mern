import styles from 'styled-components';
import { fontSizeRegular, fontSizeMainHeader } from './fontsTheme';
import COLORS from './colorScheme'
import { fontSizeButton } from './fontsTheme';

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
`

export const HeroContainerHeader = styles.h1`
    margin: 0;
    padding: 5vh 15vw 2vh 15vw;
    font-size: ${fontSizeMainHeader};

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
    font-size: ${fontSizeRegular};
    color: black;

    @media (min-width: 768px) {
        display: inline-block;
        padding: 1vh 0 0 0;
        width: 50%;
        margin-bottom: 0;
    }
`

export const LoadingContainer = styles.div`
    margin-top: 20%;
`

export const StyledButton = styles.button`
    margin-top: 2rem;
    width: 50%;
    background-color: black;
    border: none;
    font-size: ${fontSizeButton};
    color: ${COLORS.primaryLight};
    padding: 10px 25px;
    border-radius: 24px;

    :hover {
        background-color: ${COLORS.primaryDark};
    }

    @media (min-width: 1200px) {
        width: ${props => props.largeWidth};
    }
`