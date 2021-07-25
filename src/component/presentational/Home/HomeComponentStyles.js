import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme';
import { fontSizeRegular, fontSizeRegularPlus } from '../../../shared/fontsTheme';

// Need to fix 1024x1366 ipad pro resolution
export const StyledHeroText = styled.div`
    background: black;
    color: white;
    font: bold Helvetica;
    font-size: ${fontSizeRegularPlus};

    @media (min-width: 768px) {
        position: absolute;
        top: 25%;
        left: 10%;
        padding: 0 10px;
        padding-top: 2px;
    }

    @media (min-width: 1200px) {
        top: 45%;
        left: 5%;
    }
`

export const StyledHeroTextContainer = styled.div`
    
`

export const StyledShopButtonContainer = styled.div`
    background: ${COLORS.primaryLight};
    padding-bottom: 8%;

    @media (min-width: 576px) {
        padding-bottom: 5%;
    }

    @media (min-width: 768px) {
        position: absolute;
        top: 24%;
        left: 10%;
        padding-bottom: 0;
    }

    @media (min-width: 1200px) {
        top: 51%;
        left: 5%;
    }
`

export const StyledShopAllLinkContainer = styled.div`
    display: inline-block;
    position: absolute;
    margin-top: 2vh;
    right: -34px;
    padding: 5px 2px 2px 2px;
    margin-right: 10%;
    font-size: ${fontSizeRegular}
    color: black;

    :hover {
        color: ${COLORS.primaryDark}
    }
`

export const StyledShopAllIconContainer = styled.div`
    display: inline-block;
    padding-left: 8px;
`

export const StyledProductsContainer = styled.div`
    display: block;
`