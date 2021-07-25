import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const StyledMainFooterContainer = styled.div`
    position: relative;
    z-index: 10;
    background: ${COLORS.primaryHighlight};
    color: ${COLORS.secondaryLight};
    height: 32vh;
    padding-top: 2vh;
    padding-bottom: 1vh;
    bottom: 0;

    @media (min-width: 768px) {
        height: 26vh;
    }
`
export const StyledStaticEmailSignupContainer = styled.div`
    width: 100%;
    margin-top: 2vh;

    @media (min-width: 768px) {
        padding: 0 15%;
    }

    @media (min-width: 992px) {
        padding: 0 20%;
    }

    @media (min-width: 1200px) {
        padding: 0 30%;
    }
`

// Floating signup
export const StyledFloatingSignupContainer = styled.div`
    text-align: center;
    border: ${COLORS.primaryDark} 2px solid;
    height: 7.5rem;
    width: 50%;
    margin-left: 25%;
    background: ${COLORS.primaryHighlight};
    color: ${COLORS.secondaryLight};
    bottom: 3vh;
    z-index: 5;

    @media (min-width: 992px) {
        margin-left: 30%;
        width: 40%;
    }

    @media (min-width: 1200px) {
        margin-left: 40%;
        width: 20%;
    }
`

export const StyledFloatingSignupExit = styled.button`
    position: absolute;
    top: -2px;
    right: -2px;
    float: right;
    background: none;
    border: none;
    color: white;

    :hover {
        color: ${COLORS.primaryDark};
    }
`

export const StyledEmailSignupLabel = styled.label`
    margin-top: 0.5rem;
    display: block;
`


export const StyledEmailSignupInput = styled.input`
    display: inline-block
    width: 80%;
    margin-top: 0.5rem;

    @media (min-width: 768px) {
        width: 70%;
        margin-left: 5%;
        margin-right: 5%;
    }
`

export const StyledEmailSignupButton = styled.button`
    display: inline-block;
    background-color: ${COLORS.primaryHighlight};
    border: 1px solid white;
    margin-top: 8px;
    margin: 10px auto;
    color: white;
    margin-right: 5%;

    :hover {
        background-color: ${COLORS.primaryDark};
        transform: scale(1.2,1.2);
    }
`

export const StyledFooterSocialIconsContainer = styled.div`
    display: inline-block;
    height: 50%;
    width: 100%;
`

export const StyledFooterNavigationContainer = styled.div`
    display: inline-block;
    height: 100%;
    width: 50%;
`

export const StyledFooterLinks = styled.div`
    color: white;
    padding-bottom: 8%;

    :hover {
        color: ${COLORS.primaryDark};
        i {
            transform: scale(1.3,1.3);
        }
    }

    @media (min-width: 1200px) {
        padding-bottom: 3%;
    }
`

export const StyledFooterCopyrightContainer = styled.div`
    height: 20%;
    padding-top: 1vh;
    padding-bottom: 1vh;
    color: white;
    background: ${COLORS.primaryHighlight};
`

export const StyledIconContainer = styled.div`
    display: inline-block;
    padding: 0 3%;
`

export const StyledLeftFooterContainer = styled.div`
    display: inline-block;
    width: 50%;
    padding-left: 7%;

    @media (min-width: 768px) {
        padding-left: 15%;
    }
`

export const StyledRightFooterContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    height: 80%;
    width: 50%;
    padding-right: 7%;

    @media (min-width: 768px) {
        padding-right: 15%;
    }

    @media (min-width: 992px) {
        height: 70%
    }

    @media (min-width: 1200px) {
        height: 60%
    }
`