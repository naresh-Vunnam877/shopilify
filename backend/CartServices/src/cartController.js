import Cart from './cartModel.js';

const cartController = {
   getCartItems : async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

 addToCart : async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cartItem = new Cart({ productId, quantity });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

 updateCartItem : async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

 removeCartItem : async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json({ message: 'Cart item removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
}

export default cartController
