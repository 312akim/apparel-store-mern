import React from 'react';
import { Formik, Field, Form } from 'formik';


const ContactPage = () => {
    return (
        <>
            <div>
                This is the Contact Us page!
            </div>
            <div>
                <h1>Sign Up</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        email: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field className="formField" id="name" name="name" placeholder="Jane Doe" />
                    <label htmlFor="feedback">Message</label>
                    <Field className="formField" id="feedback" name="feedback" placeholder="Type Here" />
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        className="formField"
                    />
                    <button type="submit">Submit</button>
                </Form>
                </Formik>
            </div>
        </>
    )
}

export default ContactPage;