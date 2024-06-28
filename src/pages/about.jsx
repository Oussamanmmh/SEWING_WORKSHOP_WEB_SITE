import { Card } from "@material-tailwind/react";
import Works from "../components/works";
import CardesReseaux from "../components/cardreseaux";

const Aboutus = () => {
    return (
       <section id="about" className="aboutus">
        <div className="container mx-auto p-4">
          <div className="text-center mt-10">
            <h1 className="text-4xl font-bold text-gray-800">Qui sommes-nous ?</h1>
            <p className="text-gray-600 mt-4">
            Notre atelier de couture est spécialisé dans la création de vêtements et robes sur mesure pour femmes. Nous mettons à votre disposition une large gamme de tissus et de modèles pour vous aider à réaliser la tenue de vos rêves. Que vous ayez une idée précise en tête ou que vous ayez besoin d'inspiration, notre équipe de couturières expérimentées est là pour vous accompagner tout au long du processus de création. Nous mettons un point d'honneur à vous offrir un service personnalisé et de qualité, afin que vous soyez entièrement satisfaite du résultat. N'hésitez pas à nous contacter pour prendre rendez-vous ou pour obtenir plus d'informations sur nos services.
            </p>
          </div>
          <div className="text-center mt-10 ">
          <h1 className="text-4xl font-bold text-gray-800">Nos realisations</h1>
          <div className="mt-20 flex flex-row md:justify-around gap-5" >
            <Works text="Commande" number="200"/>
            <Works text="Facebook" number="27k "/>
            <Works text="Instagram" number="200"/>
        </div>
          </div>
        <div className="text-center flex flex-col mt-10  justify-center items-center ">
            <h1 className="text-4xl font-bold text-gray-800">Nos réseaux sociaux</h1>
            <CardesReseaux />
            
          
        </div>
        </div>

        </section>
    );
    }

    export default Aboutus;