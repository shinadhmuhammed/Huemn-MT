import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const title = useSelector((state) => state.site.title); 
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-gray-200 transition duration-300 ease-in-out hover:border-b-2 hover:border-blue-500">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold mb-1">{title}</h1>
        <p className="text-sm text-gray-600">Made with Squarespace</p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="mr-8 mb-2 md:mb-0">
          <h2 className="font-semibold mb-1">Location</h2>
          <p className="text-sm">123 Demo Street</p>
          <p className="text-sm">New York, NY 12345</p>
        </div>
        <div>
          <h2 className="font-semibold mb-1">Contact</h2>
          <p className="text-sm">email@example.com</p>
          <p className="text-sm">(555) 555-5555</p>
        </div>
      </div>
    </header>
  );
};

export default Footer;
