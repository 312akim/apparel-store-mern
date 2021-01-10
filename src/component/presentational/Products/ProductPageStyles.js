import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const ItemPageContainer = styles.div`
    background: ${COLORS.primaryLight};
    
`;

export const MainProductImg = styles.img`
    height: auto;
    width: 100vw;

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

    @media (min-width: 1200px) {
        display: none;
    }
`


export const LaptopContainer = styles.div`
    position: absolute;
    top: 20vh;
    right: 0;
    width: 20%;
`

export const LaptopPrice = styles.div`
    text-align: left;
    color: red;
    font-size: calc(0.8rem + 0.9vw);
`

export const OptionsContainer = styles.div`
    padding-top: calc(1rem + 1vw);
    width: 100%;

    @media (min-width: 1200px) {
        text-align: center;
    }
`


export const OptionsLabel = styles.label`
    text-align: left;
    width: 30%;
    font-size: calc(1rem + 0.9vw);

    @media (min-width: 1200px) {
        text-align: left;
        margin-left: 0%;
    }
`

export const SelectOptions = styles.select`
    text-align: right;
    width: 50%;
    font-size: calc(0.8rem + 0.9vw);
    

    
    @media (min-width: 1200px) {
        display: block;
        width: 70%;
        margin-left: 0;
    }
`
export const SizeContainer = styles.div`
    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`

export const QuantityContainer = styles.div`
    margin: calc(1rem + 1vw) 0;

    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`

export const CartContainer = styles.div`
    padding-bottom: calc(1rem + 1vw);

    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`

export const AddProductButton = styles.button`
    width: 50%;
    background-color: black;
    border: none;
    font-size: calc(0.8rem + 0.9vw);
    color: ${COLORS.primaryLight};
    padding: 10px 25px;
    border-radius: 24px;

    :hover {
        background-color: ${COLORS.primaryDark};
    }

    @media (min-width: 1200px) {
        width: 70%;
    }
`