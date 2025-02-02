import React from 'react';

function Threesteps() {
  return (
    <div className="min-h-auto py-40 bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Get started in 3 simple steps
      </h1>

      {/* Image */}
      <img
        src="https://dugtmg0pklp2w.cloudfront.net/cross-sell/ic-hdfc-simple-steps-desktop1440.svg"
        alt="3 simple steps"
        className="w-full max-w-xl object-contain"
      />
    </div>
  );
}

export default Threesteps;
