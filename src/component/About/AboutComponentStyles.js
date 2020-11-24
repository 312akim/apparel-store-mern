import styles from "styled-components"

export const AboutPageContainerDiv = styles.div`
    margin: 0 0 0 0;

    @media (min-width: 480px) {
        margin: 0 20% 0 20%;
    }
`;

export const RightImageDiv = styles.img`
    margin-top: 2%;
    display: block;
    background: red;
    width: 100%;

    @media (min-width: 480px) {
        margin-top: 0%;
        float: right;
        background: red;
        width: 50%;
    }
`;

export const LeftImageDiv = styles.img`
    margin-top: 2%;
    width: 100%;
    display: block;
    background: green;

    @media (min-width: 480px) {
        margin-top: 0%;
        float: left;
        background: green;
        width: 50%;
    }
`;

export const LeftTextContainerDiv = styles.div`
    background: blue;
    width: 100%;

    @media (min-width: 480px) {
        background: blue;
        width: 50%;
    }
`;

export const RightTextContainerDiv = styles.div`
    margin-top: 2%;
    background: yellow;
    width: 100%;

    @media (min-width: 480px) {
        margin-top: 0%;
        background: yellow;
        width: 50%;
    }
`;

export const ContainerTitle = styles.div`
    margin-top: 5%;
`;

export const ContainerText = styles.div`
    margin: 5%;
`;