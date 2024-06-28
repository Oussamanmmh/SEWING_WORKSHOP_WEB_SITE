// src/components/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import FeaturedImageGallery from '../components/gallery';
import Constctus from '../components/contact';

const HomePage = () => {
  const scrollAbout = () => {
    const location =   document.getElementById('about')

    if(location) location.scrollIntoView({ behavior: 'smooth' });
    console.log ("hellow")

  };
  return (
    <div id='home' className="min-h-screen bg-gray-100">
      
      <main className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-10"
        >
          <h1 className=" font-playwrite text-4xl font-bold text-gray-800">Bienvenue chez atelier 
            <br/>
            <br/>

          <motion.span
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block mx-2"
      >
         Works
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="inline-block mx-1"
      >
        by
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="inline-block mx-1"
      >
        Khawla
      </motion.span>
            </h1>
            <br/>
          <p className="text-gray-600 mt-5">
          Votre source de vêtements et robes sur mesure pour femmes. 
          <br/>
           Votre satisfaction est notre priorité. 
          </p>
        </motion.div>
        
        <div className="flex md:flex-row justify-around  mt-20 gap-10 flex-col ">
            <div className='w-full flex-grow'>
            <FeaturedImageGallery />
            </div>
           
       

            <div className='flex  flex-col md:gap-20 gap-10 justify-center text-center md:w-1/2 items-center flex-grow-0'>
                <p className="text-gray-600 mt-4  text-2xl font-bold ">
                 Un petit atelier de couture dédié à la création de 
                 pièces uniques et raffinées pour femmes. Nous sommes passionnés par la mode et mettons tout notre savoir-faire à votre service pour vous proposer des créations qui correspondent à vos envies et à votre style.
                </p>
              <div className='flex justify-center items-center mt-4 text-gray-600  gap-20'>
                <button onClick={scrollAbout} className="bg-gray-800 text-white font-bold py-2 px-4 md:h-20    h-15 rounded-xl hover:bg-gray-700  transition transform scale-100 hover:scale-110">
                    En savoir plus
                </button>
             <Constctus/>
               
            </div>
            </div>
        </div>  
      </main>
    </div>
  );
};

export default HomePage;
