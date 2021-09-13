import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Rating from '../Stuff/Rating'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Footer from "../Footer/Footer";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NewsLetter from "../Stuff/NewsLetter";
import { useDispatch, useSelector } from "react-redux";
import { listProductsDetails } from "../../actions/productActions";
import Loader from "../Stuff/Loader";
import Message from "../Stuff/Message";
import { Form } from "react-bootstrap";

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
    height: 34vh;
  }

  @media screen and (max-width: 540px){
    height: 45vh;
  }

  @media screen and (max-width: 414px){
    height: 40vh;
    max-width: 145%;
  }

  @media screen and (max-width: 375px){
    max-width: 125%;
  }

  @media screen and (max-width: 280px){
    height: 34vh;
    max-width: 155%;
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
  font-weight: bold;
`;

const Description = styled.p`
  width: 95%;
  font-size: 1.2rem;
  text-align: justify;
  margin: 20px 0px;

  @media screen and (max-width: 600px){
      text-align: left;
      width: 100%;
  }

`;

const Price = styled.span`
  font-weight: bold;
  color: #111;
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
  margin-top: -5px;
`

const FilterSizes = styled.div`
  margin-top: -2px;
`

const FilterTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1px;
`

const FilterSize = styled.select`
    margin-left: 10px;
    margin-top: -2px;
    font-family: "JetBrains Mono";
    padding: 5px;
    width: 3.8rem;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: ${props => props.color};
`

const FilterOption = styled.option`
  text-align: center;
`

const FilterColor = styled.option`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 2px 6px;
  cursor: pointer;

  @media screen and (max-width: 280px){
    margin: 1px 6px;
  }

`

const AddContainer = styled.div`
    display: flex;
    margin-top: 15px;
`

const Status = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1px;
`

const ButtonCart = styled.button`
  padding: 8px;
  width: 10rem;
  height: 2.5rem;
  margin-top: 15px;
  position: absolute;
  display: flex;
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
  align-items: center;
  justify-content: center;
  border: none;
  background: orange;
`

// THIS GONNA BE PRODUCT PAGE

const ProductPage = ({ history, match }) => {

  const [sizeS, setSizes] = useState(37);
  const [size, setSize] = useState('S');
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails

  const addToCart = () => {
    //bukan sneaker
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  }

  useEffect(() => {

    dispatch(listProductsDetails(match.params.id))

  }, [dispatch, match])

  // useEffect(() => {

  //   // memilih local storage value
  //   const currentColor = localStorage.getItem('colors');
    
  //   if(currentColor) {
  //     setColor(currentColor);
  //   }

  // }, [])

  // // Memilih warna tapi optional lain waktu akan diupdate
  // const handleClick = (color) => {
  //     setColor(color);
  //     localStorage.setItem('colors', color)
  // }
  


  return (
    <>
      <Navbar />
      {loading ? <Loader /> : error ? <Message variant='danger' margin='150px auto' textAlign='center'>{error}</Message> : (
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
                    <Image src={product.image} />
                  </ImgContainer>
                  <InfoContainer>
                    <Title>{product.name}</Title>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#FFB344' fontSize='13px'/>
                    <Price>Rp {product.price},00</Price>
                    <Description>{product.description}</Description>
                    <Status> Avaliable : {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Status>
                    <Status style={{marginTop: '15px'}}>Brand : {product.brand}</Status>
                    {product.countInStock > 0 && (
                      <AddContainer>
                          <FilterTitle>Qty : </FilterTitle>
                              <Form as='select' value={qty} onChange={(e) => setQty(e.target.value)} style={{width: '3.8rem', 
                              marginLeft: '14px', textAlign: 'center', border: 'none', background: '#9D9D9D', cursor: 'pointer'}}>
                                {
                                  [...Array(product.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}> {x + 1}</option>
                                  ))
                                }
                              </Form>
                      </AddContainer>
                    )}
                    <FilterContainer>
                      {product.category === 'Sneakers' ?
                        <FilterSizes>
                           <FilterTitle>Size :</FilterTitle>
                              <FilterSize color="#C5DCDD" value={sizeS} onChange={(e) => setSizes(e.target.value)}>
                                  <FilterOption>37</FilterOption>
                                  <FilterOption>38</FilterOption>
                                  <FilterOption>39</FilterOption>
                                  <FilterOption>40</FilterOption>
                                  <FilterOption>41</FilterOption>
                                  <FilterOption>42</FilterOption>
                                  <FilterOption>43</FilterOption>
                                  <FilterOption>44</FilterOption>
                              </FilterSize>
                        </FilterSizes> :
                      <FilterSizes>
                           <FilterTitle>Size :</FilterTitle>
                              <FilterSize color="#C5DCDD" value={size} onChange={(e) => setSize(e.target.value)}>
                                  <FilterOption>S</FilterOption>
                                  <FilterOption>M</FilterOption>
                                  <FilterOption>L</FilterOption>
                                  <FilterOption>XL</FilterOption>
                                  <FilterOption>XXL</FilterOption>
                              </FilterSize>
                      </FilterSizes> 
                      }           
                    </FilterContainer>

                    <Filter className="theme-options">
                              <FilterTitle>Color :</FilterTitle>
                              <FilterColor color="#261C2C" id="black" />
                              <FilterColor color="gray" id="gray"/>
                              <FilterColor color="#F7D59C" id="charcoal" />
                    </Filter>
                      <ButtonCart type='button' disabled={product.countInStock === 0} style={product.countInStock >= 1 ? {cursor: "pointer"} : {cursor: "auto"}} onClick={addToCart}> 
                          <ShoppingCartOutlinedIcon style={{ marginRight: '5px', fontSize: '22px', marginTop: '-3px'}} /> 
                          ADD TO CART
                      </ButtonCart>

                  </InfoContainer>
            </Wrapper>
      </Container>
    )}
      <NewsLetter/>
      <Footer />
  </>
  );
};

export default ProductPage;
