import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className= 'flex justify-between items-center w-full mx-auto h-24 sm:bg-white text-black px-4'>
      <div className="cursor-pointer">
        <h1 className="w-full text-3xl font-bold text-green-600">Z-Cafe.</h1>
      </div>
      <ul className="hidden lg:flex">
        <li className="p-4 font-bold text-gray-600">ANASAYFA</li>
        <li className="p-4 font-bold text-gray-600">MENÜLERİMİZ</li>
        <li className="p-4 font-bold text-gray-600">HAKKIMIZDA</li>
        <li className="p-4 font-bold text-gray-600">BLOG</li>
        <li className="p-4 font-bold text-gray-600">İLETİŞİM</li>
      </ul>
      <div onClick={handleNav} className='block lg:hidden'>
        {!nav ? <AiOutlineClose className="w-5 h-5"/> : <AiOutlineMenu className="w-5 h-5"/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-out duration-500' : 'fixed left-[-100%]'}>
      <div>
      <h1 className="w-full text-3xl font-bold text-white cursor-pointer">Z-Cafe.</h1>
      </div>
        <ul className="pt-6">
          <li className="p-4 font-bold text-gray-600 border-b border-gray-300">ANASAYFA</li>
          <li className="p-4 font-bold text-gray-600 border-b border-gray-300">MENÜLERİMİZ</li>
          <li className="p-4 font-bold text-gray-600 border-b border-gray-300">HAKKIMIZDA</li>
          <li className="p-4 font-bold text-gray-600 border-b border-gray-300">BLOG</li>
          <li className="p-4 font-bold text-gray-600">İLETİŞİM</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
