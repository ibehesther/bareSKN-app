const express = require("express");
const {User, Product} = require("./models");
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    // console.log(req)
    res.send('Welcome to BareSKN');
})

app.post('/users', async(req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send(user)
    }catch (err) {
        res.status(400).send(err)
    }
})

app.get('/users', async (req, res) => {
    const users = await User.find({});

    try{
        res.send(users);
    }catch(err){
        res.status(500).send(err)
    }
})

app.post('/products', async (req, res) => {
    const product = new Product(req.body);

    try{
        await product.save();
        res.send(product);
    }catch(err) {
        res.status(500).send(err);
    }
})

app.get('/products', async(req, res) => {
    const products = await Product.find({});

    try{
        res.send(products);
    }catch (err) {
        res.status(500).send(err);
    }
})

module.exports = app;