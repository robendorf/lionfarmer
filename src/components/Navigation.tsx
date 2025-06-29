
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            <img 
              src="/lovable-uploads/0ec9aaf3-ff60-4349-84b0-5cb5ab6f62a0.png" 
              alt="SEED Profile Logo" 
              className="h-10 w-10 mr-3"
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
