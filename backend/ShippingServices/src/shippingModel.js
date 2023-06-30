import mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const Shipping = mongoose.model('Shipping', shippingSchema);

export default Shipping;



