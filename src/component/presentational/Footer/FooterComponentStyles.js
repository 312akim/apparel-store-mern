import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const FooterContainer = styles.div`
    background: ${COLORS.primaryHighlight};
    color: ${COLORS.secondaryLight};
    height: 19vh;
    padding-top: 0.5vh;
    padding-bottom: 9vh;
`

export const FooterEmailSignupContainer = styles.div`
    text-align: center;
    height: 9vh;
    width: 50%;
    margin-left: 25%;
    background: ${COLORS.primaryHighlight};
    color: ${COLORS.secondaryLight};

    @media (min-width: 992px) {
        margin-left: 30%;
        width: 40%;
    }

    @media (min-width: 1200px) {
        margin-left: 40%;
        width: 20%;
    }
`

export const EmailSignupText = styles.div`

`

export const EmailSignupExit = styles.button`

`

export const EmailSignupInput = styles.input`
    width: 90%;
`

export const FooterSocialIconsContainer = styles.div`
    display: inline-block;
    height: 80%;
    width: 33%;
`

export const FooterNavigationContainer = styles.div`
    display: inline-block;
    height: 80%;
    width: 33%;
`

export const FooterCopyrightContainer = styles.div`
    height: 20%;
    padding-top: 1vh;
`