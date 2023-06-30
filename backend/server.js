import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './UserServices/src/userRoutes.js'
import authRoutes from './UserServices/src/authRoutes.js'
import productRoutes from './ProductServices/src/productRoutes.js'
import cartRoutes from './CartServices/src/cartRoutes.js'
import orderRoutes from './OrderServices/src/orderRoutes.js'
import shippingRoutes from './ShippingServices/src/shippingRoutes.js'
import searchRoutes from './SearchServices/src/searchRoutes.js'
// Connect to MongoDB
mongoose.connect("mongodb+srv://nareshvunnam:nareshking@cluster0.etrum0q.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/order',orderRoutes)
app.use('/shipping', shippingRoutes)
app.use('/search',searchRoutes)


// Start the server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  server.close(() => process.exit(1));
});
