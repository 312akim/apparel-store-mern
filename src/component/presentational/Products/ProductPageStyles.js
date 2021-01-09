import styles from 'styled-components';

export const MainProductImg = styles.img`
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
    text-align: left;
    padding-top: calc(1rem + 1vw);

    @media (min-width: 1200px) {
        padding-left: 25%;
    }
`;

export const StyledPreviewImg = styles.img`
    display: inline-block;
    padding-left: calc(0.3rem + 2vw);
    text-align: left;
    width: 18%;
    height: auto;

    @media (min-width: 576px) {
        
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        width: 15%;
        padding-right: calc(0.3rem + 2vw);
        padding-left: 0;
    }
`;

export const StyledItemName = styles.div`
    font: bold Helvetica;
    font-size: calc(1rem + 1vw);
`

export const StyledItemPrice = styles.div`
    text-align: right;
    padding-right: calc(1rem + 4vw);
    font: bold Helvetica;
    font-size: calc(0.8rem + 0.9vw);

    @media (min-width: 576px) {
        
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {
        display: none;
    }
`

export const StyledSizeContainer = styles.div`

    @media (min-width: 1200px) {
       
    }
`

export const StyledLaptopContainer = styles.div`
    position: absolute;
    top: 25vh;
    right: 0;
    width: 25%;
`

export const StyledLaptopPrice = styles.div`
    color: red;
`

export const StyledLaptopSize = styles.div`
    color: red;
`

export const SizeBox = styles.div`
    display: inline-block;
    margin: calc(1rem + 1vw) 0.5rem 0.5rem 0.5rem;
    padding: 1px 0 1px 0;
    width: 15%;
    border: 1px solid black;
`