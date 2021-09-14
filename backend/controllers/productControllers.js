import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @desc Fetch all products
// @route GET /api/products
// @acces Public

const getProducts = asyncHandler(async(req, res) => {

    const products = await Product.find({})
    res.json(products)

})


// @desc Fetch single products
// @route GET /api/products/:id
// @acces Public

const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        return res.json(product);
    }

})


export{
    getProducts,
    getProductById
}