import queryBg from '../assests/bg-images/query-bg.png';

const Query = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: `url(${queryBg})` }}
    >
      <h2 className="text-white text-3xl md:text-5xl font-bold text-center md:text-left mb-8 md:mb-auto md:mt-[100px] md:w-[40%]">
        Questions?<br />We're here to<br />answer them!
      </h2>

      <form
        onSubmit={(e) => {
          alert('Thank you! We have received your message.');
        }}
        className="w-full max-w-md bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-xl space-y-5 text-white">
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1">Name</label>
          <input
            type="text"
            className="p-2 bg-transparent border-b border-white  focus:outline-none transition-all"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1">Email</label>
          <input
            type="email"
            className="p-2 bg-transparent border-b border-white  focus:outline-none transition-all"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1">Number</label>
          <input
            type="tel"
            className="p-2 bg-transparent border-b border-white  focus:outline-none transition-all"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1">Message</label>
          <textarea
            className="p-3 bg-white text-black rounded-2xl h-28 outline-none resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-300 text-white font-bold py-2 px-6 rounded self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Query;
