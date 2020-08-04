import React ,{useEffect}from 'react';
import {Formik,Form} from 'formik'
import {Container,ImageSection,InputSection,ButtonsContainer,ErrorMessage} from '../../components/style/style'
import {CustomTextInput,SignInSchema} from '../../components/formComponents'
import Loader from '../../components/loader'
import history from '../../history'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import loginUser from '../../data/operations/login.operation'

//Form with formik

const SignIn = ({success,error,loading,loginUser,logOutSuccess}) =>{

    useEffect(()=>{

        if(success && logOutSuccess) history.push('/')

    },[success])
    

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
                        {!success? <ErrorMessage>{error}</ErrorMessage> : null}
                        {loading? <Loader/> : null}
                        <ButtonsContainer>
                            <button type="submit">Sign In</button>
                            <Link to="/SignUp">Sign Up <i className="fas fa-arrow-right"></i></Link>
                        </ButtonsContainer>
                    </Form>
                )}
                </Formik>
            </InputSection>
        </Container>
    )
}

const mapStateToProps = state =>({
    success: state.loginReducer.success,
    error: state.loginReducer.error,
    loading: state.loginReducer.loading,
    logOutSuccess: state.logOutReducer.success
})

const mapDispatchToProps = dispatch =>({
    loginUser: (User) => dispatch(loginUser(User))
})

const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(SignIn);

export default ConnectedApp;


