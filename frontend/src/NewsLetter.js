import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import styled from '@emotion/styled'

const Container = styled.div`
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #FDD2BF;
    margin-top: 80px;
`

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;

    @media screen and (max-width: 960px){
        font-size: 45px;
    }

    @media(max-width: 360px){
        font-size: 35px;
    }
`

const Description = styled.div`
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 20px;

    @media screen and (max-width: 960px){
        font-size: 20px;
        text-align: center;
    }

    @media screen and (max-width: 600px){
        font-size: 17px;
    }

    @media screen and (max-width: 414px){
        font-size: 16px;
    }

    @media screen and (max-width: 280px){
        font-size: 15px;
    }
`

const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 2px solid lightgray;

    @media screen and (max-width: 960px){
        justify-content: center;
        width: 90%;
    }

    @media screen and (max-width: 1024px){
         width: 70%;
    }

`

const Input = styled.input`
    border: none;
    padding-left: 20px;
    flex: 9;
    outline: none;
`

const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
`

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter📨</Title>
            <Description>Hi👋 Get timely updates from your favourite products let's subscribe now.</Description>
            <InputContainer>
                <Input placeholder="📧  Enter your email" />
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
