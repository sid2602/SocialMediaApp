import React from 'react';
import {Formik,Form} from 'formik'
import {Container,ImageSection,InputSection,ButtonsContainer} from '../../components/style/style'
import {CustomTextInput,SignUpSchema} from '../../components/formComponents'


import {Link} from 'react-router-dom'

//redux

import {connect} from 'react-redux'
import registerUser from '../../data/operations/register.operation'

//Form with formik

const SignUp = ({registerUser}) =>{

    return(
        <Container>
            <ImageSection img="signUp"/>
            <InputSection signUp>
                <Formik
                    initialValues={{email:'',username: '',password: '',passwordConfirmation:''}}
                    validationSchema={SignUpSchema}
                    onSubmit={(values)=>{
                       registerUser(values)
                    }}
                >{props=>(
                    <Form>

                        <h1 >Sign Up</h1>

                        <CustomTextInput name="username" placeholder="Enter username" type="text" label="Username"/>
                        <CustomTextInput name="email" placeholder="Enter email adress" type="text" label="Email"/>
                        <CustomTextInput name="password" placeholder="Enter password" type="password" label="Password"/>
                        <CustomTextInput name="passwordConfirmation" placeholder="Repeat password" type="password" label="Repeat Password"/>

                        <ButtonsContainer>
                            <button type="submit">Sign Up</button>
                            <Link to="/">Sign In <i className="fas fa-arrow-right"></i></Link>
                        </ButtonsContainer>
                    </Form>
                )}

                </Formik>
            </InputSection>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    registerUser: (User) => dispatch(registerUser(User))
})


const ConectedApp = connect(null,mapDispatchToProps)(SignUp);

export default ConectedApp;


