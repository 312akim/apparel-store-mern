import COLORS from "../../../shared/colorScheme"
import styled from "styled-components"
import { fontSizeRegular } from '../../../shared/fontsTheme'

export const StyledAboutUsContainer = styled.div`
    background: ${COLORS.primaryLight};
`;

export const StyledTopContainer = styled.div`
    width: 100%;
`

export const StyledAboutUsHero = styled.img`
    width: 100%;
`

export const StyledMainContainer = styled.div`
    width: 100%;
    padding-bottom: 3vh;
    padding-top: 4vh;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        padding-bottom: 10vh;
    }
`

export const StyledMainContainerImage = styled.img`
    width: 100%;
    padding: 0 10vw 2vh 10vw;


    @media (min-width: 768px) {
        display: inline-block;
        width: 50%;
        vertical-align: top;
        padding: 3vh 7.5vw 2vh 0vw;
    }
`

export const StyledMainContainerCard = styled.div`
display: block;

@media (min-width: 768px) {
    display: inline-block;
    width: 50%;
    padding: 2vh 5vw 0 7.5vw;
}
`

export const StyledMainContainerCardHeader = styled.h2`
    height: 50%;
    padding: 2vh 20vw 0 20vw;
    
    @media (min-width: 768px) {
        padding: 2vh 3vw 0 3vw;
        height: 20%;
    }

    @media (min-width: 1200px) {
        margin-top: 6vh;
    }
`

export const StyledMainContainerCardText = styled.p`
    height: 50%;
    padding: 2vh 20vw 2vh 20vw;
    font-size: ${fontSizeRegular};

    @media (min-width: 768px) {
        padding: 4vh 3vw 0 3vw;
        height: 80%;
    }

    @media (min-width: 1200px) {
        padding: 2vh 7vw 0 7vw;
    }
`

