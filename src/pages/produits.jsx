import { Card } from "@material-tailwind/react";
import CardProduit from "../components/CardProduit";
import { Map } from "react-algeria-map";
import livreur from "../assets/livreur.png";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p23 from "../assets/p23.jpg";
import p6 from "../assets/p6.jpg";
import p22 from "../assets/p22.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";

const Produits = () => {
    const imgs = [p1, p2, p3, p4, p23, p6, p22, p8, p9, p10];
    const data = {
        Adrar: 0,
        Alger: 15,
        Annaba: 22,
        "Aïn Defla": 43,
        "Aïn Témouchent": 45,
        Batna: 4,
        Biskra: 6,
        Blida: 8,
        "Bordj Badji Mokhtar": 49,
        "Bordj Bou Arreridj": 33,
        Bouira: 9,
        Boumerdès: 34,
        Béchar: 7,
        Béjaïa: 5,
        "Béni Abbès": 51,
        Chlef: 1,
        Constantine: 24,
        Djanet: 55,
        Djelfa: 16,
        "El Bayadh": 31,
        "El Meghaier": 56,
        "El Menia": 57,
        "El Oued": 38,
        "El Tarf": 35,
        Ghardaïa: 46,
        Guelma: 23,
        Illizi: 32,
        "In Guezzam": 53,
        "In Salah": 52,
        Jijel: 17,
        Khenchela: 39,
        Laghouat: 2,
        "M'Sila": 27,
        Mascara: 28,
        Mila: 42,
        Mostaganem: 26,
        Médéa: 25,
        Naâma: 44,
        Oran: 30,
        Ouargla: 29,
        "Ouled Djellal": 50,
        "Oum El Bouaghi": 3,
        Relizane: 47,
        Saïda: 19,
        "Sidi Bel Abbès": 21,
        Skikda: 20,
        "Souk Ahras": 40,
        Sétif: 18,
        Tamanrasset: 10,
        Tiaret: 13,
        Timimoun: 48,
        Tindouf: 36,
        Tipaza: 41,
        Tissemsilt: 37,
        "Tizi Ouzou": 14,
        Tlemcen: 12,
        Touggourt: 54,
        Tébessa: 11,
      };
    

    
    return (
        <div id="produits" className="mb-[50px] mt-[50px] ml-10 flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center">Produits</h1>
        <div className="flex items-center overflow-x-auto gap-10  mb-20 custom-scrollbar ">
            {imgs.map((img, index) => (
                <CardProduit key={index} src={img} />
            ))}
            <button className=" text-white shadow-lg shadow-gray-600 bg-blue-600 w-full mr-10 h-10 rounded-lg  transition  transform hover:rounded-xl hover:scale-110  "
            onClick={window.open("https://www.facebook.com/profile.php?id=100064107037202&sk=photos")}
            >
               <span className="p-5">Explorer</span>
            </button>
            
        </div>
        
        <div id="laivraison" className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-4xl font-bold text-center"> La laivraison</h1>
            <p className=" text-center text-gray-600 max-w-[200px]">LA Laivraison est disponible pour <strong>58 Wilaya</strong> </p>
            <div className="flex justify-center items-center md:flex-row flex-col md:gap-20 gap-5 ">
                        <Map
            color="#95D2B3"
            HoverColor="#58B19F"
            stroke="#fff"
            hoverStroke="#218c74"
            
            data={data}
            className="  md:w-[400px] md:h-[400px] w-[300px] h-[300px]"
            onWilayaClick={(wilaya, data) => console.log(wilaya, data)}
/>;
<div className="flex flex-col justify-center items-center mr-5">
<img src={livreur} alt='livreur' className=" md:w-64 h-64 mb-5" />
<p className="text-center  text-lg md:text-xl text-gray-600 font2">Nous livrons dans les 58 wilayas d'Algérie dans moins que 48h.</p>
</div>
        </div>

        </div>
        </div>
    )
    }
    export default Produits;