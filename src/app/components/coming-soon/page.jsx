"use client"
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import coming from "./coming.json"


function Contact() {
  const [email, setEmail] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail.includes("@")) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_33crp0z",
        "template_q2lary3",
        form.current,
        "hkQ-2hdK6LTVFgJnT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Welcome Abord :)", {
            position: "top-center",
            autoClose: 3003,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          alert(error.text);
        }
      );
    if (submitDisabled) {
      return;
    }
  };

  return (
    <div id="contact" className="section pb-20 items-center mx-auto px-24  flex font-second flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:w-1/2  md:mx-8">
        <p className="text-2xl font-bold  mx-8 md:mx-0 pt-8">
          {" "}
          Coming Soon
        </p>
        <h1 className="font-8xl text-lightgradient font-bold  text-left mx-8 md:mx-0 py-10 ">
          {" "}
          GET NOTIFIED WHEN WE LAUNCH
        </h1>

        <form ref={form} onSubmit={sendEmail} className="mx-8 ">
          <div className="relative items-center mx-auto  ">
            <input
              value={email}
              onChange={ handleEmailChange }
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              className="block w-full p-4 text-sm text-gray-900 border-2 border-black rounded-xl bg-gray-50"
              required
            />
            <input
              disabled={submitDisabled}
              type="submit"
              value="Notify Me"
              className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
            />
          </div>
          <ToastContainer
            position="top-center"
            autoClose={3100}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
        <div className="py-8 mx-8">
          <p className="font-second">
            *Do not worry we will not spam you {" :)"}{" "}
          </p>
        </div>
      </div>
      {/* Right Side */}
      <div className="md:block w-1/2">
        <div>
          <Lottie animationData={coming} />
        </div>
      </div>
    </div>
  );
}

export default Contact;