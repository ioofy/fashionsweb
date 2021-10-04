import styled from "@emotion/styled"

export const Header = styled.nav`
    height: 85px;
    background: ${({active}) => active ? "#F8D3E2" : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)"};
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    max-width: 1290px;

    @media screen and (max-width: 1280px){
        max-width: 1100px;
    }

    @media (max-width: 1024px){
        max-width: 935px !important;
    }
`

export const NavLogo = styled.a`
    color: ${({active}) => active ? "#DF2E2E" : "#0D1137"};
    justify-self: flex-start;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    margin-top: 10px;
    font-family: 'Pacifico', cursive;
    
    @media screen and (max-width: 960px){
        display: none;
    }

    &:hover{
        color: ${({active}) => active ? "#0D1137" : "#FF95C5"};
    }
`

export const NavIcon = styled.div`
    margin-left: 152px;
    margin-top: 22px;
    position: absolute;
    text-align: center;
    flex-wrap: wrap;
    gap: 32px;
    display: flex;


    @media screen and (max-width: 960px){
        display: none;
    }
    
`

export const NavLinks = styled.p`
    color: #111;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover{
        color: #F46F40;
    }

`
