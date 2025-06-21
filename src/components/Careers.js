import { useEffect } from "react";

import Footer from "./Footer";
import TeamReachForm from "./TeamReachForm";
import careerHomeBg from "../assests/bg-images/career-home-bg.png";
import careerImage from "../assests/page-images/career-page.png";
import careerInternBg from "../assests/bg-images/career-intern-bg.png";
import careerMarketing from "../assests/page-images/career-marketing.jpg";
import careerAppDevelopment from "../assests/page-images/career-app-development.png";
import careerWebDevelopment from "../assests/page-images/career-web-development.png";
import careerUIUX from "../assests/page-images/career-ui-ux.png";

const Careers = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div
        className="h-screen bg-cover bg-center gap-10 lg:gap-20 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-[5%] py-12"
        style={{ backgroundImage: `url(${careerHomeBg})` }}
      >
        <div className="lg:w-1/2 w-full text-center lg:text-left animate-fadeDown">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            Talent wins games, but teamwork and intelligence win championships.
          </h2>
          <p className="text-base lg:text-lg pl-0 lg:pl-3">
            At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 lg:mt-0 animate-zoom">
          <img
            src={careerImage}
            alt="Career Image"
            className="max-w-full max-h-[500px] rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${careerInternBg})` }}
      >
        <div className="container mx-auto px-6 py-12 text-center backdrop-blur-[1px] bg-black/50">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 animate-fadeDown">
            Internship Opportunities at Websort
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: careerMarketing, title: "Marketing" },
              { src: careerAppDevelopment, title: "App Development" },
              { src: careerWebDevelopment, title: "Web Development" },
              { src: careerUIUX, title: "UI/UX" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between p-6 bg-white/10 rounded-xl shadow-lg h-[300px] transition-transform duration-500 hover:scale-105 hover:bg-white/20 animate-fadeUp delay-[${index * 100}ms]`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="mx-auto mb-4 rounded-xl max-h-[150px] object-cover"
                />
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TeamReachForm />
      <Footer />
    </div>
  );
};

export default Careers;
