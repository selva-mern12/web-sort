import { TbArrowBadgeRight } from "react-icons/tb";
import homeBg from '../assests/bg-images/home-bg.png';
import serviceUiUx from '../assests/page-images/service-page/service-ui-ux.png';
import serviceWebDevelopment from '../assests/page-images/service-page/service-web-development.png';
import serviceAppDevelopment from '../assests/page-images/service-page/service-app-development.png';
import serviceMarketing from '../assests/page-images/service-page/service-marketing.png';
import aiIoTBg from '../assests/bg-images/ai-iot-bg.jpg';
import aiIoTcontentBg from '../assests/bg-images/ai-iot-content-bg.jpg';
import workDesignBg from '../assests/bg-images/work-design-bg.png';
import workDesignImg from '../assests/page-images/work-design-img.png';
import bulbImg from '../assests/page-images/bulb-img.png';
import productBg from '../assests/bg-images/product-bg.png';
import productAppDevelopment from '../assests/page-images/product-app-development.jpg';
import productMarketing from '../assests/page-images/product-marketing.jpg';

const Projects = () => {
  return (
    <div className="text-white font-sans">
      {/* Our Projects Section */}
      <div
        className="h-auto bg-cover bg-center py-16 px-4 animate-fade"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeUp">Our Projects</h2>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center my-12">
          {[{
            src: serviceAppDevelopment,
            label: 'App Development',
            highlight: false
          }, {
            src: serviceUiUx,
            label: 'UI/UX Design',
            highlight: true
          }, {
            src: serviceWebDevelopment,
            label: 'Web Development',
            highlight: false
          }].map(({ src, label, highlight }, i) => (
            <li key={i} className={`text-center flex flex-col items-center transition-all animate-zoom ${highlight ? 'scale-110' : 'hover:scale-105'}`}>
              <img src={src} className={`h-[30vh] md:h-[40vh] mb-3 rounded-lg border-[4px] ${highlight ? 'border-blue-500' : ''}`} alt={label} />
              <p className={`text-lg font-bold mt-8 px-3 py-1 rounded-3xl ${highlight ? 'bg-blue-500 text-white' : 'bg-white text-slate-950'}`}>
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* AI & IoT Section */}
      <div
        className="h-auto bg-cover bg-center flex flex-col justify-center items-center text-white px-4 py-16 animate-fadeUp"
        style={{ backgroundImage: `url(${aiIoTBg})` }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center animate-slideInLeft">Fueling the Future with Innovation</h2>
        <div
          className="w-full max-w-xl h-[350px] bg-cover bg-center rounded-xl p-6 md:p-10 bg-blue-900 bg-opacity-60 flex justify-center items-center animate-zoom"
          style={{ backgroundImage: `url(${aiIoTcontentBg})` }}
        >
          <p className="text-2xl font-bold font-inter text-center">AI and IoT-driven products</p>
        </div>
        <div className="flex my-4 animate-fade">
          <TbArrowBadgeRight className="text-red-500 scale-x-125" size={25} />
          <TbArrowBadgeRight className="scale-x-125" size={25} />
          <TbArrowBadgeRight className="scale-x-125" size={25} />
        </div>
        <button className="bg-black text-white border-2 px-8 py-3 rounded-md font-semibold hover:bg-gray-300 hover:text-black transition-all duration-300 active:scale-95 animate-fadeInUp">
          Know More
        </button>
      </div>

      {/* Web Design Section */}
      <div
        className="bg-cover bg-center flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-4 animate-slideInRight"
        style={{ backgroundImage: `url(${workDesignBg})` }}
      >
        <div className="w-full md:w-2/5 px-2 md:px-0 text-center md:text-left animate-fadeRight">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-montserrat">
            See Our Work in Web Design & Development
          </h2>
          <p className="mb-6 font-inter text-sm md:text-base leading-relaxed">
            We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.
          </p>
          <button className="bg-transparent text-white border-2 px-6 py-2 rounded-md hover:bg-gray-500 transition-all duration-300 active:scale-95 animate-bounce">
            Explore more
          </button>
        </div>
        <div className="w-full md:w-2/5 px-4 animate-zoom">
          <img src={workDesignImg} className="w-full max-w-md mx-auto rounded-lg" alt="Work Design" />
        </div>
      </div>

      {/* Why We Stand Out Section */}
      <div className="bg-[#1a0033] text-white py-16 px-6 flex flex-col md:flex-row justify-around items-center gap-8 animate-slideInLeft">
        <div className="md:w-2/5">
          <h2 className="text-[35px] font-semibold font-montserrat mb-4 animate-fadeRight">Why We Stand Out</h2>
          <p className="text-[20px] font-inter animate-fadeUp">
            At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.
          </p>
        </div>
        <img src={bulbImg} className="w-2/5 md:w-40 animate-zoom" alt="Bulb" />
      </div>

      {/* Product Achievements Section */}
      <div className="relative py-16 px-6 text-white text-center animate-fadeIn">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${productBg})` }} />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-6xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideInLeft">One of our proudest achievements.</h2>
          <p className="mb-10 text-lg max-w-3xl mx-auto animate-fadeUp">
            A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution. It's a true reflection of our commitment to excellence.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[{
              src: serviceMarketing,
              title: "Web Development"
            }, {
              src: productAppDevelopment,
              title: "App Development"
            }, {
              src: productMarketing,
              title: "Digital Marketing"
            }].map(({ src, title }, i) => (
              <div key={i} className="p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 bg-white bg-opacity-10 animate-zoom">
                <img src={src} className="w-60 h-60 object-cover border mx-auto mb-4 rounded-lg" alt={title} />
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <button className="bg-white bg-opacity-30 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 active:scale-95">
                  Explore more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rainbow Strip */}
      <div className="relative w-full h-16 animate-fade">
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(to right, #e91e63, #4caf50, #1e3a8a, #ef4444, #3b82f6)`
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
