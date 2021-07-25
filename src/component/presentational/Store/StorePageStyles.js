import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme';
import { fontSizeSecondaryHeader } from '../../../shared/fontsTheme';

export const StyledProductContainer = styled.div`
    width: 100%;
    background: ${COLORS.primaryLight};
    padding-top: 3%;
    padding-bottom: 3%;
`

export const StyledProductHeader = styled.h2`
    display: block;
    color: black;
    margin: 0 auto;
    font-size: ${fontSizeSecondaryHeader};  
`