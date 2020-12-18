import styles from 'styled-components';
import COLORS from '../../shared/colorScheme';

export const HeroImage = styles.img`
    display: block;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: -1;
    filter: brightness(75%);

    @media (min-width: 720px) {
        left: 0;
        width: 100vw;
        max-width: 100%;
        z-index: -1;
    }
`

export const HeroLogo = ``

// Replace background image with marble background
export const FeaturedContainer = styles.div`
    width: 100%;
    background: ${COLORS.primaryLight};
    padding-top: 4%;
    padding-bottom: 5%;
`