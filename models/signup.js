import * as Yup from "yup";

export const signup_schema = Yup.object({
    username:Yup.string().required('username is required'),
    password:Yup.string().required('password is required').min(5 ,'password must be at least 5 character')
})