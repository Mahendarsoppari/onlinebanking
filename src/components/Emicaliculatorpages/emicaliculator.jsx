
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // This is important to import chart.js for React
import LoanTable from './loantable';
import LoanSteps from './loansteps';
import FullStackWebDev from '../Herosection/faq';
import Footer from '../Herosection/footer';
function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000); // ₹10,00,000
  const [rateOfInterest, setRateOfInterest] = useState(16); // 16%
  const [loanTenure, setLoanTenure] = useState(6); // 6 months

  const totalInterest = Math.floor(loanAmount * (rateOfInterest / 100) * (loanTenure / 12));
  const totalAmount = loanAmount + totalInterest;
  const monthlyEMI = Math.floor(totalAmount / loanTenure);

  // Donut chart data configuration
  const chartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        label: 'EMI Breakdown',
        data: [loanAmount, totalInterest],
        backgroundColor: ['#34D399', '#FB923C'], // Colors for the sections
        hoverBackgroundColor: ['#10B981', '#F97316'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50  flex justify-center items-center p-8">
      <div className="bg-white shadow-lg rounded-lg max-w-5xl w-full py-20 flex p-6">
        {/* Left Section: EMI Calculation */}
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Your monthly EMI is</h2>
          <p className="text-4xl font-bold text-orange-500 mb-4">₹{monthlyEMI.toLocaleString()}</p>
          <p className="text-gray-500 mb-6">16.00% interest rate per annum</p>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Total Interest</p>
              <p className="font-semibold">₹{totalInterest.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="font-semibold">₹{totalAmount.toLocaleString()}</p>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="h-48 w-48 mx-auto">
            <Doughnut data={chartData} />
          </div>
        </div>

        {/* Right Section: Input Sliders */}
        <div className="w-1/2 p-4">
          {/* Loan Amount */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Loan Amount</label>
            <input
              type="range"
              min="5000"
              max="6000000"
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Min ₹5K</span>
              <span>₹{loanAmount.toLocaleString()}</span>
              <span>Max ₹60L</span>
            </div>
          </div>

          {/* Rate of Interest */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Rate of Interest</label>
            <input
              type="range"
              min="6"
              max="36"
              step="0.1"
              value={rateOfInterest}
              onChange={(e) => setRateOfInterest(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Min 6%</span>
              <span>{rateOfInterest}%</span>
              <span>Max 36%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Loan Tenure</label>
            <input
              type="range"
              min="3"
              max="72"
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Min 3 months</span>
              <span>{loanTenure} months</span>
              <span>Max 72 months</span>
            </div>
          </div>

          {/* Apply Now Button */}
          <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800">
            Apply Now
          </button>
        </div>
      </div>
    </div>
    <LoanTable/>
    <LoanSteps/> 
    <div className='px-36'>
    <FullStackWebDev/>
    </div> 
    <Footer/> 
    </>
  );
}

export default EMICalculator;
