import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

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

    @media (min-width: 720px) {
        width: 100vw;
    }
`

export const HeroText = styles.div`
    @media (min-width: 720px) {
        position: absolute;
        top: 20%;
        left: 10%;
        font: bold 22px Helvetica;
        color: white;
    }

    @media (min-width: 1024px) {
        top: 45%;
        left: 5%;
    }
`

export const FeaturedContainer = styles.div`
    width: 100%;
    background: ${COLORS.primaryLight};
    padding-top: 3%;
    padding-bottom: 5%;
`