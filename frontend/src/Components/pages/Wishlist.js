import React, { useEffect } from 'react'
import { Row, Container, Col, ListGroup, Image } from 'react-bootstrap'
import Announcement from '../Stuff/Announcement'
import Navbar from '../Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToWishList } from '../../actions/wishListActions'
import '../../style/index.css'

const Wishlist = ({ match }) => {
    const productId = match.params.id

    const dispatch = useDispatch();

    useEffect(() => {
        if(productId){
            dispatch(addToWishList(productId))
        }
    }, [dispatch, productId])
    return (
        <>
            <Navbar />
            <Announcement />
            <Container className='wishlist-container'>
                <NavLink to='/'>
                    <h5>FASHIONS BERANDA / <span style={{cursor:'auto'}}>WISHLIST</span></h5>
                </NavLink>
                <Row>
                    <Col md={12}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item className="wishlist-group">
                                <Row>

                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Wishlist
