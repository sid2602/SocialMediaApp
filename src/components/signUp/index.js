import React from 'react';
import {Formik,Form} from 'formik'
import {Container,ImageSection,InputSection,ButtonsContainer} from '../style/style'
import {CustomTextInput,SignUpSchema} from '../formComponents'

//Form with formik

const SignUp = () =>{

    return(
        <Container>
            <ImageSection img="signUp"/>
            <InputSection>
                <Formik
                    initialValues={{email:'',username: '',password: '',passwordConfirmation:''}}
                    validationSchema={SignUpSchema}
                    onSubmit={(values)=>{
                        
                       console.log(values)
                        
                    }}
                >{props=>(
                    <Form>

                        <h1 style={{fontSize:"50px"}}>Sign Up</h1>

                        <CustomTextInput name="username" placeholder="Enter username" type="text" label="Username"/>
                        <CustomTextInput name="email" placeholder="Enter email adress" type="text" label="Email"/>
                        <CustomTextInput name="password" placeholder="Enter password" type="password" label="Password"/>
                        <CustomTextInput name="passwordConfirmation" placeholder="Repeat password" type="password" label="Repeat Password"/>

                        <ButtonsContainer>
                            <button type="submit">Sign Up</button>
                            <a href="#dasdsa">Sign In <i className="fas fa-arrow-right"></i></a>
                        </ButtonsContainer>
                    </Form>
                )}

                </Formik>
            </InputSection>
        </Container>
    )
}

export default SignUp;


