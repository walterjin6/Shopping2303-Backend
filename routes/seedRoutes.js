import express from 'express';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import data from '../data.js';

const seedRouter = express.Router();
// console.log(data.products);
seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createUsers });
});
export default seedRouter;
