import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import { useHistory } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Announcement from '../Stuff/Announcement'
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import NavbarBottom from '../Navbar/NavbarBottom'
import { FiBox,FiUser } from "react-icons/fi"
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


    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
            window.location.reload()
        }
        else{
            if(!user.name){
                dispatch(getUserDetails('profile'))
            }
            else{
                setName(user.name)
                setEmail(user.email)
            }
        }

    }, [dispatch, history, userInfo, user])
    
    const submitHandler = (e) => {

        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('😐 Password do not match')
        }
        else {
            //DISPATCH UPDATE PROFILE
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
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
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Your Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Your Password</Form.Label>
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

                    <Button type='submit'>
                        Update
                    </Button>
                </Form>
                )}
                </Col>
                <Col md={9}>
                    <h2 style={{fontWeight: 'bold'}}><FiBox style={{margin: '-5px 5px 0px 0px'}}/>Your Orders</h2>
                </Col>
            </Row>
        </Container>
      <NavbarBottom/>
    </>
       
    )
}

export default Profile