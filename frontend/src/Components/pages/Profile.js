import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import { useHistory } from 'react-router-dom'
import { Form, Button, Row, Col, Container, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from '../Navbar/Navbar'
import Announcement from '../Stuff/Announcement'
import NavbarBottom from '../Navbar/NavbarBottom'
import { FiBox,FiUser } from "react-icons/fi"
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import { listMyOrders } from '../../actions/orderActions'
import swal from 'sweetalert'
import '../../style/index.css'

const Profile = ( ) => {

    let history = useHistory()
    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading:loadingOrders, error:errorOrders, orders } = orderListMy



    useEffect(() => {
        if(!userInfo) {
            history.push('/login/accountcontext=register/auth/lang=en')
            window.location.reload()
        }
        else{
            if(!user.name || success){
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            }
            else{
                setName(user.name)
                setEmail(user.email)
            }
        }

    }, [dispatch, history, userInfo, user, success])
    
    const submitHandler = (e) => {

        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('😐 Password do not match')
        }
        else {
            //DISPATCH UPDATE PROFILE
            swal({
                title: 'Apakah kamu yakin?',
                text: '❌ Ingat! aksi ini tidak bisa dikembalikan',
                icon: 'warning',
                buttons: ['Tidak', 'Ya']
            }).then(answer => {
                if(answer){
                    swal({text: '✔️Sip, Akun kamu berhasil diubah',
                    icon: 'success'
                    })
                    dispatch(updateUserProfile({ id: user._id, name, email, password }))
                    window.location.reload()
                }
            })
        }
        
    }


    return(
    <>
    <Navbar/>
        <Announcement/>
        <Container className="profile-container">
            <Row>
                <Col md={3}>
                <h2 style={{fontWeight: 'bold'}}><FiUser style={{margin: '-5px 5px 0px 0px'}} />Your Profile</h2>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {success && <Message variant="success">😎 Profile Updated</Message>}
                {loading ? (
                <Loader margin="50px" />
                ) : error ? (
                <Message variant='danger'>{error}</Message>
                ) : (
                <Form onSubmit={submitHandler} className="profile">
                    <Form.Group controlId='name'>
                        <Form.Label>Update Your Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Update Your Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Update Your Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' >
                        Update
                    </Button>
                </Form>
                )}
                </Col>
                <Col md={9}>
                    <h2 style={{fontWeight: 'bold'}}><FiBox style={{margin: '-5px 5px 0px 0px'}}/>Your Orders</h2>
                    {loadingOrders ? <Loader margin='20px auto'/> : errorOrders ? <Message variant='danger'>{errorOrders}</Message> :
                        (
                            <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ORDER ID</th>
                                    <th>DATE</th>
                                    <th>TOTAL</th>
                                    <th>PAID</th>
                                    <th>DELIVERED</th>
                                    <th>DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>${order.totalPrice},00</td>
                                        <td>{order.isPaid ? order.paidAt.substring(0, 10) : <div>❌</div> }</td>
                                        <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : <div>❌</div> }</td>
                                        <td>
                                            <LinkContainer to={`/order/${order._id}`}>
                                                <Button className='btn-sm' variant='light'>Details</Button>
                                            </LinkContainer>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </Table>
                        )
                    }
                </Col>
            </Row>
        </Container>
      <NavbarBottom/>
    </>
       
    )
}

export default Profile