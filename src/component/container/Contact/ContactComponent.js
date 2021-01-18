import React from 'react';
import { Formik } from 'formik';
import { MainContactContainer, FieldLabel, FieldInput, FormFieldContainer } from './ContactPageStyles';


const ContactPage = () => {
    return (
        <>
            <MainContactContainer>
                <h1>Contact Us!</h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                    }}
                    validate={values => {
                        console.log(values);
                    }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                    render={({
                        touched,
                        errors,
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit}>
                        <FormFieldContainer>
                            <FieldLabel htmlFor="name">
                                Name
                            </FieldLabel>
                            <FieldInput
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                border={errors.name && "1px solid red"}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                            />
                        </FormFieldContainer>
                        <FormFieldContainer>
                            <FieldLabel htmlFor="email">
                                Email
                            </FieldLabel>
                            <FieldInput
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                border={errors.email && "1px solid red"}
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                        </FormFieldContainer>
                        <FormFieldContainer>
                            <FieldLabel htmlFor="message">
                                Message
                            </FieldLabel>
                            <FieldInput
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                border={errors.message && "1px solid red"}
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Message"
                            />
                        </FormFieldContainer>
                        <button type="submit">Submit</button>
                    </form>
                    )}
                    >
                </Formik>
            </MainContactContainer>
        </>
    )
}

export default ContactPage;