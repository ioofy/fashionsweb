import React, { useEffect } from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import Navbar from '../Navbar/Navbar'
import { listProducts, deleteProduct, createProduct, } from '../../actions/productActions'
import {PRODUCT_CREATE_RESET} from '../../constants/productConstants'
import swal from 'sweetalert'
import '../../style/index.css'
import NavbarBottom from '../Navbar/NavbarBottom'
import Paginate from './Paginate'

const ProductDashboard = () => {
    const { pageNumber } = useParams() || 1;
    let history = useHistory()
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, pages, page } = productList

    const productDelete = useSelector((state) => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    const productCreate = useSelector((state) => state.productCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })

        if(userInfo && userInfo.isAdmin){
            if(successCreate) {
                history.push(`/admin/product/${createdProduct._id}/edit`)
            }
    
            else{
                dispatch(listProducts('', pageNumber))
            }
        }
        else {
            history.push('/login/accountcontext=register/auth/lang=en')
        }



    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct, pageNumber])

    const deleteHandler = (id) => {
        swal({
            title: 'Are you sure?',
            text: '❌ Remember, this action cannot be reversed!',
            icon: 'warning',
            buttons: ['No', 'Yes']
        }).then(answer => {
            if(answer){
                swal({text: '✔️ Success, product has been deleted!',
                icon: 'success'
                })
                // Delete Product
                dispatch(deleteProduct(id))
            }
        })
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }

    return (
        <>
        <Navbar/>
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <h3 style={{fontFamily: 'JetBrains Mono',fontWeight: 'bold', marginBottom: '30px'}}>Products</h3>
                </Col>
            </Row>
            <Button style={{margin: '-10px 0px 20px', fontSize: '15px', backgroundColor: '#111', border: 'none', fontFamily: 'JetBrains Mono', height: '3rem'}} onClick={createProductHandler}>
                <i className='fas fa-plus' style={{margin: '5px 5px 0px 0px'}}></i> Create Product
            </Button>
            {loadingDelete && <Loader margin='10px 0px'/>}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

            {loadingCreate && <Loader margin='10px 0px'/>}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading ? <Loader margin='10px 0px'/> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                <Table striped bordered hover responsive className='table-sm' style={{marginBottom: '100px'}}> 
                    <thead>
                        <tr>
                            <th>PRODUCT ID</th>
                            <th>PRODUCT NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                        <Button className='btn-sm' variant='light'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                </td>
                                <td>
                                    <Button className='btn-sm delete' variant='light' onClick={() => deleteHandler(product._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Paginate pages={pages} page={page} isAdmin={true}/>
            </>
            )}
        </Container>
        <NavbarBottom/>
        </>
    )
}

export default ProductDashboard
