import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, Row, Col, ListGroup, Container, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../Stuff/Announcement'
import { Link } from 'react-router-dom'
import Message from '../Stuff/Message'
import CheckoutSteps from '../Stuff/CheckoutSteps'

const PlaceOrder = () => {
    const cart = useSelector(state => state.cart)

    // calculate prices
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toLocaleString('id', { style: 'currency', currency: 'IDR' })
    cart.shippingPrice = cart.itemsPrice <= 250000 ? <div>Rp 50.000,00</div> : <div>Free Shipping</div>
    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toLocaleString('id', { style: 'currency', currency: 'IDR' })

    const placeOrderHandler = () => {

    }

    return (
        <>
            <Navbar/>
            <Announcement/>
            <CheckoutSteps step1 step2 step3 step4 />
            <Container>
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping Address</h2>
                                <p>
                                    <strong>Adress : </strong>
                                    {cart.shippingAddress.address}
                                </p>
                                <p>
                                    <strong>City : </strong>
                                    {cart.shippingAddress.city}
                                </p>
                                <p>
                                    <strong>Province : </strong>
                                    {cart.shippingAddress.province}
                                   
                                </p>
                                <p>
                                    <strong>Postal Code : </strong>
                                    {cart.shippingAddress.postalCode}
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <strong>Method : </strong>
                                {cart.paymentMethod}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Ordered Items</h2>
                                {cart.cartItems.length === 0 ? <Message>Your cart is empty</Message>
                                : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/products/item/${item.product}`}>
                                                            {item.name}
                                                        </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x {item.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}
                                                    </Col>
  
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Order Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                            <Col>Items</Col>
                            <Col>{cart.itemsPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                            <Col>Shipping</Col>
                            <Col>{cart.shippingPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                            <Col>Total</Col>
                            <Col>{cart.totalPrice}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                            type='button'
                            className='btn-block'
                            disabled={cart.cartItems === 0}
                            onClick={placeOrderHandler}
                            >
                            Place Order
                            </Button>
                        </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PlaceOrder
