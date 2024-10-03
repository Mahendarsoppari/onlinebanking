import React from 'react';

const LoanTable = () => {
  const data = [
    { month: "Sep '24", openingBalance: 1000000, interest: 13333, principal: 161196, closingBalance: 838803 },
    { month: "Oct '24", openingBalance: 838803, interest: 11184, principal: 163345, closingBalance: 675457 },
    { month: "Nov '24", openingBalance: 675457, interest: 9006, principal: 165523, closingBalance: 509933 },
    { month: "Dec '24", openingBalance: 509933, interest: 6799, principal: 167730, closingBalance: 342202 },
    { month: "Jan '25", openingBalance: 342202, interest: 4563, principal: 169967, closingBalance: 172235 },
    { month: "Feb '25", openingBalance: 172235, interest: 2296, principal: 172233, closingBalance: 0 },
  ];

  return (
    <div className="overflow-x-auto px-52 py-10">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="py-2 px-4 border-b">Month</th>
            <th className="py-2 px-4 border-b">Opening Balance</th>
            <th className="py-2 px-4 border-b">Interest</th>
            <th className="py-2 px-4 border-b">Principal</th>
            <th className="py-2 px-4 border-b">Closing Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{row.month}</td>
              <td className="py-2 px-4 border-b">₹ {row.openingBalance.toLocaleString()}</td>
              <td className="py-2 px-4 border-b">₹ {row.interest.toLocaleString()}</td>
              <td className="py-2 px-4 border-b">₹ {row.principal.toLocaleString()}</td>
              <td className="py-2 px-4 border-b">₹ {row.closingBalance.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
