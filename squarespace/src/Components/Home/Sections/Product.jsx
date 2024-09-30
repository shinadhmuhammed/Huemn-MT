import React from 'react';
import image2 from '../.././../Images/image2.jpeg';
import image3 from '../.././../Images/image3.jpeg';
import image4 from '../.././../Images/image4.jpeg';

const products = [
  { id: 1, name: 'Product Name', price: '$25', image: image2 },
  { id: 2, name: 'Product Name', price: '$25', image: image3 },
  { id: 3, name: 'Product Name', price: '$25', image: image4 },
];

const Product = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-3 gap-8 mb-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col items-center p-4 border-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out"
          >
            <div className="w-full aspect-square rounded-full overflow-hidden mb-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
          SHOP ALL
        </button>
      </div>
      <div className="flex justify-end mt-4">
        <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          CHANGE LAYOUT
        </button>
      </div>
    </div>
  );
};

export default Product;
