import express from 'express';
import {cartItems as cartItemsRaw, products as productsRaw } from './temp-data';

let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();
app.use(express.json());


app.get('/hello',(req,res) => {
  res.send('Hello, again!');
});



app.get('/products', (req,res)=>{
  res.json(products);
});

function populateCartIds(ids){
  return ids.map(id=> products.find(product=>product.id === id))
}

app.get('/cart',(req,res)=>{
  const populatedCart = populateCartIds(cartItems);
  res.json(populatedCart);
})

app.get('/products/:productId', (req,res)=>{
  const productId = req.params.productId;
  const product = products.find(product => product.id === productId);
  res.json(product);
});

app.post('/cart', (req,res) =>{
  const productId = req.body.id;
  cartItems.push(productId);
  const populatedCart = populateCartIds(cartItems)
  res.json(populatedCart);
})

app.delete('/cart/:productId', (req,res)=>{
  const productId = req.params.productId;
  cartItems = cartItems.filter(id=>id !==productId)
  const populatedCart = populateCartIds(cartItems)
  res.json(populatedCart)
})


app.listen(8000, ()=>{
console.log('Servers is listening on port 8000')

})