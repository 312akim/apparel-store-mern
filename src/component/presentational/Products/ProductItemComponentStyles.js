import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const ItemDisplayCard = styles.div`
    width: 80%;
    height: 113px;
    margin: 5% 10%;
    border: solid black 1px;
    border-color: ${COLORS.secondaryDark};
    background: grey;

    @media (min-width: 480px) {
        display: inline-block;
        width: 20%;
        height: 16rem;
        margin: 0 2%;
        margin-top: 2%;
        background: ${COLORS.secondaryLight};
    }
`
//Need to fix empty pixel
// https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
export const ItemDisplayImg = styles.img`
    display: inline-block;
    float: left;
    width:  100px;
    height: 100px;
    object-fit: cover;
    padding-bottom: 0;

    @media (min-width: 480px) {
        display: block;
        width: 100%;
        height: 70%;
    }
`

export const ItemDisplayBody = styles.div`
    display: inline-block;
    width: 50%;
    padding: 0;

    @media (min-width: 480px) {
        display: block;
        background: white;
        height: 30%;
    }
`

export const ItemDisplayPrice = styles.div`
@media (min-width: 480px) {    
    display: flex;
    justify-content: center;
    width: 200%;
}
`

export const ItemDisplayCartIcon = styles.div`
@media (min-width: 480px) {    
    display: flex;
    justify-content: center;
    width: 200%;
}
`