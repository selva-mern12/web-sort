import aboutBg from '../assests/bg-images/about-bg.png';

const About = () => {
  return (
    <div
      className="h-full bg-cover bg-[center_left] bg-no-repeat"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div
        style={{ textShadow: '2px 2px 4px black' }}
        className="bg-white/20 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 text-black backdrop-blur-[1px]"
      >
        <div className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-12">
          <h2 className="font-montserrat text-white text-4xl sm:text-5xl mb-4 text-center md:text-left animate-fade">
            About Us
          </h2>
          <h5 className="font-montserrat text-white text-2xl sm:text-3xl font-semibold text-center md:text-left animate-fadeRight delay-200">
            Where Innovation Meets Execution
          </h5>
        </div>
        <div className="md:w-1/2 w-full space-y-6 animate-slide delay-300">
          <p className="font-inter text-white leading-relaxed text-base sm:text-lg text-justify">
            Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results.
            We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audience.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              className="mt-2 px-6 py-2 bg-transparent text-white rounded-md border-2 border-white font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-md hover:shadow-xl animate-zoom delay-500"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
