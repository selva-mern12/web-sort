import { useNavigate } from 'react-router-dom';
import homeBg from '../assests/bg-images/home-bg.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[calc(100vh-108px)] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="w-full h-screen flex flex-col justify-center bg-black bg-opacity-40 px-6 md:px-[20%] py-12 rounded-lg animate-fadeInUp">
        <h1 className="md:w-[60%] text-3xl md:text-[50px] leading-snug font-montserrat mb-6 animate-slideInLeft">
          Digitizing Ideas with Clean Code & Modern Design
        </h1>
        <p className="md:w-[60%] text-base md:text-[17px] my-8 mb-12 font-inter animate-slideInRight">
          At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.
        </p>
        <div className="md:w-[40%] flex flex-col md:flex-row gap-4 animate-fadeIn">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="border-2 border-white hover:bg-white hover:text-black font-semibold py-2 px-6 rounded shadow transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contact Us
          </button>
          <button
            type="button"
            className="border-2 border-white hover:bg-white hover:text-black py-2 px-6 font-semibold rounded shadow transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
