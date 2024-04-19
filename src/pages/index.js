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
    <div className="hero bg-gradient-to-r from-cyan-900 to-cyan-950 mx-auto px-4 min-h-screen sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight">
            Hey Warehouse Companies, <span className="text-primary">
              Godawn</span> will make your job easy
          </h1>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            {/* <button className="btn btn-primary">
            <Link className="" href="#">
              Try it out
            </Link>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

            </button> */}
            <button className="btn btn-secondary">
            <Link className="" href="/contact">
              Contact us
            </Link>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

            </button>
            
          </div>

        </div>

        <div className="mt-10 md:mt-0">
          <img className="rounded-lg shadow-xl" src="/images/Warehouse.jpg" alt="Your Alt Text" />
        </div>
      </div>
    </div>

    {/* hero section */}


    {/* video section */}

    <div className="relative bg-base-200">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="block text-3xl font-bold sm:text-4xl md:text-5xl leading-tight">Designed to solve all critical problems of a <span className="text-primary">Warehouse</span></h1>
          <p className="mt-3 text-lg">Integrate your Warehouse with us. We will take care of everything.</p>
        </div>

        <div className="mt-10 relative max-w-5xl mx-auto">
          <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('/images/dashboard.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

          <div className="absolute inset-0 w-full h-full">
            <div className="flex flex-col justify-center items-center w-full h-full">

              {/* <button onClick={()=>document.getElementById('my_modal_1').showModal()}  className="btn btn-secondary">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Play the overview
              </button> */}

              <dialog id="my_modal_1" className="modal">
              <div className="modal-box p-0 max-w-none w-auto">
                
              <iframe
            width={newWidth}
            height={newHeight}
          src={youtubeVideoUrl.replace('watch?v=', 'embed/')}
          title="YouTube Video"
          allowFullScreen
        ></iframe>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* video section */}


<section className="body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-5xl text-2xl leading-tight font-bold title-font mb-4">
        Every Warehouse loves these features
      </h1>
      {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
        Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
        pug.
      </p> */}
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-300 text-primary mb-5 flex-shrink-0">

          <LuBoxes  size={40} />

        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font font-medium mb-3">
          Manage Godowns/Stores
          </h2>
          <p className="leading-relaxed opacity-80">
          If you have multiple godowns or stores across different locations, you know how challenging it can be to manage them efficiently. You need to keep track of the inventory levels, the stock movements, the transfers, and the deliveries.Thats why the Godawn web is your best inventory management software. With the Godawn web, you can add and manage all your godowns from a single dashboard. You can save time, money, and effort by managing your godowns smartly and smoothly.
          </p>
        
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-300 text-primary mb-5 flex-shrink-0">
         
         {/* <Gavel size={40} /> */}
         <HiMiniArrowsUpDown size={40} />
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font font-medium mb-3">
          Stock Management
          </h2>
          <p className="leading-relaxed opacity-80">
          One of the most important aspects of inventory management is stock management. You need to ensure you have enough stock to meet the demand but not too much that you incur unnecessary costs and wastage. Further, you need to organise your stock to make it easy to access, identify, and manage. You can make your life easier by effortlessly moving stock between your warehouses and organising your inventory. For better identification and management, you can add items in different batches and serials.
          </p>
          {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-300 text-primary mb-5 flex-shrink-0">
          {/* <Notebook size={40} /> */}
          <TbShoppingCartCopy size={40} />
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font font-medium mb-3">
          Order Management
          </h2>
          <p className="leading-relaxed opacity-80">
          You need to manage every aspect of your sales and purchases with ease. Further, you must track packages and shipments, ensuring timely deliveries and happy customers.With the best order management app by Vyapar, you can create and send professional invoices and bills to your customers and suppliers. You can also customise your invoices and statements with your logo, signature, terms and conditions, and more. You can streamline your order management process and improve customer satisfaction and loyalty.
          </p>
          {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
      </div>


      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-300 text-primary mb-5 flex-shrink-0">
          {/* <Robot size={40} /> */}
          <HiOutlineDocumentReport size={40} />
        </div>
        <div className="flex-grow">
          <h2 className=" text-lg title-font font-medium mb-3">
          Business Reports
          </h2>
          <p className="leading-relaxed text-base">
          Get instant updates on your supply chain, keep an eye on stock movements, check inventory levels, and use the latest data to make intelligent decisions. React quickly to changes and save time and money. One of the critical benefits of inventory management is gaining real-time visibility. You can optimise decision-making with stock transfer reports. With the Godawn web, you can gain real-time visibility and optimise decision-making. You can improve your business efficiency and profitability by using data-driven strategies.
          </p>
          {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-300 text-primary mb-5 flex-shrink-0">
          {/* <Warning size={40} /> */}
          <BsDatabaseFillCheck size={40} />
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font font-medium mb-3">
          Organise Your Data
          </h2>
          <p className="leading-relaxed opacity-80">
          One of the main advantages of inventory management is organising your data and making it easy to access and manage. You also need to collect your data to make creating and implementing sales and business strategies easy. The Godawn web also helps you to analyse your data and identify opportunities and challenges. You can use the sales analysis feature to find the best-selling products, customers, regions, brands and more. It enables swift identification of fast-selling products, facilitating informed sales and business strategies. 
          </p>

        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-300 text-primary mb-5 flex-shrink-0">
          {/* <Scroll size={40} /> */}
          <GiTakeMyMoney size={40} />
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font font-medium mb-3">
          Boost Profitability
          </h2>
          <p className="leading-relaxed opacity-80">
          One of the ultimate goals of inventory management is boosting profitability and increasing revenue. You must minimise stock-outs and reduce excess inventory, as they can affect your sales and cash flow. By minimising stock-outs and reducing excess inventory, MSMEs can improve their profitability. Maximise the utilisation of available stock, minimise wastage, and ensure timely order fulfilment, leading to enhanced customer satisfaction and increased revenue.
          </p>
          
        </div>
      </div>

    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
    </button> */}
  </div>
</section>



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

