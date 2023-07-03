import React from 'react';
import AnchorLink from './common/Link'
const Product = ({ imageSrc, category, title, price }) => {
  return (
    <div className="lg:w-1/4 md:w-1/3  p-4 w-60 m-5 shadow-sm shadow-gray-100">
      <AnchorLink className="block relative h-48 rounded overflow-hidden" path={"product/:id"}>
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={imageSrc}
        />
      </AnchorLink>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-white title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">${price}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <label htmlFor="quantity" className="mr-2 text-sm text-gray-400">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              defaultValue="1"
              className="w-16 p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
