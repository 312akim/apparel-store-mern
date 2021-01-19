import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';
import { fontSizeButton, fontSizeRegularPlus, fontSizeSecondaryHeader } from '../../../shared/fontsTheme';

// Need to fix 1024x1366 ipad pro resolution
export const HeroText = styles.div`
    background: black;
    color: white;
    font: bold Helvetica;
    font-size: ${fontSizeRegularPlus};

    @media (min-width: 768px) {
        position: absolute;
        top: 20%;
        left: 10%;
        padding: 0 3px;
    }

    @media (min-width: 1200px) {
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

export const FeaturedHeader = styles.h2`
    font-size: ${fontSizeSecondaryHeader};    
`

export const ShopButtonContainer = styles.div`
    background: ${COLORS.primaryLight};
    padding-bottom: 8%;

    @media (min-width: 576px) {
        padding-bottom: 5%;
    }

    @media (min-width: 768px) {
        position: absolute;
        top: 24%;
        left: 10%;
        padding-bottom: 0;
    }

    @media (min-width: 1200px) {
        top: 51%;
        left: 5%;
    }
`

export const ShopAllLink = styles.button`
    positon: absolute;
    background: black;
    color: white;
    border: none;
    font-size: ${fontSizeButton};
`