import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Loader from '../Stuff/Loader'
import Message from '../Stuff/Message'
import { getUserDetails, updateUser } from '../../actions/userActions'
import { USER_UPDATE_RESET } from '../../constants/userConstants'
import Navbar from '../Navbar/Navbar'
import '../../style/index.css'
import NavbarBottom from '../Navbar/NavbarBottom'
import { useDispatch, useSelector} from 'react-redux'

const UserEdit = ({ match }) => {
    
    let history = useHistory()
    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

    useEffect(() => {
        if(successUpdate){
            dispatch({type: USER_UPDATE_RESET})
            history.push('/admin/userlist')
        }

        else {
            if(!user.name || user._id !== userId){
                dispatch(getUserDetails(userId))
            }
            else{
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }

    },[ dispatch, userId, user, successUpdate, history ])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin }))
    }

    useEffect(() => {
        document.title = "Admin Dashboard | Fashions, Explore dan beli pakaian dengan fashion favorit kamu sekarang juga"
    }, [])

    return (
        <>
            <Navbar/>
                <Container className="update-container">
                    <Row>
                        <Col md={3}>
                            <Link to='/admin/userlist' className='btn btn-light my-3'>
                                GO BACK
                            </Link>
                                <h1 style={{margin: '10px 0px', fontWeight: 'bold'}}>Edit User</h1>
                                {loadingUpdate && <Loader margin='10px'/>}
                                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                                <Form onSubmit={submitHandler} className="profile">
                                    <Form.Group controlId='name' className="update-group">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type='name'
                                            placeholder='Enter name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='email' className="update-group">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='isadmin' className='checkbox'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Is Admin?'
                                        checked={isAdmin}
                                        onChange={(e) => setIsAdmin(e.target.checked)}
                                    ></Form.Check>
                                    </Form.Group>

                                    <Button type='submit' variant='primary'>
                                        Update
                                    </Button>
                                </Form>
                            )}
                        </Col>
                    </Row>
                </Container>
            <NavbarBottom/>
        </>
    )
}

export default UserEdit
