import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Message from '../Stuff/Message'
import styled from '@emotion/styled'
import NewsLetter from '../Stuff/NewsLetter'
import Announcement from '../Stuff/Announcement'
import { Container, Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import { Link } from 'react-router-dom'
import '../../style/index.css'

const Title = styled.div`
    font-weight: bold;
    font-size: 2.2rem;
    margin: 1rem 0 2rem;
`

const Cart = ({ match, location, history }) => {
    
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart


    useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId, qty))
        }
      }, [dispatch, productId, qty])

      const removeFromCart = (id) =>{
          console.log('you remove item');
      }

      const checkoutHandler = () => {
          history.push('/login?redirect=shipping')
      }
    
    return (
        <>
            <Navbar/>
                <Announcement/>
                <Container>
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
                                            <Image src={item.image} alt={item.name} fluid rounded className="product-image"/>
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
                                            <Button type='button' variant='light' onClick={() => removeFromCart(item.product)} className="trash-btn">
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
                                    <ListGroup.Item>
                                        <h2>SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0 )}) ITEMS</h2>
                                        {cartItems.reduce((acc, item) => acc + item.qty * item.price , 0).toLocaleString('id', { style: 'currency', currency: 'IDR' })}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button type='button' className='btn-black' disabled={cartItems.length === 0} onClick={checkoutHandler}>PROCEED TO CHECKOUT</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            <NewsLetter/>
        <Footer/>
        </>
    )
}

export default Cart