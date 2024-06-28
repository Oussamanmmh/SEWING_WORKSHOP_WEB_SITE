import React from 'react';


const CardProduit = ({src}) => {
  return (
    <div
  class=" mb-10 relative transition transform min-w-[200px]  hover:shadow-xl hover:shadow-black   drop-shadow-xl w-48 h-64 overflow-hidden shadow-lg shadow-black rounded-xl bg-[#3d3c3d]"
>
  
     <img src={src} alt='produit' class='w-full h-full object-cover' />
   
 
</div>
  )
};

export default CardProduit;
