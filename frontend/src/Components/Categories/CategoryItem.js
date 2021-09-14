import React from 'react'
import styled from '@emotion/styled/macro'

const CategoryWrapper = styled.div
`

`

const Image = styled.img`
    width: 115%;
    object-fit: cover;
    heigt: 100%;
    border-radius: 15px;
     -webkit-filter: brightness(50%);
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: bold;

`


const Button = styled.button`
    border: none;
    padding: 10px;
    width: 8rem;
    height: 2.4rem;
    border-radius: 25px;
    bacgkround-color: white;
    color: #253F3F;
    font-family: "Favfont";
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;

`

const Container = styled.div
`
    position: relative;
    display: flex;
    height: 50vh;
    flex: 1;
    margin: 70px 50px;
    justify-content: center;

    @media screen and (max-width: 848px){
        margin: 70px 0px;
        height: 40vh;
        transform: scale(80%);
    }

    @media screen and (max-width: 600px){
        display: none;
    }

    &:hover ${Image}{
        -webkit-filter: brightness(100%);
        -webkit-transition: all 0.5s;
        opacity: 0.6
    }

    &:hover ${Info}{
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }

    &:hover ${Title} {
        color: #003638;
        text-shadow: 0px 2px 6px rgb(0, 0, 0, 25%);
    }

    &:hover ${Button} {
        color: #fff;
        background-color: #253F3F;
    }
`

const CategoryItem = ({ item }) => {
    return (
        <CategoryWrapper>
            <Container>
                <Image src={ item.img }/>
                <Info>
                    <Title>{ item.title }</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
        </CategoryWrapper>
    )
}

export default CategoryItem
