import React from 'react';

const Payment = () => {
  // return (
  //   <svg
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <rect
  //       x="2"
  //       y="4"
  //       width="20"
  //       height="16"
  //       rx="3"
  //       className={`  fill-[#C8CDD8] text-xl transition-all`}
  //     />
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M22 10H2V8H22V10Z"
  //       className={`  fill-[#70799A] text-xl transition-all`}
  //     />
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M4 15C4 14.4477 4.44772 14 5 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15Z"
  //       className={`  fill-[#70799A] text-xl transition-all`}
  //     />
  //   </svg>
  // );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );

};

export default Payment;
