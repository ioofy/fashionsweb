import React from 'react'
import styled from '@emotion/styled'
import { AccountBox } from '../accountBox'

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`
const NeedHelp = styled.p`
    margin-top: -13rem;
    font-size: 17px;
    color: #111;

    @media screen and (max-width: 540px){
        margin-top: -1rem;
        font-size: 15px;
    }

    @media screen and (max-width: 320px){
        margin-top: 0.5rem;
    }

    @media screen and (max-width: 280px){
        margin-top: -2rem;
    }


`

const Contact = styled.a`
    font-size: 17px;
    text-decoration: none;
    color: rgb(255,118,117);
    font-weight: bold;

    @media screen and (max-width: 540px){
        font-size: 15px;
    }
`

const Login = () => {

    return (
        <>
            <Container>
                <AccountBox/>
                <NeedHelp>Need help?<Contact> Contact a customer service</Contact></NeedHelp>
            </Container>
        </>
    )
}

export default Login
