import teamReachFormBg from '../assests/bg-images/teamreachform-bg.png';

const TeamReachForm = () => {
  return (
    <section
      className="min-h-screen bg-no-repeat bg-cover bg-center py-16 px-6 md:px-20 text-white animate-fade"
      style={{ backgroundImage: `url(${teamReachFormBg})` }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-slideInLeft">
          Need support or want to collaborate?
        </h2>
        <h5 className="text-lg font-light mb-10 animate-fadeUp">
          Fill out the form and our team will get back to you shortly
        </h5>

        <form
          onSubmit={(e) => {
            alert('Thank you! We have received your message.');
          }}
          className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-6 animate-fadeInUp"
        >
          {[
            { label: 'First Name', placeholder: 'Your first name', type: 'text' },
            { label: 'Second Name', placeholder: 'Your last name', type: 'text' },
            { label: 'Email Address', placeholder: 'you@example.com', type: 'email' },
            { label: 'Phone', placeholder: '+91-XXXXXXXXXX', type: 'text' },
            { label: 'Company', placeholder: 'Company name', type: 'text' }
          ].map(({ label, placeholder, type }, i) => (
            <div key={i} className="animate-slideInRight">
              <label className="block text-sm mb-2 font-semibold">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent border-b-2 border-red-500 focus:border-red-300 focus:outline-none py-2 placeholder-gray-300 text-white transition-all"
              />
            </div>
          ))}

          <div className="md:col-span-3 animate-zoom">
            <label className="block text-sm mb-2 font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full bg-transparent border-b-2 border-red-500 focus:border-red-300 focus:outline-none py-2 placeholder-gray-300 text-white resize-none transition-all"
            ></textarea>
          </div>

          <div className="md:col-span-3 flex justify-start mt-4 animate-bounce">
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold py-2 px-8 rounded-full hover:bg-red-600 transition-all duration-300 active:scale-95 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeamReachForm;
