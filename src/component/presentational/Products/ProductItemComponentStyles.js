import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';
import { fontSizeRegular } from '../../../shared/fontsTheme';

export const ItemDisplayCard = styles.div`
    width: 80%;
    height: 7em;
    margin: 5% 10%;
    border: solid black 1px;
    border-color: ${COLORS.secondaryDark};
    background: ${COLORS.secondaryLight};

    :hover {
        box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
        border: none;
    }

    @media (min-width: 576px) {
        display: inline-block;
        width: 20%;
        height: 16rem;
        margin: 0 2%;
        margin-top: 2%;
        vertical-align: bottom;
        width: 40%;
    }

    @media (min-width: 1200px) {
        width: 21%;
        height: 20rem;
    }
`

export const ItemDisplayImg = styles.img`
    display: inline-block;
    float: left;
    width:  70%;
    height: 100%;
    object-fit: cover;
    padding-bottom: 0;

    @media (min-width: 576px) {
        display: block;
        width: 100%;
        height: 80%;
    }
`

export const ItemDisplayBody = styles.div`
    display: inline-block;
    width: 30%;
    padding-top: 8%;
    padding-bottom: 10%;
    color: black;

    @media (min-width: 576px) {
        display: block;
        width: 100%;
        height: 20%;
    }
`

export const ItemDisplayName = styles.div`
    display: inline-block;
    padding: 2% 5% 0 5%;
    font-size: ${fontSizeRegular};

    @media (min-width: 576px) {
        padding-top: 3%;
    }

    @media (min-width: 1200px) {
        padding-bottom: 5%;
    }
`