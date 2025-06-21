import { useEffect } from "react";
import Footer from "./Footer";
import TeamReachForm from "./TeamReachForm";
import contactBg from "../assests/bg-images/contact-bg.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div
        className="h-screen w-full bg-no-repeat bg-cover flex items-center justify-end px-6 md:px-20"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="text-right max-w-md backdrop-blur-sm p-6 rounded-md shadow-lg transition-all duration-700 hover:scale-105 animate-fadeDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-base md:text-lg font-medium">
            Have a question, idea, or project in mind? <br />
            We're here to help — get in touch with us today.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <TeamReachForm />

      {/* Address + Map Section */}
      <div className="min-h-screen flex flex-col py-12 px-4 md:px-12 bg-[#0d001a] text-white">
        <h2 className="text-3xl font-semibold text-center mb-10 animate-fadeDown">
          Address
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-1">
          <div className="w-full md:w-[60%] h-[400px] animate-zoom">
            <iframe
              title="BTM Layout Google Map"
              src="https://www.google.com/maps/embed?pb=..."
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="border border-white/50 p-6 rounded-md text-sm md:text-base text-center md:text-left w-full md:w-[30%] transition duration-500 hover:bg-white/10 animate-fadeUp">
            <p>Based in Bangalore</p>
            <p className="mt-2">contact@websort.com</p>
            <p className="mt-2">+91-XXXXXXXXXX</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
