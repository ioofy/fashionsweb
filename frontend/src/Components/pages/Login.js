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
    position: absolute;
    margin-top: 41rem;
    font-size: 17px;
    color: #111;

    @media screen and (max-width: 320px){
        margin-top: 39rem;
        font-size: 15px;
    }

`

const Contact = styled.a`
    font-size: 17px;
    text-decoration: none;
    color: rgb(255,118,117);
    font-weight: bold;

    @media screen and (max-width: 320px){
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
