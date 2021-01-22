import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';
import { fontSizeSecondaryHeader } from '../../../shared/fontsTheme';

export const ProductContainer = styles.div`
    width: 100%;
    background: ${COLORS.primaryLight};
    padding-top: 3%;
    padding-bottom: 3%;
`

export const ProductHeader = styles.h2`
    display: block;
    color: black;
    margin: 0 auto;
    font-size: ${fontSizeSecondaryHeader};  
`