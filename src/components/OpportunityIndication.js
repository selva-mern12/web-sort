import { useNavigate } from 'react-router-dom';
import opportunityBg from '../assests/bg-images/opportunity-bg.png';

const OpportunityIndication = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover bg-center py-20 px-6 text-center text-white"
      style={{ backgroundImage: `url(${opportunityBg})` }}
    >
      <h3 className="text-4xl font-semibold mb-6 drop-shadow-lg">
        See what opportunities await you
      </h3>
      <button
        onClick={() => navigate('/careers')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Explore More
      </button>
    </div>
  );
};

export default OpportunityIndication;
