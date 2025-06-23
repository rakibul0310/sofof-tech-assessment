import { Star, Check } from "lucide-react";

const PremiumBanner = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-4 text-white shadow-lg">
      <div className="flex items-start space-x-3">
        <Star
          className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1"
          fill="currentColor"
        />
        <div className="flex-1">
          <h3 className="font-bold text-base mb-1">Premium</h3>
          <p className="text-purple-100 text-xs mb-3 leading-relaxed">
            We have subscription.
            <br />
            Do you want to subscribe?
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 transition-colors">
            <Check className="w-3 h-3" />
            <span>Subscribe Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumBanner;
