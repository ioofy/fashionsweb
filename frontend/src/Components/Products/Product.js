import React from 'react'
import styled from '@emotion/styled/macro'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Rating from '../Stuff/Rating';

const ProductInfo = styled.div`

`

const Image = styled.img`
    max-width: 100%;
    border-radius: 20px;
    background-color: #C5DCDD;
`


const InfoHover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 50px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
`

const Container = styled.div`
    display: flex;
    flex: 1;
    width: 235px;
    margin: 15px;
    position: relative;

    @media screen and (max-width: 320px){
        width: 250px !important;
    }

    @media(max-width: 1024px){
        width: 205px;
    }

    @media screen and (max-width: 768px){
        width: 205px;
    }

    @media screen and (max-width: 600px){
        width: 220px;
    }

    @media screen and (max-width: 414px){
        width: 320px;
    }

    @media screen and (max-width: 280px){
        width: 235px !important;
    }

    &:hover ${Image}{
        -webkit-filter: brightness(60%);
    }

    &:hover ${InfoHover}{
        opacity: 1;
    }


`

const Wrapper = styled.div`
    margin-top: 80px;
`

const Info = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
`

const IconHover = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        transform: scale(1.1);
        transition: 0.3s ease;
    }
`

const Icon = styled.div`

    text-decoration: none;
    color: #FF3D68;
    margin-right: 1px;
    margin-top: 20px;
    position: absolute;
    
`

const TextInfo = styled.h1`
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 15px;
    position: absolute;
    left: 0;
    margin-left: 1px;
`


const RatingInfo = styled.div`

    position: absolute;
    margin-top: 46px;
    left: 0;
    margin-left: 1px;
    font-size: 15px;
`

const PriceInfo = styled.h1`
    font-size: 0.9rem;
    position: absolute;
    font-weight: bold;
    left: 0;
    margin-left: 1px;
    font-family: 'JetBrains Mono', monospace;
    margin-top: 95px;
`

const Product = ( { product } ) => {
  

    return (
        <ProductInfo>
            <Container>
                <Wrapper>
                 <Image src={product.image} />
                    <Info>
                        <TextInfo>
                            {product.name}
                        </TextInfo>
                        <RatingInfo>
                           <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#FFB344' fontSize='13px' /> 
                        </RatingInfo>
                        <PriceInfo>
                            {product.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}
                        </PriceInfo>
                        <Icon>
                            <Link to='/wishlist'><FavoriteBorderOutlinedIcon style={{color: '#FF6B6B'}}/></Link>
                        </Icon>
                    </Info>
                    <InfoHover>
                        <IconHover>
                        <Link to={`/products/item/${product._id}`} ><SearchIcon style={{fontSize: '25px', marginTop:'1px', color: '#FF6B6B'}}/></Link>
                        </IconHover>
                    </InfoHover>
                </Wrapper>
            </Container>
        </ProductInfo>

    )
}

export default Product
