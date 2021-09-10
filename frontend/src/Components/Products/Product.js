import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Rating from '../../Rating';

const ProductInfo = styled.div`

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


`

const Wrapper = styled.div`
    margin-bottom: 50px;
    margin-top: 80px;
`

const Info = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: -7px;
`

const Image = styled.img`
    max-width: 100%;
    border-radius: 20px;
    background-color: #C5DCDD;
`

const Icon = styled.div`

    text-decoration: none;
    color: #FF3D68;
    margin-right: 1px;
    cursor: pointer;
    margin-top: 20px;
    
`

const TextInfo = styled.h1`
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    margin-left: 1px;
`


const RatingInfo = styled.div`

    position: absolute;
    margin-top: 45px;
    left: 0;
    margin-left: 1px;
    font-size: 15px;
`

const PriceInfo = styled.h1`
    font-size: 0.9rem;
    position: absolute;
    left: 0;
    margin-left: 1px;
    font-family: 'JetBrains Mono', monospace;
    margin-top: 90px;
`

const ButtonCart = styled.button`
    font-size: 1rem;
    position: absolute;
    left: 0;
    margin-left: 1px;
    margin-top: 170px;
    padding: 8px;
    width: 10rem;
    height: 2.5rem;
    display: flex;
    font-family: 'JetBrains Mono', monospace;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: orange;
`


const Product = ( { product } ) => {

    const toTop = () => {
        window.scrollTo(0,0);
    }

    useEffect(() =>{
        toTop();
        window.addEventListener("click", toTop);

    },[])
    
    return (
        <ProductInfo>
            <Container>
                <Wrapper>
                    <Link to={`/products/item/${product._id}`} onClick={toTop} ><Image src={product.img} /></Link>
                    <Info>
                        <TextInfo>
                            {product.title}
                        </TextInfo>
                        <RatingInfo>
                           <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#FFB344' fontSize='13px' /> 
                        </RatingInfo>
                        <PriceInfo>
                            IDR {product.price}
                        </PriceInfo>
                            <ButtonCart type='button' disabled={product.countInStock === 0} style={product.countInStock >= 1 ? {cursor: "pointer"} : {cursor: "auto"}}> 
                                <ShoppingCartOutlinedIcon style={{ marginRight: '5px', fontSize: '22px', marginTop: '-3px'}} /> 
                                ADD TO CART
                            </ButtonCart>
                        <Icon>
                            <FavoriteBorderOutlinedIcon/>
                        </Icon>
                    </Info>
                </Wrapper>
            </Container>
        </ProductInfo>

    )
}

export default Product
