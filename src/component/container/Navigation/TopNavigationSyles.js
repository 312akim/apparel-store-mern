import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme';

export const NavigationBar = styled.div`
    background: ${COLORS.primaryLight};
`

export const LogoImg = styled.img`
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