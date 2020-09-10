import express from 'express';
import products from './fakeData/products';
import cors from 'cors';


const app = express();
app.use(cors());

//All products
app.get('/api/products', (req, res) => {
    res.send(products);
});

// Product by id
app.get('/api/product/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const product = products.find(product => product._id === productId);
    res.status(200).json({ ...product });
})

app.listen(5000, () => {
    console.log('Server started at localhost:5000');
})