import React, { useEffect }from 'react'
import styled from '@emotion/styled'
import Product from './Product'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import { useParams } from 'react-router-dom'
import Paginate from '../pages/Paginate'
import { Container } from 'react-bootstrap'
import '../../style/index.css'

const ContainerProd = styled.div
`
    display: flex;
    justify-content: center;
    align-items: centers;
    margin: 0 auto;
    flex-wrap: wrap;
    max-width: 1400px;

`

// Products disini sebagai renderan dari product.js dan melooping semua object array yang ada di data/data.js
// Lalu akan dirender ke page/Home.js

const Products = () => {
    const {keyword} = useParams();
    const { pageNumber } = useParams() || 1;
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() =>{

        dispatch(listProducts(keyword, pageNumber))

    }, [dispatch, keyword, pageNumber])

    
    return (
    <>
        { loading ? <Loader margin= '200px auto'/> : error ? <Message variant='danger' margin='150px auto' textAlign='center'>{error}</Message> : 
        <>
        <ContainerProd>
            {products.map(product => (

                <Product product={product} key={product._id} />

            ))}
        </ContainerProd>
        <Container style={{marginTop: '100px'}}>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
        </Container>
        </>
     }
    

    </>
    )
}

export default Products
