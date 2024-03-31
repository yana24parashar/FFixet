import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px] font-bold text-transparent bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-shadow: 0 0 2px #000">
        FFixet.
      </h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 hover:underline">
          <a href="/">Home</a>
        </li>
        <li className="p-4 hover:underline">
          <a href="/consult">Consult</a>
        </li>
        <li className="p-4 hover:underline">
          <a href="/ExercisePage">Excercise</a>
        </li>
        {/* <li className='p-4'></li> */}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 ">
          FFixet.
        </h1>
        <li className="p-4 border-b border-gray-600 ">Home</li>
        <li className="p-4 border-b border-gray-600">Cosult</li>
        <li className="p-4 border-b border-gray-600">Exercise</li>
        <li className="p-4 border-b border-gray-600">Testimonials</li>

        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
