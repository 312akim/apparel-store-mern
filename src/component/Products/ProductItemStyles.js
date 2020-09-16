import styles from 'styled-components';

export const ItemDisplayCard = styles.div`
    width: 80%;
    height: 113px;
    margin: 5% 10%;
    border: solid black 6px;
    background: grey;
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
`

export const ItemDisplayBody = styles.div`
    display: inline-block;
    width: 50%;
    padding: 0;

    @media (min-width: 480px) {
        display: block;
        background: red;
    }
`

