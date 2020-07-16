import React from 'react';
import {useField} from 'formik'
import {InputContainer,InputText} from '../style/style.js'
import * as Yup from 'yup';


//Field 

export const CustomTextInput = ({label,...props}) => {
    const [field,meta] = useField(props);

   return (
    <InputContainer>
        <label htmlFor={props.name}>{label} </label>
        <InputText {...props} {...field}/>
        {meta.touched && meta.error ?( <p>{meta.error}</p> ): null}
    </InputContainer>
   )
}


//SignUpValidation

export const SignUpSchema = Yup.object().shape({
    email: Yup
    .string()
    .min(6, 'Email has to be longer than 6 characters!')  
    .email('Invalid email')
    .required('Email is required!'),

    username: Yup.string()
    .min(6, 'Username has to be longer than 6 characters!')
    .required('Username is required!'),

    password: Yup.string()
    .required('Password is required! ') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Invalid password'
        
      ),

    passwordConfirmation: Yup.string()
    .required("Repeat Password !")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      
})


//Sign In validation

export const SignInSchema = Yup.object().shape({
    email: Yup
    .string()
    .min(6, 'Email has to be longer than 6 characters!')  
    .email('Invalid email')
    .required('Email is required!'),
    
   

    password: Yup.string()
    .required('Password is required! ') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Invalid password'
      )
})
