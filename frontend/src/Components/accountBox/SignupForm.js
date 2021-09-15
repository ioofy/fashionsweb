import React, { useContext } from 'react'
import { AccountContext } from './accountContext'
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from './common'
import { Marginer } from './marginer'

const SignupForm = () => {
    
    const { switchToSignin } = useContext(AccountContext);

    return(
        <>
            <BoxContainer>
                <FormContainer>
                    <Input type="name" placeholder="👉🏼 Your Name" id="name" required/>
                    <Input type="email" placeholder="📧 Your Email" id="email" required/>
                    <Input type="password" placeholder="🔑 Your Password" id="password" required/>
                    <Input type="password" placeholder="🔑 Confirm Your Password" id="password" required/>
                    <Marginer direction="vertical" margin="1em" />
                    <SubmitButton type="submit">Register</SubmitButton>
                </FormContainer>
                    <MutedLink>Already have an account? <BoldLink onClick={switchToSignin} >Sign in</BoldLink></MutedLink>
            </BoxContainer>
        </>
    )
}

export default SignupForm