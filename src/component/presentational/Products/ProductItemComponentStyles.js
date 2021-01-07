import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const ItemDisplayCard = styles.div`
    width: 80%;
    height: 7em;
    margin: 5% 10%;
    border: solid black 1px;
    border-color: ${COLORS.secondaryDark};
    background: ${COLORS.secondaryLight};


    @media (min-width: 576px) {
        display: inline-block;
        width: 20%;
        height: 16rem;
        margin: 0 2%;
        margin-top: 2%;
        vertical-align: bottom;
        width: 40%;
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {
        
    }

    @media (min-width: 1200px) {
        width: 21%;
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
        height: 70%;
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {

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
        height: 30%;
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {

    }
`

export const ItemDisplayName = styles.div`
    display: inline-block;

    @media (min-width: 576px) {
        padding: 10% 15% 0 15%;
    }

    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {
        padding: 5% 15% 0 15%;
        font-size: 130%;
    }

    @media (min-width: 1200px) {

    }
`