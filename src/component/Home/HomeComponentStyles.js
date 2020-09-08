import styles from 'styled-components';

export const StyledVideo = styles.video`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: -1;

    @media (min-width: 720px) {
        position: absolute;
        left: 0;
        width: 100vw;
        max-width: 100%;
        z-index: -1;
    }
`

export const LogoImg = styles.img`
    position: block;
    margin-top: 1%;
    left: 50%;
    height: 200px;
    padding: 8px;
    border: 12px solid black;

    @media (max-width: 720px) {
        margin-top: 20%;
        height: 150px;
    }
`

export const FeaturedContainer = styles.div`
    margin-top: 20%;
`