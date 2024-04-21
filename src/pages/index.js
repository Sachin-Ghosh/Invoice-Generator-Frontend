import Link from "next/link"
import { useAuth } from "@/context/AuthContext";

import { useRouter } from "next/router";
import { LuBoxes } from "react-icons/lu";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { TbShoppingCartCopy } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";




import { PiBuildings, PiGavel, PiNotebook, PiRobot, PiWarning, PiScroll, PiPhoneCall} from "react-icons/pi";


export default function Home() {
  const {token} = useAuth();
  const router = useRouter();

  if (token) {
    router.push('/dashboard');
  }


  const youtubeVideoUrl = "https://www.youtube.com/watch?v=OnTDSLzBO8E"

  const newWidth = 560 * 1.5;
  const newHeight = 315 * 1.5;


  return (
    <div>


    {/* hero section */}
    <div className="hero bg-gradient-to-r from-violet-800 to-purple-300  mx-auto px-4 min-h-screen sm:px-6 lg:px-8" style={{backgroundImage:"url(https://media.istockphoto.com/id/1336136316/photo/woman-online-shopping-on-smart-phone-fashion-clothes-at-home.jpg?s=612x612&w=0&k=20&c=PYDR6zm5uC84qF-6a1dI8G5uXWrTg0wWMcjHSewsAM8=)"}}>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ">
        <div className="bg-white  bg-opacity-90 rounded-lg" >
          <h1 className="block text-3xl px-4 py-6 font-bold sm:text-4xl lg:text-5xl text-black lg:leading-tight">
            Hey  Companies, <span className="text-primary">
              BillBlaze</span> will make your job easy
          </h1>

          <div className="mt-7  px-5 py-5 grid gap-3 w-full sm:inline-flex">
            {/* <button className="btn btn-primary">
            <Link className="" href="#">
              Try it out
            </Link>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

            </button> */}
            <button className="btn  btn-secondary">
            <Link className="" href="/contact">
              Contact us
            </Link>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

            </button>
            
          </div>

        </div>

        
      </div>
    </div>

    {/* hero section */}

<div className="hero" style={{backgroundImage: 'url(/images/apartment1.jpg)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="py-16 text-center">
    <div className="glass bg-opacity-60 p-8 rounded-xl">
      <h1 className="mb-5 text-5xl font-bold">What are you waiting for ?</h1>
      <div className="flex justify-center items-center gap-4">
      {/* <PhoneCall size={48} className="mt-2 text-accent" /> */}
      <PiPhoneCall size={48} className="mt-2 text-accent" />
      <h1 className="text-5xl font-bold text-primary">
         7208253036
      </h1>
      </div>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
  
</div>


      

    </div>
  )
}

