import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const FooterContainer = styles.div`
    background: ${COLORS.primaryHighlight};
    color: ${COLORS.secondaryLight};
    min-height: 10vh;
    padding: 5vh 0;
`