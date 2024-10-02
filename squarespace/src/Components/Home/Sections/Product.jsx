import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
import image2 from '../../../Images/image2.jpeg';
import image3 from '../../../Images/image3.jpeg';
import image4 from '../../../Images/image4.jpeg';
import { updateProductPosition } from '../../../Redux/Slices/webSlice';

const initialProducts = [
  { id: '1', name: 'Product Name', price: '$25', image: image2 },
  { id: '2', name: 'Product Name', price: '$55', image: image3 },
  { id: '3', name: 'Product Name', price: '$125', image: image4 },
];

const Product = () => {
  const dispatch = useDispatch();
  const products = initialProducts;
  const { headingFont } = useSelector((state) => state.web.fonts);
  const productPosition = useSelector((state) => state.web.sections.product.position); // Get product section position from Redux

  const handlePositionChange = (position) => {
    dispatch(updateProductPosition({ position })); // Dispatch the new position to Redux
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      {/* Draggable Title */}
      <Draggable
        position={productPosition} // Use the position from Redux
        onStop={(e, data) => handlePositionChange({ x: data.x, y: data.y })} // Update position on drag stop
      >
        <div>
          <h2 className={`text-3xl font-bold text-center mb-8 ${headingFont} cursor-move`}>
            Featured Products
          </h2>
        </div>
      </Draggable>

      {/* Draggable Product Images */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        {products.map((product) => (
          <Draggable key={product.id}>
            <div>
              <div className="flex flex-col items-center p-4 border-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out cursor-move">
                <div className="w-full aspect-square rounded-full overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-lg font-semibold ${headingFont}`}>{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          </Draggable>
        ))}
      </div>

      {/* Shop All Button */}
      <div className="flex justify-center">
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
          SHOP ALL
        </button>
      </div>

      {/* Change Layout Button */}
      <div className="flex justify-end mt-4">
        <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
          <svg 
            className="w-4 h-4 mr-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          CHANGE LAYOUT
        </button>
      </div>
    </div>
  );
};

export default Product;
