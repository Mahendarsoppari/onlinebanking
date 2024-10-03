import React from "react";
import Footer from "../Herosection/footer";
import FullStackWebDev from "../Herosection/faq";

const HomeloanHero = () => {
  return (
    <>
      {/* Background with gradient and shape decoration */}
      <div className="relative bg-green-800 text-white h-screen flex items-center overflow-hidden">
        {/* Decorative Circle Shape */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
          {/* Left side text content */}
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Make a big move <br />
              with home loans <br />
              from <span className="text-yellow-400">8.5%*</span> p.a
            </h1>
            <p className="opacity-90">
              Unlock your dream home with easy loan approvals and minimal paperwork.
            </p>
            <hr className="border-white opacity-30 mb-4" />
            <div className="flex flex-row space-x-4">
              {/* Card Info Section */}
              {[
                { limit: "₹50 Lakhs*", size: "text-2xl" },
                { limit: "Flexible Tenures", size: "text-xl" },
                { limit: "Low EMI", size: "text-2xl" },
              ].map((card, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 p-4 rounded-lg transform transition-transform hover:scale-105"
                >
                  <img
                    src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-credit-card-hdfc-1.svg"
                    alt="Loan Info"
                    className="w-16 h-16"
                  />
                  <p className={`${card.size} text-white font-bold pl-2`}>
                    {card.limit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="#apply"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Right side image */}
          <div className="mt-8 pl-20 md:mt-0">
            <img
              src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-home-loan-login-desktop-v2.png"
              alt="Person pointing"
              className="w-auto h-auto object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Additional sections */}
      <FullStackWebDev />
      <Footer />
    </>
  );
};

export default HomeloanHero;
