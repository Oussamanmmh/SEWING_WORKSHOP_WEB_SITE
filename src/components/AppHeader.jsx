import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './logo';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const scrollAbout = () => {
      const location =   document.getElementById('about')

      if(location) location.scrollIntoView({ behavior: 'smooth' });

    };
    const scrollHome = () => {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });


    }

    const scrolProduits = () => {
        document.getElementById('produits').scrollIntoView({ behavior: 'smooth' });

    }
    const scrolLaivraison = () => {
        document.getElementById('laivraison').scrollIntoView({ behavior: 'smooth' });

    }

    const menuItems = [
        { label: 'Accueil', href:'#', onClick: scrollHome},
        { label: 'A propos', href:'#', onClick: scrollAbout},
        { label: 'Produits',  href:'#',onClick: scrolProduits},
        { label: 'Laivraison',  href:'#',onClick: scrolLaivraison },
    ];

    return (
        <nav className=" p-4 shadow-lg shadow-gray sticky top-0 z-10 text-black  w-full " style={{backgroundColor:'#FFC0CB'}}>
            <div className="container mx-auto flex justify-between items-center ">
                <motion.div
                    style={{ fontFamily: 'Roboto , sans-serif' }}
                    className="text-white text-xl font-bold cursor-pointer"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                  <Logo/>
                </motion.div>
                <div className="hidden md:flex space-x-20">
                    {menuItems.map((item) => (
                        <a
                           
                            key={item.label}
                             onClick={item.onClick}
                             className="text-white font-medium hover:text-gray-400 transition-colors duration-100 hover:cursor-pointer hover:bg-pink-100 px-2 py-1 rounded-md  "

                            style={{ fontFamily: 'Arial, sans-serif' , textUnderlineOffset:'5px' ,scrollBehavior:'smooth'} }
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <motion.div
                initial={{ height: isOpen ? 'auto' : 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
            >
                <div className="flex flex-col space-y-4 mt-4">
                    {menuItems.map((item) => (
                        <motion.a
                           onClick={item.onClick}
                            key={item.label}
                            href={item.href}
                           
                            className="text-white font-medium hover:text-gray-300 transition-colors duration-100 hover:cursor-pointer hover:bg-pink-100 px-2 py-1 rounded-md"
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
};

export default NavBar;
