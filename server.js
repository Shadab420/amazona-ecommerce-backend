import express from 'express';
import products from './fakeData/products';


const app = express();

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.listen(5000, () => {
    console.log('Server started at localhost:5000');
})