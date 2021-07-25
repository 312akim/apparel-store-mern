import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const StyledNavigationBar = styled.div`
    background: ${COLORS.primaryLight};
`

export const StyledLogoImg = styled.img`
    height: 40px;
    margin-right: 15px;
`

export const StyledCartIcon = styled.i`
    margin-bottom: 4px;
    color: black;
    
    :hover {
        color: ${COLORS.primaryDark};
    }
`