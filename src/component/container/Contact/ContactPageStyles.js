import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme'
import { fontSizeLabelInput } from '../../../shared/fontsTheme';

export const StyledMainContactContainer = styled.div`
    padding-bottom: 4rem;
    background: ${COLORS.primaryLight};
`

export const StyledFormFieldContainer = styled.div`
    padding-top: 4rem;
`

export const StyledFieldLabel = styled.label`
    display: block;
    width: 20%;
    margin-left: 40%;
    color: ${COLORS.primaryLight};
    background: ${COLORS.primaryHighlight};
    font-size: ${fontSizeLabelInput};
`

export const StyledWarningText = styled.div`
    color: red;
`

export const StyledFieldInput = styled.input`
    width: 40%;
    background: ${COLORS.secondaryLight};
    font-size: ${fontSizeLabelInput};
`

export const StyledFieldTextArea = styled.textarea`
    width: 40%;
    height: 4rem;
    background: ${COLORS.secondaryLight};
    font-size: ${fontSizeLabelInput};
    border: solid rgb(118, 118, 118) 2px;
    border-top: solid black 2px;
    border-left: solid black 2px;
`