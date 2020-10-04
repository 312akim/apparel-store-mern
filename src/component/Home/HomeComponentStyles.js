import styles from 'styled-components';

export const StyledVideo = styles.video`
    display: block;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: -1;

    @media (min-width: 720px) {
        left: 0;
        width: 100vw;
        max-width: 100%;
        z-index: -1;
    }
`

export const FeaturedContainer = styles.div`
    width: 100%;
    background: lightgray;
    padding-top: 4%;
    padding-bottom: 5%;
`