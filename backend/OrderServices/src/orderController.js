import Order from './orderModel.js';

const orderController = {
  getAllOrders : async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

getOrderById : async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

createOrder : async (req, res) => {
  try {
    const { customerId, products, totalAmount } = req.body;
    const order = new Order({ customerId, products, totalAmount });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

updateOrder : async (req, res) => {
  try {
    const { customerId, products, totalAmount } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { customerId, products, totalAmount }, { new: true });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},
deleteOrder : async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
}

export default orderController
