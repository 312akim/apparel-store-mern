import styles from 'styled-components';
import COLORS from '../../../shared/colorScheme'

export const MainContactContainer = styles.div`
    padding-bottom: 4rem;
    background: ${COLORS.primaryLight};
`

export const ContactHeader = styles.div`

`

export const ContactHeaderText = styles.div`

`

export const FormFieldContainer = styles.div`
    padding-top: 4rem;
`

export const FieldLabel = styles.label`
    display: block;
    width: 20%;
    margin-left: 40%;
    color: ${COLORS.primaryLight};
    background: ${COLORS.primaryHighlight};
`

export const WarningText = styles.div`
    color: red;
`

export const FieldInput = styles.input`
    width: 40%;
    background: ${COLORS.secondaryLight};
`

export const FieldTextArea = styles.textarea`
    width: 40%;
    height: 4rem;
    background: ${COLORS.secondaryLight};
`

export const FormSubmitButton = styles.button`
    margin-top: 4rem;
`