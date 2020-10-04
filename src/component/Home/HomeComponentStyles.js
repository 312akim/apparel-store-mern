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

export const LogoImg = styles.img`
    position: fixed;
    margin-top: 1%;
    top: 0;
    margin-left: 50%;
    margin-right: 50%;
    height: 200px;
    padding: 8px;
    border: 12px solid black;
    z-index: 1;

    @media (max-width: 720px) {
        margin-top: 20%;
        height: 150px;
    }
`

export const FeaturedContainer = styles.div`
    width: 100%;
    background: lightgray;
    padding-top: 5%;
    padding-bottom: 6%;
`