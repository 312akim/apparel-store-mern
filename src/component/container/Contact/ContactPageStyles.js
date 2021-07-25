import styled from 'styled-components';
import COLORS from '../../../shared/colorScheme'
import { fontSizeLabelInput } from '../../../shared/fontsTheme';

export const MainContactContainer = styled.div`
    padding-bottom: 4rem;
    background: ${COLORS.primaryLight};
`

export const FormFieldContainer = styled.div`
    padding-top: 4rem;
`

export const FieldLabel = styled.label`
    display: block;
    width: 20%;
    margin-left: 40%;
    color: ${COLORS.primaryLight};
    background: ${COLORS.primaryHighlight};
    font-size: ${fontSizeLabelInput};
`

export const WarningText = styled.div`
    color: red;
`

export const FieldInput = styled.input`
    width: 40%;
    background: ${COLORS.secondaryLight};
    font-size: ${fontSizeLabelInput};
`

export const FieldTextArea = styled.textarea`
    width: 40%;
    height: 4rem;
    background: ${COLORS.secondaryLight};
    font-size: ${fontSizeLabelInput};
    border: solid rgb(118, 118, 118) 2px;
    border-top: solid black 2px;
    border-left: solid black 2px;
`