// import { useState } from "react";
// import { Link } from "react-router-dom";

// /* =========================
//    ICONS
// ========================= */

// function EcoLogoIcon() {
//   return (
//     <svg
//       width="42"
//       height="42"
//       viewBox="0 0 42 42"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="42" height="42" rx="12" fill="#16A34A" />

//       <path
//         d="M28.5 10.5C20 11.2 13 15.5 13 23.5C13 29 17.2 32 21.5 32C27.5 32 30.5 27.2 30.5 21.5C30.5 17.5 29.5 13.5 28.5 10.5Z"
//         fill="white"
//       />

//       <path
//         d="M15 29C18.5 24.5 22 21 27.5 18"
//         stroke="#16A34A"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function MailIcon() {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <rect x="3" y="5" width="18" height="14" rx="2" />
//       <path d="m3 7 9 6 9-6" />
//     </svg>
//   );
// }

// function ArrowLeftIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M19 12H5" />
//       <path d="m12 19-7-7 7-7" />
//     </svg>
//   );
// }

// function CheckCircleIcon() {
//   return (
//     <svg
//       width="52"
//       height="52"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//     >
//       <circle cx="12" cy="12" r="9" />
//       <path d="m8 12 2.5 2.5L16 9" />
//     </svg>
//   );
// }

// /* =========================
//    VALIDATION
// ========================= */

// function isValidEmail(value) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
// }

// function isValidIndianMobile(value) {
//   return /^[6-9]\d{9}$/.test(value);
// }

// /* =========================
//    FORGOT PASSWORD
// ========================= */

// function ForgotPassword() {
//   const [identity, setIdentity] = useState("");

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setError("");
//     setSuccess(false);

//     const cleanIdentity = identity.trim().replace(/\s/g, "");

//     if (!cleanIdentity) {
//       setError("Please enter your email or mobile number.");
//       return;
//     }

//     if (
//       !isValidEmail(cleanIdentity) &&
//       !isValidIndianMobile(cleanIdentity)
//     ) {
//       setError("Enter a valid email or 10-digit mobile number.");
//       return;
//     }

//     setLoading(true);

//     // Temporary mock API
//     await new Promise((resolve) => setTimeout(resolve, 1200));

//     setLoading(false);
//     setSuccess(true);

//     /*
//       Later backend API:

//       await axios.post("/api/auth/forgot-password", {
//         identity: cleanIdentity
//       });
//     */
//   };

//   return (
//     <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-8">
//       <div className="w-full max-w-md">
//         {/* LOGO */}
//         <div className="flex flex-col items-center mb-8">
//           <EcoLogoIcon />

//           <h1 className="text-3xl font-bold text-gray-900 mt-4">
//             EcoCitizen
//           </h1>

//           <p className="text-gray-600 mt-1 text-center">
//             Community-Centric Environmental Governance
//           </p>
//         </div>

//         {/* CARD */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
//           {!success ? (
//             <>
//               <div className="mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   Forgot Password?
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   Enter your registered email or mobile number and
//                   we'll help you reset your password.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 {/* EMAIL / MOBILE */}
//                 <div>
//                   <label
//                     htmlFor="identity"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Email or Mobile Number
//                   </label>

//                   <div className="relative">
//                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       <MailIcon />
//                     </div>

//                     <input
//                       id="identity"
//                       type="text"
//                       value={identity}
//                       onChange={(event) => {
//                         setIdentity(event.target.value);
//                         setError("");
//                       }}
//                       placeholder="Enter email or mobile number"
//                       className={`w-full border rounded-lg py-3 pl-11 pr-4 outline-none ${
//                         error
//                           ? "border-red-500"
//                           : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100"
//                       }`}
//                     />
//                   </div>

//                   {error && (
//                     <p className="text-red-600 text-sm mt-1">
//                       {error}
//                     </p>
//                   )}
//                 </div>

//                 {/* SUBMIT */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3 rounded-lg transition"
//                 >
//                   {loading ? "Sending..." : "Send Reset Instructions"}
//                 </button>
//               </form>

//               {/* BACK */}
//               <div className="mt-6 text-center">
//                 <Link
//                   to="/login"
//                   className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
//                 >
//                   <ArrowLeftIcon />
//                   Back to Login
//                 </Link>
//               </div>
//             </>
//           ) : (
//             /* SUCCESS */
//             <div className="text-center py-4">
//               <div className="flex justify-center text-green-600 mb-4">
//                 <CheckCircleIcon />
//               </div>

//               <h2 className="text-2xl font-bold text-gray-900">
//                 Check Your Account
//               </h2>

//               <p className="text-gray-500 mt-3 leading-relaxed">
//                 If an account exists with the provided information,
//                 password reset instructions will be sent to you.
//               </p>

//               <Link
//                 to="/login"
//                 className="inline-flex items-center justify-center gap-2 mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
//               >
//                 <ArrowLeftIcon />
//                 Back to Login
//               </Link>
//             </div>
//           )}
//         </div>

//         <p className="text-center text-xs text-gray-500 mt-6">
//           © 2026 EcoCitizen. Community-powered environmental governance.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;