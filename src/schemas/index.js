import * as yup from 'yup';

const nameRules = /[a-zA-Z]/;

export const basicSchema = yup.object().shape({
    email: yup
            .string()
            .email("Please enter a valid email")
            .required("This is required field"),
    name: yup
            .string()
            .matches(nameRules, {message: 'Please enter your name in english!'})
            .min(2, ("at least 2 characters"))
            .required("This is required field"),
    message: yup
            .string()
            .min(10, ("at least 10 characters"))
            .required("This is required field"),
    terms: yup
            .boolean()
            .oneOf([true], "You must accept the pricing policy terms and conditions")
})