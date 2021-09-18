import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const FooterContainer = styled.div
`
    background-color: #C5DCDD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const FooterLinksContainer = styled.div
`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 600px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div
`
    display: flex;
    @media screen and (max-width: 600px){
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-family: 'Favfont';
    margin: 25px;
    padding-top: 10px;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }

    @media (max-width: 1024px){
        margin: 10px;
        padding-top: 20px;
    }

    @media (max-width: 834px){
        margin: 0px;
        text-align: center;
    }
`

export const FooterLinkTitle = styled.h2`
    margin-bottom: 30px;
    font-weight: bold;
    color: #111;
    font-size: 1.3rem;

    @media screen and (max-width: 600px){
        font-size: 1.7rem;
    }

    @media screen and (max-width: 414px){
        font-size: 1.3rem;
    }
`

export const FooterLink = styled(Link)`
    color: #111;
    text-decoration: none;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 600px){
        font-size: 1.6rem;
    }

    @media screen and (max-width: 540px){
        font-size: 1.2rem;
    }
    &:hover{
        color: #F46F40;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    z-index: 4;
    @media screen and (max-width: 848px){
        z-index: 1;
    }

`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }

    @media (max-width: 1024px){
        width: 90%;
    }

`

export const SocialLogo = styled.div`
    color: gray;
    justify-self: start;
    font-size: 1.2rem;
    justify-content: space-between;
    display: flex;
    font-weight: 600;
    align-items: center;
    margin-bottom: 20px;

    @media(max-width: 360px){
        font-size: 1.1rem;
    }

    @media screen and (max-width: 600px){
        text-align: center;
    }

`

export const Alrights = styled(Link)`
    text-decoration: none;
    padding-left: 8px;
    padding-right: 8px;
    color: gray;
    &:hover {
        color: #F46F40;
        transition: 0.3s ease-out;
    }
`

export const Privacy = styled(Link)`
    text-decoration: none;
    color: gray;
    &:hover {
        color: #F46F40;
        transition: 0.3s ease-out;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-bottom: 15px;
`

export const SocialIconLink = styled.a`
    color: #111;
    font-size: 25px;

    &:hover{
        transform: scale(1.2);
        transition: 0.5s ease;
    }

`
