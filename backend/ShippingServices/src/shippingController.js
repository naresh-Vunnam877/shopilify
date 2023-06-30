import Shipping from './shippingModel.js';

const shippingController = {
  getShippingInfo : async (req, res) => {
  try {
    const shippingInfo = await Shipping.find();
    res.json(shippingInfo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

addShippingInfo : async (req, res) => {
  try {
    const { orderId, address, city, country } = req.body;
    const shippingInfo = new Shipping({ orderId, address, city, country });
    await shippingInfo.save();
    res.status(201).json(shippingInfo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

updateShippingInfo : async (req, res) => {
  try {
    const { address, city, country } = req.body;
    const shippingInfo = await Shipping.findByIdAndUpdate(
      req.params.id,
      { address, city, country },
      { new: true }
    );
    if (!shippingInfo) {
      return res.status(404).json({ error: 'Shipping info not found' });
    }
    res.json(shippingInfo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
},

deleteShippingInfo : async (req, res) => {
  try {
    const shippingInfo = await Shipping.findByIdAndDelete(req.params.id);
    if (!shippingInfo) {
      return res.status(404).json({ error: 'Shipping info not found' });
    }
    res.json({ message: 'Shipping info deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
}

export default shippingController
