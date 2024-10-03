import React from "react";
import Threesteps from "./threesteps";
// import InfoCards from "./infopage";
// import BetterInEverySense from "./BetterInEverySense";
// import AnimatedSVG from "./productssection";
// import VideoGallery from "./videos";
// import Reviews from "./reviews";
import Whychoose from "./whychoose";
import Footer from "../Herosection/footer";
// import CreditTracker from "./creditTracker";
import FullStackWebDev from "../Herosection/faq";
import EligibilityForm from "./Eligibilityform";
const Creditcardhero = () => {
  return (
    <>
      <div className="bg-green-800 text-white h-screen flex items-center ">
        <div className="max-w-6xl mx-auto flex   justify-between ">
          {/* Left side text content */}
          <div className=" space-y-6 ">
            <h1 className="text-[42px] font-extrabold leading-tight">
              Power up your Spends <br />
              Enjoy instant access to<br />
              High-limit Credit Cards
            </h1>
            <hr className="border-white opacity-30 mb-4" />
            <div className="flex flex-row space-x-4">
              {/* Card Info Section */}
              {[
                { limit: "₹3 Lakhs*", size: "text-2xl" },
                { limit: "₹3 Lakhs*", size: "text-xl" },
                { limit: "₹3 Lakhs*", size: "text-2xl" },
              ].map((card, index) => (
                <div key={index} className="flex  space-x-2 p-4  rounded-lg transition-transform duration-300 ">
                  <img
                    src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-credit-card-hdfc-1.svg"
                    alt="Credit Card"
                    className="w-16 h-16"
                  />
                  <p className={`${card.size} text-white font-bold`}>
                    High limit up <br />
                    to {card.limit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side image */}
          <div>
            <img
              src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-hdfc-desktop-login.png"
              alt="Person pointing"
              className="w-auto h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* <InfoCards/>  */}
      {/* <BetterInEverySense/> */}
      {/* <AnimatedSVG/> */}
      {/* <CreditTracker/> */}
      {/* <Reviews/> */}
      {/* <Widget/> */}
      {/* <VideoGallery/>  */}
      <EligibilityForm/>
      <Threesteps/>
      <Whychoose/>
      <FullStackWebDev />
      <Footer />
    </>
  );
};

export default Creditcardhero;
