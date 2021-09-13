import React from 'react'
import './HeroSection.css'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Button = styled.button`
    width: 8rem;
    background-color: #253F3F;
    height: 2.8rem;
    overflow: hidden;
    border: none;
    font-family: 'Favfont';
    border-radius: 5px;
    font-size: 1.3rem;
    font-weight: 200;
    margin: 27px;
    position: absolute;
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);

    &:hover{
        background: #FF7600;
        transition: all 0.3s ease-out;
    }
`


const HeroSection = () => {
    return (
        <>
            <div className="__hero-section">
                <div className="__container">
                    <div className="__menu-container">
                        <h1 id="yzk4lcx">Explore More</h1>
                        <h1 id="zcxjk23">Your Fashion’s</h1>
                        <Link to="/login"> <Button> Get Started </Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HeroSection
