import React, { useContext, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import { AccountContext } from './accountContext'
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from './common'
import { Marginer } from './marginer'
import { login } from '../../actions/userActions'
import { useHistory } from 'react-router-dom'

const LoginForm = ( { location } ) => {
    
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location?.search ? location?.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push("/")
        }
    }, [history, userInfo, redirect])
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    
    const { switchToSignup } = useContext(AccountContext);

    return(
            <BoxContainer type="top">
            {error && 
                <Message variant='danger' width="14rem" height="3.2rem">{error}</Message>
            }
            {loading && <Loader margin= '20px auto' />}
                <FormContainer onSubmit={submitHandler}>
                    <Input type="email" placeholder="📧 Your Email" id="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} required/>

                    <Input type="password" placeholder="🔑 Your Password" id="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} required/>

                    <Marginer direction="vertical" margin="1em" />
                    <SubmitButton type="submit">Sign In</SubmitButton>
                </FormContainer>
                    <MutedLink type="right">Forget your password?</MutedLink>
                    <MutedLink>Don't have an account? 
                       {/* link to register not effect at all in history.push */}
                        <BoldLink onClick={switchToSignup}>
                            Register
                        </BoldLink>
                    </MutedLink>
            </BoxContainer>
    )
}

export default LoginForm