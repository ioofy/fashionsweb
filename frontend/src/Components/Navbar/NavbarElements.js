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
    color: ${({active}) => active ? "#E52165" : "#0D1137"};
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
    margin-left: 150px;
    margin-top: 22px;
    position: absolute;
    text-align: center;
    flex-wrap: wrap;
    gap: 30px;
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


export const SearchContainer = styled.div`
    position: relative;
    width: 970px;
    height: 45px;
    margin-top: 15px;
    background: #F7F6F2;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    display: flex;
    border-radius: 25px;
    padding: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    
    @media screen and (max-width: 960px){
        margin: auto;
        width: 80%;
    }

    @media (max-width: 1024px){
        max-width: 600px !important;
    }

    @media screen and (max-width: 1280px){
        max-width: 770px;
    }
`

export const SearchInput = styled.input`
    padding-left: 50px;
    margin-top: 3px;
    outline: none !important;
    border: none !important;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    font-size: 16px;
    border: 1px solid transparent;
    font-weight: bold;
    font-family: 'Favfont';

    &::placeholder {
        color: gray;
    }
        
    @media screen and (max-width: 960px){
        padding-left: 50px;
    }

`

export const IconButton = styled.button`
    position: relative;
    box-sizing: border-box;
    margin-top: -2px;
    margin-left: 4px;
    height: 30px;
    width: 30px;
    padding: 4px;
    border: none;
    z-index: 1;
    cursor: pointer;
    background: #FF95C5;
    border-radius: 50%;
    color: #fff;
    &:hover {
        color: #111;
        &:after {
            opacity: 1;
            transform: scale(1);

        }
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        height: 100%;
        border-radius: 50%;
        z-index: -1;
        background : #000;
        transition: 0.2s ease;
        transform: scale(0.6);
    }
`

