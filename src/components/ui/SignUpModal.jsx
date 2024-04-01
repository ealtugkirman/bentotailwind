// import { AnimatePresence, motion } from "framer-motion";
// import { FiAlertCircle } from "react-icons/fi";
// import { useState } from "react";
// import { BsLightningChargeFill } from "react-icons/bs";


// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className=" grid place-content-center">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-yellow-200 text-3xl text-red-800 animate-pulse duration-1000 font-medium px-1 py-1 hover:opacity-90 transition-opacity"
//       >
//        <BsLightningChargeFill />
//       </button>
//       <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
//     </div>
//   );
// };

// const SpringModal = ({ isOpen, setIsOpen }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsOpen(false)}
//           className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: "12.5deg" }}
//             animate={{ scale: 1, rotate: "0deg" }}
//             exit={{ scale: 0, rotate: "0deg" }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-red-800 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
//           >
//             <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
//             <div className="relative z-10">
//               <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
//                 <FiAlertCircle />
//               </div>
//               <h3 className="text-3xl font-bold text-center mb-2">
//                 This is Beta
//               </h3>
//               <p className="text-center mb-6">
//                 Bento Tailwind library is not completed yet. This version is a prepublished version for development. If you are here enjoy
//               </p>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
//                 >
//                   I Love Bento
//                 </button>
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
//                 >
//                   Oky dokey boss
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Modal;

import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";
import { SiGoogle, SiGithub } from "react-icons/si";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);

const SignUpModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSuccessMessage("Account created successfully!");
      setEmail("");
      setPassword("");
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccessMessage("Signed up successfully with Google!");
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGitHubSignUp = async () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccessMessage("Signed up successfully with GitHub!");
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-yellow-200 text-3xl text-red-800 animate-pulse duration-1000 font-medium px-1 py-1 hover:opacity-90 transition-opacity"
      >
        <BsLightningChargeFill />
      </button>
      <SignUp
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        successMessage={successMessage}
        handleSignUp={handleSignUp}
        handleGoogleSignUp={handleGoogleSignUp}
        handleGitHubSignUp={handleGitHubSignUp}
      />
    </div>
  );
};

const SignUp = ({ isOpen, setIsOpen, email, setEmail, password, setPassword, error, successMessage, handleSignUp, handleGoogleSignUp, handleGitHubSignUp }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-red-800 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Sign Up
              </h3>
              <form onSubmit={handleSignUp}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <button type="submit" className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700">Sign Up</button>
              </form>
              <div className="mt-4">
                <p className="text-center mb-2">Or sign up with:</p>
                <div className="flex justify-center">
                  <button onClick={handleGoogleSignUp} className="mr-4 text-white bg-red-600 p-2 rounded-full hover:bg-red-700">
                    <SiGoogle className="text-2xl" />
                  </button>
                  <button onClick={handleGitHubSignUp} className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-900">
                    <SiGithub className="text-2xl" />
                  </button>
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModal;
