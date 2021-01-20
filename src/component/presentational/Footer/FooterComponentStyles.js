import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const MainFooterContainer = styles.div`
    position: relative;
    z-index: 10;
    background: ${COLORS.primaryHighlight};
    color: ${COLORS.secondaryLight};
    height: 30vh;
    padding-top: 2vh;
    padding-bottom: 3vh;
    bottom: 0;

    @media (min-width: 768px) {
        height: 26vh;
    }
`
export const StaticEmailSignupContainer = styles.div`
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
export const FloatingSignupContainer = styles.div`
    text-align: center;
    border: ${COLORS.primaryDark} 2px solid;
    height: 7rem;
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

export const FloatingSignupExit = styles.button`
    position: absolute;
    top: 0;
    right: 0;
    float: right;
    width: 2rem;
    height: 2rem;
`

export const EmailSignupText = styles.div`
    display: block;
`


export const EmailSignupInput = styles.input`
    width: 80%;
    margin-top: 0.5rem;

    @media (min-width: 768px) {
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
    }
`

export const EmailSignupButton = styles.button`
    margin-top: 0.5rem;
`

export const FooterSocialIconsContainer = styles.div`
    display: inline-block;
    height: 50%;
    width: 100%;
`

export const FooterNavigationContainer = styles.div`
    display: inline-block;
    height: 100%;
    width: 50%;
`

export const FooterCopyrightContainer = styles.div`
    height: 20%;
    padding-top: 2vh;
    padding-bottom: 2vh;
    background: ${COLORS.primaryHighlight};
`

export const IconContainer = styles.div`
    display: inline-block;
    padding: 0 2%;
`

export const LeftFooterContainer = styles.div`
    display: inline-block;
    width: 50%;
    padding-left: 10%;

    @media (min-width: 768px) {
        padding-left: 15%;
    }
`

export const RightFooterContainer = styles.div`
    display: inline-block;
    vertical-align: top;
    height: 80%;
    width: 50%;
    padding-right: 10%;

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