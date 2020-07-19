import React from 'react';
import {Formik,Form} from 'formik'
import {Container,ImageSection,InputSection,ButtonsContainer} from '../../components/style/style'
import {CustomTextInput,SignInSchema} from '../../components/formComponents'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import loginUser from '../../data/operations/login.operation'

//Form with formik


const SignIn = ({loginUser}) =>{

    return(
        <Container>
            <ImageSection img="signIn"/>
            <InputSection >
                <Formik
                    initialValues={{email:'',password: ''}}
                    validationSchema={SignInSchema}
                    onSubmit={(values)=>{
                        loginUser(values)
                        
                    }}
                >{props=>(
                    <Form>
                        <h1>Sign In</h1>

                        <CustomTextInput name="email" placeholder="Enter email adress" type="text" label="Email"/>
                        <CustomTextInput name="password" placeholder="Enter password" type="password" label="Password"/>
                            
                        <ButtonsContainer>
                            <button type="submit">Sign In</button>
                            <Link to="/signUp">Sign Up <i className="fas fa-arrow-right"></i></Link>
                        </ButtonsContainer>
                    </Form>
                )}
                </Formik>
            </InputSection>
        </Container>
    )
}

const mapDispatchToProps = dispatch =>({
    loginUser: (User) => dispatch(loginUser(User))
})

const ConnectedApp = connect(null,mapDispatchToProps)(SignIn);

export default ConnectedApp;


