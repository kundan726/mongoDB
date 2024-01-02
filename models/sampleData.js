import mongoose from "mongoose";

// const sampledataSchema = new mongoose.Schema({
//     _id: { type: Number, required: true },
//     customer: { type: String, required: true },
//     orderDate: { type: Date, required: true },
//     product: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   price: { type: Number, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zipCode: { type: String, required: true },
// })
// const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const shippingAddressSchema = new Schema({
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const orderSchema = new Schema({
  _id: { type: Number, required: true },
  customer: { type: String, required: true },
  orderDate: { type: Date, required: true },
  items: { type: [itemSchema], required: true },
  shippingAddress: { type: shippingAddressSchema, required: true },
});

const Order = mongoose.model('Order', orderSchema);

export default Order
// module.exports = Order;
