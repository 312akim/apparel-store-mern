import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const NavigationBar = styles.div`
    background: ${COLORS.primaryLight};
`

export const LogoImg = styles.img`
    height: 40px;
    margin-right: 15px;
`

export const StyledCartIcon = styles.i`
    margin-bottom: 4px;
    color: black;
    
    :hover {
        color: ${COLORS.primaryDark};
    }
`