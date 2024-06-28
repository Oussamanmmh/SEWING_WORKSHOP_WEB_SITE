import SocialMedia from "./socialmedia";

const FooterPage = () => {  
    return (
        <footer className="footer bg-gray-300 flex justify-center w-full">
        <div className="container bg-gray flex flex-col pb-10">
            <p className="text-center text-gray-600 py-4">© 2024 Works By Khawla. All rights reserved.</p>
           <SocialMedia/>
           <div className="flex justify-center items-center mt-4 text-gray-600  ">
          <span className="md:block  hidden">  Vous nous trouverez ici  : </span>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-5 h-5 md:hidden block "
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
          <a className="hover:font-bold ml-3 " href="https://www.google.com/maps/place/Belkheir/@36.4447789,7.1566267,11z/data=!3m1!4b1!4m15!1m8!3m7!1s0x12f05df8d8143d61:0xc096416ffaa6da99!2sGuelma!3b1!8m2!3d36.4627444!4d7.4330833!16zL20vMGI5ZF9u!3m5!1s0x12f060d4c782d12b:0x54a96631ff6a1bc5!8m2!3d36.4624365!4d7.4768384!16s%2Fm%2F0b6jp_z?entry=ttu"> BELKHIR, Guelma 24000, Algérie </a> 
            </div>
        </div>
        </footer>
    )
    }
export default FooterPage;