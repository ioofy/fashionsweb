import React, { useContext, useState, useEffect } from 'react'
import { AccountContext } from './accountContext'
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from './common'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import { Marginer } from './marginer'
import { register } from '../../actions/userActions'
import { useHistory } from 'react-router-dom'

const SignupForm = ({ location }) => {

    let history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location?.search ? location?.search.split('=')[1] : "/login/accountcontext=register/auth/lang=en"

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
            window.location.reload()
        }

    }, [history, userInfo, redirect])
    
    const submitHandler = (e) => {

        e.preventDefault()
        // DISPATCH REGISTER
        if(password !== confirmPassword){
            setMessage('😐 Password do not match')
        }
        else if(password.length < 6){
            setMessage('❌ Password to short')
        }
        else {
            dispatch(register(name, email, password))
        }
        
    }

    const { switchToSignin } = useContext(AccountContext)

    useEffect(() => {
        document.title = "Daftar sekarang untuk mulai mencari fashion favorit anda sekarang juga!"
      }, [])

    return(
            <BoxContainer>
            {message && 
                <Message variant='danger' width="14rem" height="3.2rem">{message}</Message>
            }
            {loading && <Loader margin= '20px auto' />}
            {error && 
                <Message variant='danger' width="14rem" height="3.2rem">{error}</Message>
            }

                <FormContainer onSubmit={submitHandler}>
                    
                    <Input type="name" placeholder="👉🏼 Your Name" id="name" value={name} 
                    onChange={(e) => setName(e.target.value)} required/>
                    <Input type="email" placeholder="📧 Your Email" id="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} required/>
                    <Input type="password" placeholder="🔑 Your Password" id="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} required/>
                    <Input type="password" placeholder="🔑 Confirm Your Password" id="confirmPassword" value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} required/>

                    <Marginer direction="vertical" margin="1em" />
                    <SubmitButton type="submit">Register</SubmitButton>
                </FormContainer>
                    <MutedLink>Already have an account? <BoldLink onClick={switchToSignin}>Sign in</BoldLink></MutedLink>
            </BoxContainer>
       
    )
}

export default SignupForm