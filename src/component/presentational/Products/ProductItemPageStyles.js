import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme';
import { fontSizeProductLabel, fontSizeProductSelect } from '../../../shared/fontsTheme';

export const ItemPageContainer = styled.div`
    background: ${COLORS.primaryLight};
    
`;

export const MainProductImg = styled.img`
    height: auto;
    width: 100%;
    padding: 0 5%;

    @media (min-width: 1200px) {
        padding: 0 25%;
    }
`;

export const PreviewContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    padding-top: calc(1rem + 1vw);
    padding-bottom: calc(1rem + 1vw);
    width: 100%;

    @media (min-width: 1200px) {
        padding-left: 25%;
    }
`;

export const StyledPreviewImgCropper = styled.div`
    width: 100px;
    height: 100px;
    overflow-x: hidden;
    margin-left: 5%;
`

export const PreviewImg = styled.img`
    display: inline-block;
    text-align: left;
    min-width: 100px;
    height: 100%;

    @media (min-width: 1200px) {
        padding-right: calc(0.3rem + 2vw);
        padding-left: 0;
    }
`;

export const ItemName = styled.div`
    font: bold Helvetica;
    font-size: calc(1rem + 1vw);
`

export const ItemPrice = styled.div`
    text-align: right;
    padding-right: calc(1rem + 4vw);
    font: bold Helvetica;
    font-size: ${fontSizeProductLabel};

    @media (min-width: 1200px) {
        display: none;
    }
`


export const LaptopContainer = styled.div`
    position: absolute;
    top: 20vh;
    right: 0;
    width: 20%;
`

export const LaptopPrice = styled.div`
    text-align: left;
    font-size: calc(0.8rem + 0.9vw);
`

export const OptionsContainer = styled.div`
    padding-top: calc(1rem + 1vw);
    width: 100%;

    @media (min-width: 1200px) {
        text-align: center;
    }
`


export const OptionsLabel = styled.label`
    text-align: left;
    width: 30%;
    font-size: ${fontSizeProductLabel};

    @media (min-width: 1200px) {
        text-align: left;
        margin-left: 0%;
    }
`

export const SelectOptions = styled.select`
    text-align: right;
    width: 50%;
    font-size: ${fontSizeProductSelect};
    
    @media (min-width: 1200px) {
        display: block;
        width: 70%;
        margin-left: 0;
    }
`
export const SizeContainer = styled.div`
    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`

export const QuantityContainer = styled.div`
    margin: calc(1rem + 1vw) 0;

    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`

export const CartContainer = styled.div`
    padding-bottom: calc(1rem + 1vw);

    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`