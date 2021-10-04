import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Rating from '../Stuff/Rating'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ScrollToTop from '../Stuff/ScrollToTop'
import Footer from "../Footer/Footer";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import NewsLetter from "../Stuff/NewsLetter";
import { useDispatch, useSelector } from "react-redux";
import { listProductsDetails, createProductReview } from "../../actions/productActions";
import Loader from "../Stuff/Loader";
import Message from "../Stuff/Message";
import { Col, Form, Row, ListGroup  } from "react-bootstrap";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
import '../../style/index.css'
import Meta from "../Stuff/Meta";

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
  border-radius: 5px;
  border: none;
  background-color: #111;
  color: white;
  box-shadow: 4px 4px #FFB830;

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
  
  @media screen and (max-width: 834px){
    max-width: 105%;
  }

  @media screen and (max-width: 540px){
    height: 45vh;
    max-width: 150%;
  }

  @media screen and (max-width: 414px){
    height: 40vh;
    max-width: 150%;
  }

  @media screen and (max-width: 375px){
    max-width: 140%;
  }

  @media screen and (max-width: 320px){
    height: 50vh;
    max-width: 130%;
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

  @media screen and (max-width: 884px){
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
  border-radius: 5px;
  background: orange;
  box-shadow: 5px 5px #5E454B;
`

const Testimonials = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TestimonialsHeading = styled.div`
  letter-spacing: 1px;
  margin: 30px 0px;
  padding: 10px 1px;
  display: flex;
  flext-direction: column;
`

const TextInfo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #202020;
  color: #fff;
  padding: 10px; 20px
`

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TestimonialsBox = styled.div`
  width: 522px;
  box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
  background-color: #FEFBF3;
  padding: 20px;
  margin-top: -15px;
  margin-bottom: 30px;
  border-radius: 10px;

  &:hover{
    transform: translateY(-10px);
    transition: all ease 0.3s;
  }
  
  @media(max-width: 1024px){
    width: 375px;
  }

  @media(max-width: 848px){
    padding: 10px;
    width: 345px;
  }

  @media(max-width:280px){
    width: 248px !important;
  }

  @media(max-width:360px){
    width: 288px;
  }

`

const BoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`
const Username = styled.div`
  display: flex;
  font-size: 20px;
`

const Ratings = styled.div`
  color: #f9d71c;
`

const Reviews = styled.div`
  color: #4b4b4b;
`

const Content = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`

const DateContent = styled.p`
  font-size: 1.1rem;
  margin-top: -20px;
`

const SubmitButton = styled.button`
  background-color: #111;
  border: none;
  font-size: 15px;
  width: 9rem;
  color: #fff;
  height: 2.8rem;
  text-transform: uppercase;
  font-family: 'JetBrains Mono';
  box-shadow: 5px 5px teal;
  margin-bottom: 10px;
`

// THIS GONNA BE PRODUCT PAGE
const ProductPage = ({ history, match }) => {

  const [sizeS, setSizes] = useState(37);
  const [size, setSize] = useState('S');
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails

  const productReviewCreate = useSelector(state => state.productReviewCreate);
  const { success:successProductReview, error:errorProductReview } = productReviewCreate
  
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin

  const addToCart = () => {
    //bukan sneaker
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProductReview(match.params.id, {
      rating,
      comment,
    }))
  }

  useEffect(() => {
    if(successProductReview){
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
      setMessage('✔️Thanks review was submitted')
    }
    dispatch(listProductsDetails(match.params.id))

  }, [dispatch, match, successProductReview])

  return (
    <>
      <ScrollToTop/>
      <Navbar />
      {loading ? <Loader margin= '200px auto' /> : error ? <Message variant='danger' margin='150px auto' textAlign='center'>{error}</Message> : (
      <>
      <Meta title={`Fashions | ${product.name}`}/>
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
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#FFB344' fontSize='13px' marginBottom='10px'/>
                    <Price>${product.price},00</Price>
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
                    { product.category === 'Sneakers' ?
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
                          <LocalMallOutlinedIcon style={{ marginRight: '6px', fontSize: '22px', marginTop: '-3px'}} /> 
                          ADD TO BAG
                      </ButtonCart>
                  </InfoContainer>
            </Wrapper>

            <Row className='row-review-container'>
              <Col md={5}>
                <ListGroup.Item style={{marginTop: '50px'}} variant='flush'>
                  <h2 style={{fontWeight:'bold'}}>Write a Customer Review</h2>
                  {message && 
                    <Message variant='success'>{message}</Message>
                  }
                  {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as='select' value={rating} onChange={(e) => 
                          setRating(e.target.value)} required>
                            <option value="">Select Reviews..</option>
                            <option value="1">⭐ - Poor</option>
                            <option value="2">⭐⭐ - Fair</option>
                            <option value="3">⭐⭐⭐ - Good</option>
                            <option value="4">⭐⭐⭐⭐ - Very Good</option>
                            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                          </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                          <Form.Label>Comment</Form.Label>
                          <Form.Control
                          as="textarea" aria-label="With textarea"
                          type='text'
                          placeholder='Enter the description'
                          value={comment}
                          maxLength='40'
                          onChange={(e) => setComment(e.target.value)}
                          required></Form.Control>
                      </Form.Group>
                      <SubmitButton type='submit'>
                          Submit Reviews
                      </SubmitButton>
                    </Form>
                  ) : <Message variant='danger'>Please <Link to='/login/accountcontext=register/auth/lang=en' style={{textDecoration: 'none', fontWeight: 'bold', color: 'teal'}}>Login</Link> first to write a review</Message>}
                </ListGroup.Item>
                <Testimonials>
                  <TestimonialsHeading>
                    <TextInfo>
                      Our Customer Reviews
                    </TextInfo>
                  </TestimonialsHeading>
              </Testimonials>
              
              {product.reviews.length === 0 && <Message margin='-20px 0px'>No reviews yet.</Message>}
              </Col>
            </Row>

            <TestimonialsContainer>
              {product.reviews.map(review => (
                <TestimonialsBox key={review._id}>
                <BoxTop>
                  <Profile>
                    <Username><strong>@{review.name}</strong></Username>
                  </Profile>
                  <Ratings>
                    <Rating value={review.rating}/>
                  </Ratings>
                </BoxTop>
                <DateContent>
                  On {review.createdAt.substring(0, 10)}
                </DateContent>
                <Reviews>
                  <Content>
                    {review.comment}
                  </Content>
                </Reviews>
              </TestimonialsBox>
              ))}
            </TestimonialsContainer>
      </Container>
    </>
    )}
      <NewsLetter/>
      <Footer />
  </>
  );
};

export default ProductPage;
