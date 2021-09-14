import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import colors from 'colors'


dotenv.config();
connectDB()

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    res.send('API is running...')
})

app.use('/api/products/', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound);

app.use(errorHandler);


const PORT = process.env.PORT || 5000

app.listen(
    PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    
);
