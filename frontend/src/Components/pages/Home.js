import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Menu from '../Navbar/Menu'
import HeroSection from '../HeroSection/HeroSection'
import Announcement from '../Stuff/Announcement'
import Categories from '../Categories/Categories'
import NewsLetter from '../Stuff/NewsLetter'
import Products from '../Products/Products'
import styled from '@emotion/styled'
import NavbarBottom from '../Navbar/NavbarBottom'
import Meta from '../Stuff/Meta'

const TextInfoCat = styled.h1`
  font-family: 'Poynter';
  font-size: 3.5rem;
  text-align: center;

  @media screen and (max-width: 600px){
    display: none;
  }
`

const TextInfoCloth = styled.h1`
  font-family: 'Poynter';
  font-size: 3.5rem;
  text-align: center;

  @media screen and (max-width: 600px){
    margin: 0px;
    font-size: 2.2rem;
  }
`


const Home = () => {
    return (
      <>
          <Meta/>
          <Announcement/>
            <Navbar />
             <Menu />
               <HeroSection/>
               <TextInfoCat>
                Our Categories
              </TextInfoCat>
                 <Categories />
                 <TextInfoCloth>
                Our Clothing
              </TextInfoCloth>
                <Products />
              <NewsLetter />
          <Footer/>
          <NavbarBottom/>
      </>
  
    )
}

export default Home
