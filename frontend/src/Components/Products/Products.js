import React, { useState, useEffect }from 'react'
import styled from '@emotion/styled'
import Product from './Product'
import axios from 'axios'

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

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            
            setProducts(data)
        }

        fetchProducts()
    }, [])
    
    return (
        
        <ContainerProd>
            {products.map(product => (

                <Product product={product} key={product._id} />

            ))}
        </ContainerProd>
    )
}

export default Products
