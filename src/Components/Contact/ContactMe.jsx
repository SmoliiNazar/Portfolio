import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

import './contacMe.scss';

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
};

const BasicForm = () => {
    const {values, errors, touched, isSubmitting, handleChange, handleSubmit}
     = useFormik ({
        initialValues: {
            email: '',
            name: '',
            message: '',
            terms: false
        },
        validationSchema: basicSchema,
        onSubmit,
     });

     console.log(errors);

    return (
        <div className="form">
            <div className="title title_fz36 form-title">Contact Me</div>
            <div style={{'backgroundColor': '#f5f6fa', 'width': '100px', 'height': '1px'}} className="divider form-divider"></div>
            <form onSubmit={handleSubmit} autoComplete="off">
                
                <label className="form-label" htmlFor="name">Name</label>
                <input 
                    value={values.name}
                    onChange={handleChange}
                    id='name'
                    placeholder="Enter your name"
                    className={errors.name && touched.name? "input-error form-input" : "form-input"}
                />
                {errors.name && touched.name && (
                    <p className="error">{errors.name}</p>
                )}
                
                <label className="form-label" htmlFor="email">Email</label>
                <input 
                    value={values.email}
                    onChange={handleChange}
                    id='email'
                    placeholder="Enter your email"
                    className={errors.email && touched.email? "input-error form-input" : "form-input"}
                />
                {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                )}



                <label className="form-label" htmlFor="message">Message</label>
                <textarea 
                    value={values.message}
                    onChange={handleChange}
                    id='message'
                    placeholder="Enter your message"
                    className={errors.message && touched.message? "input-error form-textarea" : "form-textarea"}
                />
                {errors.message && touched.message && (
                    <p className="error">{errors.message}</p>
                )}
                <label className='checkbox'>
                <input 
                    type='checkbox' 
                    value={values.terms}
                    onChange={handleChange}
                    id='terms'
                    className={errors.message && touched.message? "input-error" : ""}
                />
                    Do you agree with the privacy policy?
                </label>
                {errors.terms && touched.terms && (
                    <p className="error">{errors.terms}</p>
                )}
                <button disabled={isSubmitting} className="button-85 form-btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BasicForm;