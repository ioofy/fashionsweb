import React,{ useState } from 'react'
import { BiSearchAlt } from "react-icons/bi"
import styled from '@emotion/styled'

const SearchContainer = styled.div`
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

const SearchInput = styled.input`
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

const IconButton = styled.button`
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

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/products/search/${keyword}`)
        }
        else{
            history.push('/')
        }
    }

    return (
    <SearchContainer>
        <IconButton type='submit' onClick={submitHandler}>
            <BiSearchAlt size={22}/>
        </IconButton>
        <SearchInput placeholder="🛍️ Search favourite products." onChange={(e) => setKeyword(e.target.value)}/>
    </SearchContainer>
    )
}

export default SearchBox
