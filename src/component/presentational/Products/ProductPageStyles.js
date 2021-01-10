import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const ItemPageContainer = styles.div`
    background: ${COLORS.primaryLight};
`;

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

export const PreviewImg = styles.img`
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

export const ItemName = styles.div`
    font: bold Helvetica;
    font-size: calc(1rem + 1vw);
`

export const ItemPrice = styles.div`
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

export const SizeContainer = styles.div`

    @media (min-width: 1200px) {
       
    }
`

export const LaptopContainer = styles.div`
    position: absolute;
    top: 25vh;
    right: 0;
    width: 25%;
`

export const LaptopPrice = styles.div`
    color: red;
    font-size: calc(0.8rem + 0.9vw);
`

export const SizeBox = styles.div`
    display: inline-block;
    margin: 3.5% 0.7rem 0.7rem 0.7rem;
    padding: 2% 0 2% 0;
    width: 13%;
    border: 1px solid black;
    font-size: calc(0.8rem + 0.5vw);

    :hover {
        background: ${COLORS.secondaryDark};
    }
`