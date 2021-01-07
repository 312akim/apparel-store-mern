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

    @media (min-width: 576px) {
        
    }

    @media (min-width: 768px) {
        width: 100vw;
    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {

    }
`

// Need to fix 1024x1366 ipad pro resolution
export const HeroText = styles.div`
    background: black;
    color: white;

    @media (min-width: 576px) {
        
    }

    @media (min-width: 768px) {
        position: absolute;
        top: 20%;
        left: 10%;
        font: bold 22px Helvetica;
    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        top: 45%;
        left: 5%;
    }
`

export const FeaturedContainer = styles.div`
    width: 100%;
    background: ${COLORS.primaryLight};
    padding-top: 2%;
    padding-bottom: 5%;
`

export const LinkContainer = styles.div`
    background: ${COLORS.primaryLight};
    padding-bottom: 2em;
`

export const ShopAllLink = styles.div`
    background: black;
    color: white;
    width: 30%;
    margin: auto;
    padding: 1em 0;
`