import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between p-4 border-b-2 border-white z-50 bg-black">
        <div className='md:w-[70%] w-[95%] m-auto flex justify-between text-white'>
            <p className="text-xl font-bold">AI&sup2;</p>

            <p className="text-sm"><a href='#'>0x12345...0cdef</a></p>

            <ul className="flex space-x-4">
                <li>
                <a href="#" className="hover:underline">Github</a>
                </li>
                <li>
                <a href="#" className="hover:underline">Telegram</a>
                </li>
                <li>
                <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li>
                <a href="#" className="hover:underline">Pump.fun</a>
                </li>
            </ul>
        </div>
      
    </nav>
  );
};

export default Navbar;
