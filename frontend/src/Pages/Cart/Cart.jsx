import cartImg1 from '../../assets/jersey6.png'
import cartImg2 from '../../assets/jersey7.png'
import cartImg3 from '../../assets/jersey10.png'
import cartImg4 from '../../assets/jersey11.png'
import React, { useState } from 'react';
import AnchorLink from '../../Components/common/Link';

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCheckout = () => {
    // Perform checkout logic with quantity and address
    console.log('Checkout:', quantity, address);
  };

  return (
    <div className="text-gray-400 bg-gray-900 body-font px-20 py-5">
      <h1 className="text-2xl text-white font-bold mb-5">Your Cart</h1>
      {/* Cart items */}
      <div className="flex flex-col space-y-5">
        {/* Cart item 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={ cartImg1}
              alt="Product 1"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4">
              <h2 className="text-white text-lg font-semibold">Product 1</h2>
              <p className="text-gray-500">Price: $10</p>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="quantity" className="text-white mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="w-16 p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button className="text-white bg-red-500 px-4 py-2 rounded">Remove</button>
        </div>
        {/* Cart item 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={ cartImg2}
              alt="Product 2"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4">
              <h2 className="text-white text-lg font-semibold">Product 2</h2>
              <p className="text-gray-500">Price: $15</p>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="quantity" className="text-white mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="w-16 p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button className="text-white bg-red-500 px-4 py-2 rounded">Remove</button>
        </div>
                <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={ cartImg3}
              alt="Product 3"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4">
              <h2 className="text-white text-lg font-semibold">Product 2</h2>
              <p className="text-gray-500">Price: $15</p>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="quantity" className="text-white mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="w-16 p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button className="text-white bg-red-500 px-4 py-2 rounded">Remove</button>
        </div>
                <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={ cartImg4}
              alt="Product 4"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4">
              <h2 className="text-white text-lg font-semibold">Product 2</h2>
              <p className="text-gray-500">Price: $15</p>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="quantity" className="text-white mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="w-16 p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button className="text-white bg-red-500 px-4 py-2 rounded">Remove</button>
        </div>
        {/* Add more cart items as needed */}
      </div>

      {/* Cart total */}
      <div className="flex justify-between mt-10">
        <h2 className="text-lg text-white font-semibold">Total: $25</h2>
        <button className="text-white bg-indigo-500 px-6 py-3 rounded" onClick={handleCheckout}><AnchorLink path={'cart/status'} name={"Checkout"}/></button>
      </div>
    </div>
  );
};

export default CartPage;


