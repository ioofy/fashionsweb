import styled from "@emotion/styled"
import { Link } from "react-router-dom"


export const MenuList = styled.div`
    display: flex;
    justify-content: center;
`

export const MenuContainer = styled.div
`
    display: flex;
    height: 80px;
    justify-content: flex-start;
    z-index: 1;
    width: 100%;
    max-width: 1350px;
    position: absolute;
    margin-left: -40px;
    margin-top: -10px;

    @media screen and (max-width: 1280px){
        max-width: 1160px;
    }

    @media (max-width: 1024px){
        max-width: 990px;
    }
    
`

export const MainMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

`

export const MenuItem = styled.li`
    height: 20px;
    
`

export const MenuLinks = styled(Link)`
    color: #111;
    display: flex;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: 'Favfont';
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;

    &:hover{
        color: #F46F40;
    }


    @media screen and (max-width: 960px){
        display: none;
    }
`

