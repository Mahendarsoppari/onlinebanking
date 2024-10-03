// import React, { useState } from 'react';
// import { TbHexagonLetterM } from "react-icons/tb";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-green-800 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <TbHexagonLetterM className="h-11 w-11" />
//           <span className="text-2xl font-semibold text-white tracking-wide font-mono">Money View</span>
//         </div>

//         {/* Hamburger Menu Icon */}
//         <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <button className="text-white focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul
//           className={`md:flex space-y-4 md:space-y-0 md:space-x-6 items-center md:static absolute w-full md:w-auto left-0 p-4 md:p-0 top-16 md:top-0 transform ${
//             isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           } transition-transform duration-300 md:translate-x-0`}
//         >
//           <Link to="/hero">
//             <li><a href="#" className="hover:text-[#00ccff]">Personal Loan</a></li>
//           </Link>
//           <Link to="/credit">
//             <li><a href="#" className="hover:text-[#00ccff]">Credit Tracker</a></li>
//           </Link>
//           <Link to="/creditcardhero">
//             <li><a href="#" className="hover:text-[#00ccff]">Credit Card</a></li>
//           </Link>
//           <Link to="/homeloanhero">
//             <li><a href="#" className="hover:text-[#00ccff]">Home Loan</a></li>
//           </Link>

//           {/* More Dropdown using select */}
//           <li className="relative">
//             <select
//               className="bg-green-800 text-white p-2 rounded hover:text-[#00ccff] focus:outline-none"
//               onChange={(e) => {
//                 if (e.target.value) {
//                   window.location.href = e.target.value;
//                 }
//               }}
//             >
//               <option value="">More</option>
//               <option value="/loanagainest">Loan against Property</option>
//               {/* <option value="#">FD Select</option> */} 
//               <option value="/mentorinsurence">Motor Insurance</option>
//             </select>
//           </li>

//           {/* Calculators Dropdown using select */}
//           <li className="relative">
//             <select
//               className="bg-green-800 text-white p-2 rounded hover:text-[#00ccff] focus:outline-none"
//               onChange={(e) => {
//                 if (e.target.value) {
//                   window.location.href = e.target.value;
//                 }
//               }}
//             >
//               <option value="">Calculators</option>

//               <option value="/emicaliculatorpage1">EMI Calculator</option>
//               <option value="#">Home Loan Calculator</option>
//               <option value="#">Bike Calculator</option>
//             </select>
//           </li>

//           <Link to="/contactus">
//             <li><a href="#" className="hover:text-[#00ccff]">Contact Us</a></li>
//           </Link>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { TbHexagonLetterM } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <nav className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <TbHexagonLetterM className="h-11 w-11" />
          <span className="text-2xl font-semibold text-white tracking-wide font-mono">Money View</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`md:flex space-y-4 md:space-y-0 md:space-x-6 items-center md:static absolute w-full md:w-auto left-0 p-4 md:p-0 top-16 md:top-0 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 md:translate-x-0`}
        >
          <Link to="/hero">
            <li><a href="#" className="hover:text-[#00ccff]">Personal Loan</a></li>
          </Link>
          <Link to="/credit">
            <li><a href="#" className="hover:text-[#00ccff]">Credit Tracker</a></li>
          </Link>
          <Link to="/creditcardhero">
            <li><a href="#" className="hover:text-[#00ccff]">Credit Card</a></li>
          </Link>
          <Link to="/homeloanhero">
            <li><a href="#" className="hover:text-[#00ccff]">Home Loan</a></li>
          </Link>

          {/* More Dropdown using select */}
          <li className="relative">
            <select
              className="bg-green-800 text-white p-2 rounded hover:text-[#00ccff] focus:outline-none"
              onChange={(e) => {
                if (e.target.value) {
                  navigate(e.target.value); // Use navigate for routing
                }
              }}
            >
              <option value="">More</option>
              <option value="/loanagainest">Loan against Property</option>
              <option value="/mentorinsurence">Motor Insurance</option>
            </select>
          </li>

          {/* Calculators Dropdown using select */}
          <li className="relative">
            <select
              className="bg-green-800 text-white p-2 rounded hover:text-[#00ccff] focus:outline-none"
              onChange={(e) => {
                if (e.target.value) {
                  navigate(e.target.value); // Use navigate for routing
                }
              }}
            >
              <option value="">Calculators</option>
              <option value="/emicaliculatorpage">Persnal loan</option>
              <option value="/emicaliculatorpage">Home Loan Calculator</option>
              <option value="/emicaliculatorpage">Bike Calculator</option>
            </select>
          </li>

          <Link to="/contactus">
            <li><a href="#" className="hover:text-[#00ccff]">Contact Us</a></li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
