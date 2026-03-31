

import User from '../images/user-01.png';
import Package from '../images/package.png';
import Rocket from '../images/rocket-02.png'


//  The end of looking up of steps
//  The end of looking up of steps
const Steps = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-center mt-4 max-w-xl mx-auto text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* 3 step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white p-10 rounded-[14px] shadow-sm flex flex-col items-center text-center border border-gray-50">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <img className='w-[62px] h-[62px]' src={User} alt="" />
              </div>
              <span className="absolute -top-3 -right-12 w-6 h-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold rounded-full flex items-center justify-center">
                01
              </span>
            </div>
            <h3 className="font-bold text-[#101727] text-xl mb-3">Create Account</h3>
            <p className="text-[#627382] text-sm leading-relaxed">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[14px] shadow-sm flex flex-col items-center text-center border border-gray-50">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <img className='w-[62px] h-[62px]' src={Package} alt="" />
              </div>
              <span className="absolute -top-3 -right-12 w-6 h-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold rounded-full flex items-center justify-center">
                02
              </span>
            </div>
            <h3 className="font-bold text-[#101727] text-xl mb-3">Choose Products</h3>
            <p className="text-[#627382] text-sm leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[14px] shadow-sm flex flex-col items-center text-center border border-gray-50">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <img className='w-[62px] h-[62px]' src={Rocket} alt="" />
              </div>
              <span className="absolute -top-3 -right-12 w-6 h-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold rounded-full flex items-center justify-center">
                03
              </span>
            </div>
            <h3 className="font-bold text-[#101727] text-xl mb-3">Start Creating</h3>
            <p className="text-[#627382] text-sm leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>

          {/* Step 1 */}
          {/* <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-4xl mb-5">
              👤
            </div>
            <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-3">
              Step 01
            </span>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Create Account</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sign up in seconds with your email or social account. No credit card required to get started.
            </p>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Steps;



// const Steps = () => {
//   return (
//     // Off-white background to make the white cards pop
//     <section id="features" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header Section */}
//         <h2 className="text-3xl md:text-4xl font-bold text-[#101727] text-center">
//           Get Started In 3 Steps
//         </h2>
//         <p className="text-[#627382] text-center mt-3 max-w-xl mx-auto text-base">
//           Start using premium digital tools in minutes, not hours.
//         </p>

//         {/* 3 Step Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

//           {/* Step 1 */}
//           <div className="bg-white p-10 rounded-[24px] shadow-sm flex flex-col items-center text-center border border-gray-50">
//             {/* Icon Wrapper with Absolute Badge */}
//             <div className="relative mb-6">
//               <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center text-[#4F39F6]">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
//               </div>
//               <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#4F39F6] text-white text-xs font-bold rounded-full flex items-center justify-center">
//                 01
//               </span>
//             </div>
//             <h3 className="font-bold text-[#101727] text-xl mb-3">Create Account</h3>
//             <p className="text-[#627382] text-sm leading-relaxed">
//               Sign up for free in seconds. No credit card required to get started.
//             </p>
//           </div>

//           {/* Step 2 */}
//           <div className="bg-white p-10 rounded-[24px] shadow-sm flex flex-col items-center text-center border border-gray-50">
//             <div className="relative mb-6">
//               <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center text-[#4F39F6]">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
//               </div>
//               <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#4F39F6] text-white text-xs font-bold rounded-full flex items-center justify-center">
//                 02
//               </span>
//             </div>
//             <h3 className="font-bold text-[#101727] text-xl mb-3">Choose Products</h3>
//             <p className="text-[#627382] text-sm leading-relaxed">
//               Browse our catalog and select the tools that fit your needs.
//             </p>
//           </div>

//           {/* Step 3 */}
//           <div className="bg-white p-10 rounded-[24px] shadow-sm flex flex-col items-center text-center border border-gray-50">
//             <div className="relative mb-6">
//               <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center text-[#4F39F6]">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4.5c1.62-1.62 3.5-2.5 3.5-2.5"></path><path d="M12 15v5s3.03-.55 4.5-2c1.62-1.62 2.5-3.5 2.5-3.5"></path></svg>
//               </div>
//               <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#4F39F6] text-white text-xs font-bold rounded-full flex items-center justify-center">
//                 03
//               </span>
//             </div>
//             <h3 className="font-bold text-[#101727] text-xl mb-3">Start Creating</h3>
//             <p className="text-[#627382] text-sm leading-relaxed">
//               Download and start using your premium tools immediately.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Steps;