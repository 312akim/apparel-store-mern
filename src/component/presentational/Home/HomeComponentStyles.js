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
    position: absolute;
    top: 30%;
    left: 15%;
    color: white;
`

export const FeaturedContainer = styles.div`
    width: 100%;
    background: ${COLORS.primaryLight};
    padding-top: 4%;
    padding-bottom: 5%;
`