import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div
`
    display: flex;
    height: 40px;
    background-color: teal;
    color: white;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
    font-family: Favfont;

    @media screen and (max-width: 960px){
        font-size: 1rem;
    }

    @media screen and (max-width: 414px){
        font-size: 0.9rem;
        text-align: center;
    }

    @media screen and (max-width: 375px){
        font-size: 1rem;
    }

`


const Announcement = () => {
    return (
        <Container>
            🎉 Super Deal! Free shipping on orders overs IDR 720k. Get it now!
        </Container>
    )
}

export default Announcement
