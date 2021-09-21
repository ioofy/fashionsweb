import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import Navbar from '../Navbar/Navbar'
import { Row, Col, ListGroup, Container, Image, Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import '../../style/index.css'
import { GrPaypal } from 'react-icons/gr'
import { MdPayment } from 'react-icons/md'
import { FaShippingFast } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import Footer from '../Footer/Footer'
import NavbarBottom from '../Navbar/NavbarBottom'
import NewsLetter from '../Stuff/NewsLetter'
import { getOrderDetails, payOrder } from '../../actions/orderActions'
import { ORDER_PAY_RESET } from '../../constants/orderConstants'


const Order = ({ match }) => {

    const orderId = match.params.id

    const [sdkReady, setSdkReady] = useState(false)

    const dispatch = useDispatch()
    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails

    const orderPay = useSelector((state) => state.orderPay)
    const { loading: loadingPay, succes: succesPay } = orderPay
    
    if(!loading){
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    }

    useEffect(() => {

        const addPayPalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
          }

        if(!order || succesPay) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(getOrderDetails(orderId))
        } else if(!order.isPaid) {
            if(!window.paypal){
                addPayPalScript()
            }
            else{
                setSdkReady(true)
            }
        }

    }, [orderId, dispatch, succesPay, order])

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult)
        dispatch(payOrder(orderId, paymentResult))
    }

    useEffect(() => {
        document.title = "Checkout | Checkout sekarang untuk dapatkan produk favorit mu"
    }, [])

    return (
        loading ? <Loader margin="250px auto"/> : error ? <Message variant='danger'>{error}</Message> :
        <>
            <Navbar/>
                    <Container className="placeorder-container">
                            <Message variant='success'><h4 style={{textAlign: 'center', fontFamily: 'JetBrains Mono',fontWeight: 'bold'}}>🥳 Thanks, We accept your Order!</h4></Message>
                            <div className="order-ref">Order #{order._id}</div>
                            <Row>
                                <Col md={8}>
                                    <ListGroup variant='flush' style={{marginBottom: '40px'}}>
                                        <ListGroup.Item className="group">
                                            <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}><FaShippingFast style={{margin: '-5px 10px 0px 0px'}} />Shipping Address</h2>
                                            <p>
                                                <strong>Name : </strong> {order.user.name}
                                            </p>
                                            <p>
                                                <strong>Email : </strong> <a href={`mailto:${order.user.email}`} style={{color: "#111"}}>{order.user.email}</a>
                                            </p>
                                            <p>
                                                <strong>Your Address : </strong>
                                                {order.shippingAddress.address}, {order.shippingAddress.city}
                                                {' '} {order.shippingAddress.province}, {order.shippingAddress.postalCode}
                                            </p>

                                            {order.isDelivered ? <Message variant='success'>✔️ Delivered on {order.deliveredAt}</Message> : 
                                            <Message variant='danger'>❌ Not Delivered yet</Message> }

                                        </ListGroup.Item>
                                        <ListGroup.Item className="group">
                                            <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}><MdPayment style={{margin: '-5px 10px 0px 0px'}}/>Payment Method</h2>
                                            <p>
                                                <strong>Method : </strong>
                                                {order.paymentMethod === 'Paypal' && <GrPaypal/>}
                                            </p>
                                            {order.isPaid ? <Message variant='success'>✔️ Paid on {order.paidAt}</Message> : 
                                            <Message variant='danger'>❌ Not Paid yet</Message> }
                                        </ListGroup.Item>

                                        <ListGroup.Item className="group">
                                            <h2 style={{fontWeight: 'bold', marginBottom: '20px'}}><FiBox style={{margin: '-5px 10px 0px 0px'}}/>Ordered Items</h2>
                                            {order.orderItems.length === 0 ? <Message>Your order is empty</Message>
                                            : (
                                                <ListGroup variant='flush'>
                                                    {order.orderItems.map((item, index) => (
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
                                    <ListGroup.Item className="group-checkout">
                                        <h2 style={{fontWeight: 'bold'}} >Order Summary</h2>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="group-checkout">
                                        <Row style={{fontWeight: 'bold'}}>
                                        <Col className="product-pricepay">Items</Col>
                                        <Col className="product-pricepay">{order.itemsPrice.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="group-checkout">
                                        <Row style={{fontWeight: 'bold'}}>
                                        <Col className="product-pricepay">Shipping</Col>
                                        <Col className="product-pricepay">{order.shippingPrice === 0 && <div>Free</div>}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="group-checkout">
                                        <Row style={{fontWeight: 'bold'}}>
                                        <Col className="product-pricepay">Total</Col>
                                        <Col className="product-pricepay">{order.totalPrice.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {!order.isPaid && (
                                        <ListGroup.Item className="group-checkout">
                                        {loadingPay && <Loader />}
                                        {!sdkReady ? (
                                            <Loader />
                                        ) : (
                                            <PayPalButton
                                            amount={order.totalPrice}
                                            onSuccess={successPaymentHandler}
                                            />
                                        )}
                                        </ListGroup.Item>
                                    )}
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

export default Order
