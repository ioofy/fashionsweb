import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { Container, Form, Button, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../Stuff/Announcement'
import CheckoutSteps from '../Stuff/CheckoutSteps'
import {MdPayment} from 'react-icons/md'
import { savePaymentMethod } from '../../actions/cartActions'

const Payment = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <>
            <Navbar/>
            <Announcement/>
            <Container>
                <CheckoutSteps step1 step2 step3 />
                    <h2 style={{fontWeight: 'bold'}}><MdPayment style={{margin: '-5px 10px 0px 0px'}} />Payment Method</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                <Col>
                    <Form.Check
                    type='radio'
                    label='PayPal or Credit Card'
                    id='PayPal'
                    name='paymentMethod'
                    value='PayPal'
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    ></Form.Check>
                    <Form.Check
                    type='radio'
                    label='OVO'
                    id='OVO'
                    name='paymentMethod'
                    value='OVO'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    ></Form.Check>
                    <Form.Check
                    type='radio'
                    label='DANA'
                    id='DANA'
                    name='paymentMethod'
                    value='DANA'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    ></Form.Check>
                </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                Continue
                </Button>
            </Form>
            </Container>
        </>
    )
}

export default Payment
