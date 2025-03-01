import React, { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ovxl7jc", "template_j5mv0j2", form.current, {
        publicKey: "ar4gceY43gmwXP9A7",
      })
      .then(
        () => {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 3000); // Hide popup after 3 seconds
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="sm:px-24 px-4 pb-24" id="contact">
      <span className="text-center">
        <h1 className="text-4xl font-semibold">Contact Me</h1>
        <p className="text-gray-500 font-semibold">Get in Touch</p>
      </span>
      <div className="flex gap-11 pt-10 flex-col md:flex-row items-center justify-center">
        <div>
          <div className="flex items-center justify-center">
            <div className="p-8 rounded-lg shadow-md w-[20rem] sm:w-[28rem]">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Write me a project
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Write your name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Write your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    placeholder="Write your project"
                    className="mt-1 block h-32 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {showPopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-4 rounded shadow-md">
                    <p className="text-green-500">Email sent successfully!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
