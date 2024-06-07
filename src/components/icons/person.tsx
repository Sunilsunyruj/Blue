import React from 'react';

const Person = () => {
  // return (
  //   <svg
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <circle
  //       cx="12"
  //       cy="7"
  //       r="5"
  //       className={`  fill-[#C8CDD8] text-xl transition-all`}
  //     />
  //     <path
  //       d="M3 19V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V19C21 16.2386 18.7614 14 16 14H8C5.23858 14 3 16.2386 3 19Z"
  //       className={`  fill-[#70799A] text-xl transition-all`}
  //     />
  //   </svg>
  // );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );

};

export default Person;
