import React from 'react'
import styled from '@emotion/styled'
import Navbar from '../Navbar/Navbar'
import NavbarBottom from '../Navbar/NavbarBottom'
import Products from '../Products/Products'
import NewsLetter from '../Stuff/NewsLetter'
import Footer from '../Footer/Footer'
import Announcement from '../Stuff/Announcement'

const Container = styled.div`
    display: flex;
    max-width: 1290px;
    margin: 0px auto;
    flex-direction: column;

    @media screen and (max-width: 1280px){
        max-width: 935px;
    }

    @media(max-width: 768px){
        max-width: 700px;
    }

    @media(max-width: 600px){
        margin: 25px;
    }
    
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 40px 0px 0px;
`

const Title = styled.h1`
    margin: 60px 0px 0px;
    font-family: 'Poynter';
    font-size : 3.8rem;
    text-align: center;

    @media(max-width: 414px){
        font-size: 2.4em;
    }
`

const FilterText = styled.span`
    font-size: 18px;
    font-weight: 600;

    @media(max-width: 320px){
        font-size: 17px;
    }

    @media screen and (max-width: 768px){
        margin-left: 35px;
    }

    @media screen and (max-width: 414px){
        margin-left: 10px;
    }

`

const Select = styled.select`
    padding: 1px;
    margin-left: 10px;
    background: transparent;
    cursor: pointer;
    outline: none;
    border: none;
`

const Option = styled.option`
`

const ProductList = () => {
    return (
    <>
        <Navbar />
          <Announcement />
            <Container>
            <Title>Our Latest Product</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>
                            Filter By :
                            <Select>
                                <Option disabled selected>Size</Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                            <Select>
                                <Option disabled selected>Color</Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </FilterText>
                    </Filter>
                </FilterContainer>
                <hr style={{marginTop: '20px', marginBottom: '-30px'}} />
            </Container>
                 <Products />
        <NewsLetter/>
        <Footer/>
        <NavbarBottom/>
    </>
    )
}

export default ProductList
