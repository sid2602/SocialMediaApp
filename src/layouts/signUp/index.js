import React,{useEffect} from 'react';
import {Formik,Form} from 'formik'
import {Container,ImageSection,InputSection,ButtonsContainer,ErrorMessage} from '../../components/style/style'
import {CustomTextInput,SignUpSchema} from '../../components/formComponents'
import Loader from '../../components/loader'

import {Link} from 'react-router-dom'

import history from '../../history'

//redux

import {connect} from 'react-redux'
import registerUser from '../../data/operations/register.operation'

//Form with formik

const SignUp = ({success,error,loading,registerUser}) =>{


    useEffect(()=>{

        if(success ) history.push('/SignIn')

    },[success])

    return(
        <Container>
            <ImageSection img="signUp"/>
            <InputSection signUp>
                <Formik
                    initialValues={{email:'',username: '',brithday:'',city:'',password: '',passwordConfirmation:''}}
                    validationSchema={SignUpSchema}
                    onSubmit={(values)=>{
                       registerUser(values)
                    }}
                >{props=>(
                    <Form>

                        <h1 >Sign Up</h1>

                        <CustomTextInput name="username" placeholder="Enter username" type="text" label="Username"/>
                        <CustomTextInput name="email" placeholder="Enter email adress" type="text" label="Email"/>
                        <CustomTextInput name="brithday" placeholder="Enter brithday" type="date" label="Brithday"/>
                        <CustomTextInput name="city" placeholder="Enter city" type="text" label="City"/>
                        <CustomTextInput name="password" placeholder="Enter password" type="password" label="Password"/>
                        <CustomTextInput name="passwordConfirmation" placeholder="Repeat password" type="password" label="Repeat Password"/>
                        {!success? <ErrorMessage>{error}</ErrorMessage> : null}
                        {loading? <Loader/> : null}
                        <ButtonsContainer>
                            <button type="submit">Sign Up</button>
                            <Link to="/SignIn">Sign In <i className="fas fa-arrow-right"></i></Link>
                        </ButtonsContainer>
                    </Form>
                )}

                </Formik>
            </InputSection>
        </Container>
    )
}

const mapStateToProps = state =>({
    success: state.registerReducer.success,
    error: state.registerReducer.error,
    loading: state.registerReducer.loading
})

const mapDispatchToProps = dispatch => ({
    registerUser: (User) => dispatch(registerUser(User))
})


const ConectedApp = connect(mapStateToProps,mapDispatchToProps)(SignUp);

export default ConectedApp;


