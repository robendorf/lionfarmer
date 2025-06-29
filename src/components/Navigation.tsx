
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            <img 
              src="/lovable-uploads/SEEDLogov1.png" 
              alt="SEED Profile" 
              className="h-8 w-8 mr-2"
            />
            SEED Profile
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-green-700 font-semibold hover:text-yellow-600 transition-colors">Home</Link>
            <Link to="/about-seed" className="text-gray-700 hover:text-green-700 transition-colors">About SEED</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
