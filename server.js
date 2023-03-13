import express from 'express';
// import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
// 中间件urlencoded用于解析在 URL 的查询字符串或请求正文中编码的传入请求数据
// （例如，来自 HTML 表单），并将其转换为可从属性访问的 JavaScript 对象req.body。
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get('/api/keys/paypal',(req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID||'sb')
})

app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is runnning on http://localhost:${port}`);
});
