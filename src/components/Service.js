import { useEffect } from 'react';
import Footer from './Footer';
import serviceBg1 from '../assests/bg-images/service-1-2-bg.jpg';
import serviceBg2 from '../assests/bg-images/service-3-bg.png';
import serviceBg3 from '../assests/bg-images/service-4-bg.jpg';
import serviceUiUx from '../assests/page-images/service-page/service-ui-ux.png';
import serviceWebDevelopment from '../assests/page-images/service-page/service-web-development.png';
import serviceAppDevelopment from '../assests/page-images/service-page/service-app-development.png';
import serviceMarketing from '../assests/page-images/service-page/service-marketing.png';

const Service = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full text-white">
      {/* Section 1: UI/UX Design */}
      <section
        className="min-h-screen bg-cover bg-[center_top] flex flex-col justify-center px-6 md:px-16 py-16 animate-fade"
        style={{ backgroundImage: `url(${serviceBg1})` }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fadeUp">Our Services</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={serviceUiUx}
            alt="UI/UX"
            className="w-full md:w-1/2 rounded-xl border-2 border-white hover:scale-105 transition duration-300 animate-zoom"
          />
          <div className="w-full md:w-1/2 animate-slideInRight">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-base md:text-lg leading-relaxed">
              We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Web Development */}
      <section
        className="min-h-screen bg-cover bg-[center_bottom] flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-16 animate-fadeUp"
        style={{ backgroundImage: `url(${serviceBg1})` }}
      >
        <div className="w-full md:w-1/2 order-2 md:order-1 animate-slideInLeft">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Web Development</h3>
          <p className="text-base md:text-lg leading-relaxed">
            Planned and executed a digital strategy including SEO, social media marketing, and content creation. Improved traffic and engagement through targeted campaigns and regular performance tracking.
          </p>
        </div>
        <img
          src={serviceWebDevelopment}
          alt="Web Dev"
          className="w-full md:w-1/2 order-1 md:order-2 rounded-xl border-2 border-white hover:scale-105 transition duration-300 animate-zoom"
        />
      </section>

      {/* Section 3: App Development */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-16 animate-slideInRight"
        style={{ backgroundImage: `url(${serviceBg2})` }}
      >
        <img
          src={serviceAppDevelopment}
          alt="App Dev"
          className="w-full md:w-1/2 rounded-xl border-2 border-white hover:scale-105 transition duration-300 animate-zoom"
        />
        <div className="w-full md:w-1/2 animate-fadeRight">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">App Development</h3>
          <p className="text-base md:text-lg leading-relaxed">
            Developed a cross-platform mobile app using Flutter. The app allows users to browse services, make bookings, and receive updates. Designed for clean UI and smooth UX.
          </p>
        </div>
      </section>

      {/* Section 4: Digital Marketing */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-16 animate-fade"
        style={{ backgroundImage: `url(${serviceBg3})` }}
      >
        <div className="w-full md:w-1/2 animate-slideInLeft">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Digital Marketing</h3>
          <p className="text-base md:text-lg leading-relaxed">
            Designed and developed a responsive, SEO-optimized website using React. Features include modern UI, fast speed, and mobile compatibility, built to improve discoverability and user engagement.
          </p>
        </div>
        <img
          src={serviceMarketing}
          alt="Marketing"
          className="w-full md:w-1/2 rounded-xl border-2 border-white hover:scale-105 transition duration-300 animate-zoom"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Service;
