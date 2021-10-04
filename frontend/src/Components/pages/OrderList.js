import React, { useEffect } from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button, Container} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import Navbar from '../Navbar/Navbar'
import '../../style/index.css'
import NavbarBottom from '../Navbar/NavbarBottom'
import { listOrders } from '../../actions/orderActions'

const OrderList = () => {
    let history = useHistory()
    const dispatch = useDispatch()

    const orderList = useSelector((state) => state.orderList)
    const { loading, error, orders } = orderList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(userInfo && userInfo.isAdmin){
            dispatch(listOrders())
        }

        else{
            history.push('/login/accountcontext=register/auth/lang=en')
        }

    }, [dispatch, history, userInfo])

    return (
        <>
        <Navbar/>
        <Container>
            <h3 style={{fontFamily: 'JetBrains Mono',fontWeight: 'bold', marginBottom: '30px'}}>List of Orders</h3>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover responsive className='table-sm' style={{marginBottom: '100px'}}> 
                    <thead>
                        <tr>
                            <th>ORDER ID</th>
                            <th>USER NAME</th>
                            <th>ORDER DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>#{order._id}</td>
                                <td>{order.user && order.user.name}</td>
                                <td>
                                    {order.createdAt.substring(0, 10)}
                                </td>
                                <td>
                                    ${order.totalPrice},00
                                </td>
                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : <div>❌</div>}</td>
                                <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : <div>❌</div>}</td>
                                <td>
                                    <LinkContainer to={`/admin/order/${order._id}`}>
                                        <Button className='btn-sm' variant='light'>
                                            Details
                                        </Button>
                                    </LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
        <NavbarBottom/>
        </>
    )
}

export default OrderList
