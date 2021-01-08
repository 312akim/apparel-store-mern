import styles from 'styled-components';

export const MainProductImg = styles.img`
    margin-top: 1rem;
    height: auto;
    width: 100vw;

    @media (min-width: 576px) {
        
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        padding: 0 25%;
    }
`;

export const PreviewContainerDiv = styles.div`
    border: solid black 1px;
    text-align: left;
`;

export const StyledPreviewImg = styles.img`
    display: inline-block;
    padding-left: calc(0.3rem + 2vw);
    text-align: left;
    width: 22%;
    height: auto;

    @media (min-width: 576px) {
        
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        width: 15%;
    }
`;

export const StyledItemName = styles.div`
    font: bold Helvetica;
    font-size: calc(1rem + 1vw);
`

export const StyledItemPrice = styles.div`
    text-align: right;
    padding-right: 2em;
    font: bold Helvetica;
    font-size: calc(0.8rem + 0.9vw);
`