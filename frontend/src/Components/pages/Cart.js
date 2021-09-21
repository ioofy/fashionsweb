import React, {useEffect} from 'react'
import NavbarBottom from '../Navbar/NavbarBottom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Message from '../Stuff/Message'
import styled from '@emotion/styled'
import NewsLetter from '../Stuff/NewsLetter'
import Announcement from '../Stuff/Announcement'
import { Container, Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { addToCart, removeFromCart } from '../../actions/cartActions'
import { Link } from 'react-router-dom'
import '../../style/index.css'

const Title = styled.div`
    font-weight: bold;
    font-size: 2.2rem;
    margin: 8rem 0 2rem;
`

const ButtonBack = styled.button`
  font-size: 1rem;
  position: absolute;
  width: 13rem;
  height: 2.5rem;
  margin: 30px 0px;
  display: flex;
  font-family: "JetBrains Mono", monospace;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: #111;
  color: white;
  box-shadow: 4px 4px #FFB830;

  @media screen and (max-width: 1024px){
      margin-left: 1px;
  }
`

const Cart = ({ match, location, history }) => {
    
    const productId = match.params.id
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart


    useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId, qty))
        }
      }, [dispatch, productId, qty])

      const removeFromCartHandler = (id) =>{
         dispatch(removeFromCart(id))
      }

      const checkoutHandler = () => {
           userInfo ? history.push('/shipping') : history.push('/login?redirect=')
      }

      useEffect(() => {
        document.title = "Keranjang tasmu | ayo checkout sekarang untuk mendapatkan produkmu"
      }, [])
    
    return (
        <>
            <Navbar/>
              <Announcement/>
                <Container>
                <Link to="/products" style={{ cursor: "auto", textDecoration: 'none' }}>
                        <ButtonBack>
                            <ArrowBackIcon
                            style={{
                                marginRight: "6px",
                                fontSize: "22px",
                                marginTop: "-3px",
                                marginLeft: "-5px",
                            }}
                            />
                            CONTINUE SHOPPING
                        </ButtonBack>
                    </Link>
                    <Row>
                        <Title>Your Bag ({cartItems.reduce((acc, item) => acc + item.qty, 0 )})🛍️</Title>
                            <Col md={8}>
                            {cartItems.length === 0 ? <Message margin='20px 0px' variant='success'> 😟 Your cart is empty <Link to='/products' style={{textDecoration: 'none', color:'black', fontWeight: 'bold'}}>
                            Go Back</Link></Message> : (
                                
                                <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    <ListGroup.Item key={item.product} className="group">
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded className="product-imagecart"/>
                                            </Col>
                                            <Col md={3} className="product-name">
                                                <Link to={`/products/item/${item.product}`} >{item.name}</Link>
                                            </Col>
                                            <Col md={3} className="product-price">{item.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</Col>
                                            <Col md={2}>
                                            <Form as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} className="product-form">
                                                {
                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}> {x + 1}</option>
                                                ))
                                                }
                                            </Form>
                                            </Col>
                                            <Col md={2}>
                                                <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)} className="trash-btn">
                                                    <i className='far fa-trash-alt'></i>
                                                </Button>
                                            </Col>
                                        </Row>
                                        <hr />
                                </ListGroup.Item>
                                    
                                ))}
                                </ListGroup>
                            ) }
                        </Col>
                        <Col md={4}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="group-checkout">
                                        <h2>SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0 )}) ITEMS</h2>
                                        <h5>{cartItems.reduce((acc, item) => acc + item.qty * item.price , 0).toLocaleString('id', { style: 'currency', currency: 'IDR' })}</h5>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="group-checkout">
                                        <Button type='button' className='btn-black' disabled={cartItems.length === 0} onClick={checkoutHandler}>PROCEED TO CHECKOUT</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            <NewsLetter/>
        <Footer/>
            <NavbarBottom/>
        </>
    )
}

export default Cart
