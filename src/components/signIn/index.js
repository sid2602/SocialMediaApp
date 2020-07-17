import React from 'react';
import {Formik,Form,Field} from 'formik'
import {Container,ImageSection,InputSection,ButtonsContainer} from '../style/style'
import {CustomTextInput,SignInSchema} from '../formComponents'
import * as Yup from 'yup';


//Form with formik


const SignIn = () =>{

    return(
        <Container>
            <ImageSection img="signIn"/>
            <InputSection >
                <Formik
                    initialValues={{email:'',password: ''}}
                    validationSchema={SignInSchema}
                    onSubmit={(values)=>{
                        console.log(values)
                        
                    }}
                >{props=>(
                    <Form>
                        <h1 style={{fontSize:"50px"}}>Sign In</h1>

                        <CustomTextInput name="email" placeholder="Enter email adress" type="text" label="Email"/>
                        <CustomTextInput name="password" placeholder="Enter password" type="password" label="Password"/>
                            
                        <ButtonsContainer>
                            <button type="submit">Sign In</button>
                            <a href="#dasdsa">Sign Up <i className="fas fa-arrow-right"></i></a>
                        </ButtonsContainer>
                    </Form>
                )}
                </Formik>
            </InputSection>
        </Container>
    )
}

export default SignIn;


