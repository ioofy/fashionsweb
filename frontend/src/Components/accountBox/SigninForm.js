import React, { useContext, useState, useEffect } from 'react'
import { AccountContext } from './accountContext'
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from './common'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import { login } from '../../actions/userActions'
import { useHistory } from 'react-router-dom'
import { Marginer } from './marginer'

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
            window.location.reload()
        }
    }, [history, userInfo, redirect])

    useEffect(() => {
        document.title = "Login sekarang untuk mulai mencari produk favorit kamu sekarang juga!"
      }, [])
    
    const submitHandler = (e) => {
        e.preventDefault()
        // DISPATCH LOGIN INFO
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

                    <MutedLink type="right">Forget your password?</MutedLink>
                    <SubmitButton type="submit">Login</SubmitButton>
                    <Marginer direction="vertical" margin="0.5em" />
                </FormContainer>
                    <MutedLink>Didn't have an account? 
                        <BoldLink onClick={switchToSignup} style={{marginLeft: '5px'}}>
                            Register
                        </BoldLink>
                    </MutedLink>
            </BoxContainer>
    )
}

export default LoginForm