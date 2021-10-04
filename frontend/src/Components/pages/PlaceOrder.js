import React, { useEffect }from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, Row, Col, ListGroup, Container, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../Stuff/Announcement'
import { Link } from 'react-router-dom'
import Message from '../Stuff/Message'
import CheckoutSteps from '../Stuff/CheckoutSteps'
import '../../style/index.css'
import { GrPaypal } from 'react-icons/gr'
import { MdPayment } from 'react-icons/md'
import { FaShippingFast } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import Footer from '../Footer/Footer'
import NavbarBottom from '../Navbar/NavbarBottom'
import NewsLetter from '../Stuff/NewsLetter'
import { createOrder } from '../../actions/orderActions'


const PlaceOrder = ({ history }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    // calculate prices
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    cart.shippingPrice = cart.itemsPrice <= 500 ? 20 : 0
    cart.totalPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if(success){
            history.push(`/order/${order._id}`)
        }
        // eslint-disable-next-line
    }, [history, success])

    const placeOrderHandler = () => {
        dispatch(
            createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            totalPrice: cart.totalPrice,
        })
      )
    }

    return (
        <>
            <Navbar/>
            <Announcement/>
            <CheckoutSteps step1 step2 step3 step4 />
            <Container className="placeorder-container">
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush' style={{marginBottom: '40px'}}>
                            <ListGroup.Item className="group">
                                <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}><FaShippingFast style={{margin: '-5px 10px 0px 0px'}} />Shipping Address</h2>
                                <p>
                                    <strong>Your Address : </strong>
                                    {cart.shippingAddress.address}, {cart.shippingAddress.city} {' '}
                                    {cart.shippingAddress.province}, {cart.shippingAddress.postalCode}
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item className="group">
                                <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}><MdPayment style={{margin: '-5px 10px 0px 0px'}}/>Payment Method</h2>
                                <strong>Method : </strong>
                                {cart.paymentMethod === 'Paypal' && <GrPaypal/>}
                            </ListGroup.Item>

                            <ListGroup.Item className="group">
                                <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}><FiBox style={{margin: '-5px 10px 0px 0px'}}/>Ordered Items</h2>
                                {cart.cartItems.length === 0 ? <Message>Your cart is empty</Message>
                                : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index} className="group">
                                                <Row>
                                                    <Col md={2}>
                                                        <Image src={item.image} alt={item.name} fluid rounded className="product-image"/>
                                                    </Col>
                                                    <Col className="product-items">
                                                        <Link to={`/products/item/${item.product}`}>
                                                            {item.name}
                                                        </Link>
                                                    </Col>
                                                    <Col className="product-prices">
                                                        {item.qty} x ${item.price},00
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
                        <ListGroup.Item className="group-checkout">
                            <h2 style={{fontWeight: 'bold'}} >Order Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item className="group-checkout">
                            <Row style={{fontWeight: 'bold'}}>
                            <Col className="product-pricepay">Items</Col>
                            <Col className="product-pricepay">${cart.itemsPrice},00</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="group-checkout">
                            <Row style={{fontWeight: 'bold'}}>
                            <Col className="product-pricepay">Shipping</Col>
                            <Col className="product-pricepay">${cart.shippingPrice},00</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="group-checkout">
                            <Row style={{fontWeight: 'bold'}}>
                            <Col className="product-pricepay">Total</Col>
                            <Col className="product-pricepay">${cart.totalPrice},00</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item className="group-checkout">
                            {error && <Message variant='danger'> {error} </Message>}
                        </ListGroup.Item>
                        <ListGroup.Item className="group-placeorder">
                            <Button
                            type='button'
                            className='btn-block'
                            disabled={cart.cartItems === 0}
                            onClick={placeOrderHandler}
                            >
                            PLACE ORDER NOW
                            </Button>
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

export default PlaceOrder
