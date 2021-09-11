import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Rating from '../../Rating'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Footer from "../Footer/Footer";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import axios from "axios";
import NewsLetter from "../../NewsLetter";

const Container = styled.div`
  display: flex;
  max-width: 1290px;
  margin: 50px auto;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    max-width: 935px !important;
  }

  @media (max-width: 884px) {
    max-width: 700px !important;
  }

  @media (max-width: 600px) {
    margin: 15px;
  }

  @media (max-width: 1280px){
    max-width: 1115px;
  }
`;

const ButtonBack = styled.button`
  font-size: 1rem;
  position: absolute;
  width: 8rem;
  height: 2.5rem;
  display: flex;
  font-family: "JetBrains Mono", monospace;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: #111;
  color: white;

  @media screen and (max-width: 1024px){
      margin-left: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media screen and (max-width: 600px){
    flex-direction: column;
}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  max-width: 100%;
  height: 55vh;
  margin: 50px -30px;
  object-fit: cover;

  border-radius: 20px;
  background-color: #C5DCDD;


  @media screen and (max-width: 1024px){
    height: 40vh;
  }



`;

const InfoContainer = styled.div`
  flex: 0.9;

  @media screen and (max-width: 600px){

      margin-left: -25px;
  }
`;

const Title = styled.h1`
  margin: 50px 0px 0px;
`;

const Description = styled.p`
  width: 100%;
  font-size: 1.1rem;
  text-align: justify;
  margin: 20px 0px;

  @media screen and (max-width: 600px){
      text-align: left;
      width: 100%;
  }

`;

const Price = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "JetBrains Mono";
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`

const Filter = styled.div`
  display: flex;
  margin-top: 15px;
`

const FilterSizes = styled.div`
  margin-top: -2px;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 1px;
`

const FilterMenu = styled.select`
  margin-left: 10px;
  margin-top: -2px;
  padding: 5px;
  outline: none;
  border: none;
  background-color: ${props => props.color};
`

const FilterSize = styled.select`
    margin-left: 10px;
    margin-top: -2px;
    padding: 5px;
    outline: none;
    border: none;
    background-color: ${props => props.color};
`

const FilterOption = styled.option`

`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;

`

const AddContainer = styled.div`
    margin-top: 15px;
`

const Status = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1px;
`

const ButtonCart = styled.button`
  margin-top: 30px;
  padding: 8px;
  width: 10rem;
  height: 2.5rem;
  display: flex;
  font-family: 'JetBrains Mono', monospace;
  align-items: center;
  justify-content: center;
  border: none;
  background: orange;
`

// THIS GONNA BE PRODUCT PAGE

const ProductPage = ({ match }) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {

        const { data } = await axios.get(`/api/products/${match.params.id}`)
        
        setProduct(data)
    }

    fetchProduct()

}, [ match ])

  return (
    <>
      <Navbar />
      <Container>
        <Link to="/products" style={{ cursor: "auto" }}>
          <ButtonBack>
            <ArrowBackIcon
              style={{
                marginRight: "6px",
                fontSize: "22px",
                marginTop: "-3px",
                marginLeft: "-10px",
              }}
            />
            GO BACK
          </ButtonBack>
        </Link>
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#FFB344' fontSize='13px'/>
            <Price>IDR {product.price}</Price>
            <Description>{product.description}</Description>
            <Status> Avaliable : {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Status>
            <Status style={{marginTop: '15px'}}>Brand : {product.brand}</Status>
            <AddContainer>
                <FilterTitle>Qty: </FilterTitle>
                    <FilterMenu color="#B2B1B9" >
                        <FilterOption>1</FilterOption>
                        <FilterOption>2</FilterOption>
                        <FilterOption>3</FilterOption>
                        <FilterOption>4</FilterOption>
                        <FilterOption>5</FilterOption>
                        <FilterOption>6</FilterOption>
                        <FilterOption>7</FilterOption>
                        <FilterOption>8</FilterOption>
                        <FilterOption>9</FilterOption>
                        <FilterOption>10</FilterOption>
                    </FilterMenu>
            </AddContainer>
            <FilterContainer>
                <FilterSizes>
                    <FilterTitle>Size:</FilterTitle>
                    <FilterSize color="#C5DCDD" >
                        <FilterOption>XS</FilterOption>
                        <FilterOption>S</FilterOption>
                        <FilterOption>M</FilterOption>
                        <FilterOption>L</FilterOption>
                        <FilterOption>XL</FilterOption>
                    </FilterSize>
                </FilterSizes>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="gray"/>
                    <FilterColor color="#F7D59C"/>
                </Filter>

            </FilterContainer>
            <ButtonCart type='button' disabled={product.countInStock === 0} style={product.countInStock >= 1 ? {cursor: "pointer"} : {cursor: "auto"}}> 
                <ShoppingCartOutlinedIcon style={{ marginRight: '5px', fontSize: '22px', marginTop: '-3px'}} /> 
                ADD TO CART
            </ButtonCart>
          </InfoContainer>
        </Wrapper>
      </Container>
      <NewsLetter/>
      <Footer />
    </>
  );
};

export default ProductPage;
