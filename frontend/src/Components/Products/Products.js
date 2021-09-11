import React, { useEffect }from 'react'
import styled from '@emotion/styled'
import Product from './Product'
import Message from '../Stuff/Message'
import Loader from '../Stuff/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'

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

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() =>{

        dispatch(listProducts())

    }, [dispatch])

    
    return (
    <>
        { loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : 
        
        <ContainerProd>
            {products.map(product => (

                <Product product={product} key={product._id} />

            ))}
        </ContainerProd> }

    </>
    )
}

export default Products
