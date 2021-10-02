import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Loader from '../Stuff/Loader'
import Message from '../Stuff/Message'
import { listProductsDetails, updateProduct } from '../../actions/productActions'
import Navbar from '../Navbar/Navbar'
import '../../style/index.css'
import NavbarBottom from '../Navbar/NavbarBottom'
import { useDispatch, useSelector} from 'react-redux'
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants'

const ProductEdit = ({ match }) => {
    
    let history = useHistory()
    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setcountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [haveColor, setHaveColor] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const productUpdate = useSelector((state) => state.productUpdate)
    const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = productUpdate

    useEffect(() => {
        if(successUpdate){
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/productlist')
        }
        else{
            if(!product.name || product._id !== productId){
                dispatch(listProductsDetails(productId))
            }
            else{
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setcountInStock(product.countInStock)
                setDescription(product.description)
                setHaveColor(product.haveColor)
            }      
        }

    },[ dispatch, product, history, productId, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        //UPDATE PRODUCT
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock,
            haveColor,
        }))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/api/upload', formData, config)
    
          setImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }

    useEffect(() => {
        document.title = "Admin Dashboard | Fashions, Explore dan beli pakaian dengan fashion favorit kamu sekarang juga"
    }, [])

    return (
        <>
            <Navbar/>
                <Container className="update-container">
                    <Row>
                        <Col md={4}>
                            <Link to='/admin/productlist' className='btn btn-light my-3'>
                                GO BACK
                            </Link>
                                <h1 style={{margin: '10px 0px', fontWeight: 'bold'}}>Edit Product</h1>
                                {loadingUpdate && <Loader/>}
                                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message> }
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

                                    <Form.Group controlId='price' className="update-group">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type='number'
                                            placeholder='Enter Price'
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='image' className="update-group">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter the image URL'
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        ></Form.Control>
                                        <Form.File id='image-file' custom onChange={uploadFileHandler}></Form.File>
                                        {uploading && <Loader/> }
                                    </Form.Group>

                                    <Form.Group controlId='brand' className="update-group">
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter name brand'
                                            value={brand}
                                            onChange={(e) => setBrand(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='category' className="update-group">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter the category type'
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='countInStock' className="update-group">
                                        <Form.Label>Count In Stock</Form.Label>
                                        <Form.Control
                                            type='number'
                                            placeholder='Enter the stock number'
                                            value={countInStock}
                                            onChange={(e) => setcountInStock(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='description' className="update-group">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            as="textarea" aria-label="With textarea"
                                            type='text'
                                            placeholder='Enter the description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='haveColor' className="update-group">
                                        <Form.Label>Have Color?</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Is the items have a color?'
                                            value={haveColor}
                                            onChange={(e) => setHaveColor(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Button type='submit' variant='primary' style={{width: '12rem', height: '3.2rem'}}>
                                        Update PRODUCT
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

export default ProductEdit
