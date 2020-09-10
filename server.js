import express from 'express';
import products from './fakeData/products';
import cors from 'cors';


const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.listen(5000, () => {
    console.log('Server started at localhost:5000');
})