import React from "react";
import p10 from "../assets/p1.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";
import p14 from "../assets/p14.jpg";
import p15 from "../assets/p15.jpg";
export function FeaturedImageGallery() {
  const data = [
    {
      imgelink: p15,
    },
    {
      imgelink: p11,    },
    {
      imgelink: p12,    },
    {
      imgelink: p13,    },
    {
      imgelink:
        p14,
    },
   
  ];
 
  const [active, setActive] = React.useState(
    p12
  );
 
return (
    <div className="grid gap-4 items-center w-full">
        <div className=" mr-1/2 ml-1/2  mx-auto shadow-lg shadow-black rounded-lg">
            <img
                className="h-[480px] w-[300px] rounded-lg object-cover object-center md:h-[480px]  "
                src={active}
                alt=""
            />
        </div>
        <div className="grid grid-cols-5 gap-4">
            {data.map(({ imgelink }, index) => (
                <div key={index}>
                    <img
                        onClick={() => setActive(imgelink)}
                        src={imgelink}
                        className="h-20 w-[100px] cursor-pointer rounded-lg object-cover shadow-lg shadow-gray-600 object-center hover:scale-110 transition-transform  "
                        alt="gallery-image"
                    />
                </div>
            ))}
        </div>
    </div>
);
}
export default FeaturedImageGallery;