import express from 'express';
import { MongoClient } from 'mongodb';
import { cartItems as cartItemsRaw, products as productsRaw } from './temp-data';

let cartItems = cartItemsRaw;
let products = productsRaw;

async function start() {
  const url = `mongodb+srv://fsv-server:Abc123@cluster0.vkql371.mongodb.net/?retryWrites=true&w=majority`
  const client = new MongoClient(url);

  await client.connect();
  const db = client.db('fsv-db');

  const app = express();
  app.use(express.json());

  app.get('/products', async (req, res) => {
    const products = await db.collection('products').find({}).toArray();
    res.send(products);
  });

  async function populateCartIds(ids) {
    return Promise.all(ids.map(id => db.collection('products').findOne({ id })));
  }

  app.get('/users/:userId/cart', async (req, res) => {
    const user = await db.collection('users').findOne({ id: req.params.userId });
    const populatedCart = await populateCartIds(user.cartItems);
    res.json(populatedCart);
  });

  app.get('/products/:productId', async (req, res) => {
    const productId = req.params.productId;
    const product = await db.collection('products').findOne({ id: productId });
    res.json(product);
  });

  app.post('/users/:userId/cart', async (req, res) => {
    const userId = req.params.userId;
    const productId = req.body.id;

    await db.collection('users').updateOne({ id: userId }, {
      $addToSet: { cartItems: productId }
    });

    const user = await db.collection('users').findOne({ id: req.params.userId });
    const populatedCart = await populateCartIds(user.cartItems);
    res.json(populatedCart);
  });

  app.delete('/cart/:productId', (req, res) => {
    const productId = req.params.productId;
    cartItems = cartItems.filter(id => id !== productId);
    const populatedCart = populateCartIds(cartItems);
    res.json(populatedCart);
  });

  app.listen(8000, () => {
    console.log('Server is listening on port 8000')
  });
}

start();