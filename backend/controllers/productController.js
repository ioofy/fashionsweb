import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @desc Fetch all products
// @route GET /api/products?
// @acces Public

const getProducts = asyncHandler(async(req, res) => {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    const count = await Product.count({ ...keyword })
    const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page -1))
    res.json({ products, page, pages: Math.ceil(count / pageSize) })

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

// @desc Delete a products
// @route DELETE /api/products/:id
// @acces Private/admin

const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message : 'Product removed'})
    }

})

// @desc Create a products
// @route POST /api/products/
// @acces Private/admin

const createProduct = asyncHandler(async(req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/prod_img/adidas_1.png',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
        haveColor: 'yes',
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)

})

// @desc Update a products
// @route PUT /api/products/:id
// @acces Private/admin

const updateProduct = asyncHandler(async(req, res) => {
    const {name, price, description, image, brand, category, countInStock, haveColor} = req.body

    const product = await Product.findById(req.params.id)

    if(product){

        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock
        product.haveColor = haveColor
        

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})


// @desc Create new review
// @route POST /api/products/:id/reviews
// @acces Private

const createProductReview = asyncHandler(async(req, res) => {
    const {
        rating, comment
    } = req.body

    const product = await Product.findById(req.params.id)

    if(product){
        const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())
        if(alreadyReviewed){
            res.status(400)
            throw new Error('🤥 Oops, Product already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        product.reviews.push(review)

        product.numReviews = product.reviews.length

        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

        await product.save()
        res.status(201).json({ message: 'Review added'})
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})

export{
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
}