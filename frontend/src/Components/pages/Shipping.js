import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Container, Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../Stuff/Announcement'
import CheckoutSteps from '../Stuff/CheckoutSteps'
import { FaShippingFast } from 'react-icons/fa'
import { saveShippingAddress } from '../../actions/cartActions'
import '../../style/index.css'

const Shipping = ({ history }) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [province, setProvince] = useState(shippingAddress.province)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, province, postalCode}))
        history.push('/payment')
    }

    useEffect(() => {
        document.title = "Isi alamat pengirimanmu"
      }, [])

    return (
        <>
            <Navbar/>
            <Announcement/>
            <Container className="shipping-container">
                <CheckoutSteps step1 step2/>
                <Row>
                <Col md={4}>
                    <h2 style={{fontWeight: 'bold'}}><FaShippingFast style={{margin: '-5px 10px 0px 0px'}} />Shipping Address</h2>
                    <Form onSubmit={submitHandler} className="shipping">
                        <Form.Group controlId='address'>
                            <Form.Label>Your Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your address'
                                value={address}
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='city'>
                            <Form.Label>Your City</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your City'
                                value={city}
                                required
                                onChange={(e) => setCity(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='province'>
                            <Form.Label>Your Province</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your province'
                                value={province}
                                required
                                onChange={(e) => setProvince(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='postalCode'>
                            <Form.Label>Your Postal Code</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your Postal Code'
                                value={postalCode}
                                required
                                onChange={(e) => setPostalCode(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type='submit'>Continue</Button>
                    </Form>
                </Col>
                </Row>
            </Container>
        </>
    )
}

export default Shipping
