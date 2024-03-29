import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme';
import { fontSizeProductLabel, fontSizeProductSelect } from '../../../shared/fontsTheme';

export const StyledItemPageContainer = styled.div`
    background: ${COLORS.primaryLight};
    
`;

export const StyledMainProductImg = styled.img`
    height: auto;
    width: 100%;
    padding: 0 5%;

    @media (min-width: 1200px) {
        padding: 0 25%;
    }
`;

export const StyledPreviewContainerDiv = styled.div`
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

    @media (min-width: 1200px) {
        margin-left: 0%;
        margin-right: 5%;
    }
`

export const StyledPreviewImg = styled.img`
    display: inline-block;
    text-align: left;
    min-width: 100px;
    height: 100%;

    @media (min-width: 1200px) {
        padding-right: calc(0.3rem + 2vw);
        padding-left: 0;
    }
`;

export const StyledItemName = styled.div`
    font: bold Helvetica;
    font-size: calc(1rem + 1vw);
`

export const StyledItemPrice = styled.div`
    text-align: right;
    padding-right: calc(1rem + 4vw);
    font: bold Helvetica;
    font-size: ${fontSizeProductLabel};

    @media (min-width: 1200px) {
        display: none;
    }
`


export const StyledLaptopContainer = styled.div`
    position: absolute;
    top: 20vh;
    right: 0;
    width: 20%;
`

export const StyledLaptopPrice = styled.div`
    text-align: left;
    font-size: calc(0.8rem + 0.9vw);
`

export const StyledOptionsContainer = styled.div`
    padding-top: calc(1rem + 1vw);
    width: 100%;

    @media (min-width: 1200px) {
        text-align: center;
    }
`


export const StyledOptionsLabel = styled.label`
    text-align: left;
    width: 30%;
    font-size: ${fontSizeProductLabel};

    @media (min-width: 1200px) {
        text-align: left;
        margin-left: 0%;
    }
`

export const StyledSelectOptions = styled.select`
    text-align: right;
    width: 50%;
    font-size: ${fontSizeProductSelect};
    
    @media (min-width: 1200px) {
        display: block;
        width: 70%;
        margin-left: 0;
    }
`
export const StyledSizeContainer = styled.div`
    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`

export const StyledQuantityContainer = styled.div`
    margin: calc(1rem + 1vw) 0;

    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`

export const StyledCartContainer = styled.div`
    padding-bottom: calc(1rem + 1vw);

    @media (min-width: 1200px) {
        text-align: left;
        width: 100%;
    }
`