const LiveBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-red-900 to-blue-900 rounded-2xl p-6 overflow-hidden h-32 mb-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Neon frame effect */}
        <div className="absolute top-4 left-4 w-32 h-16 border-2 border-red-500 rounded-lg"></div>
        <div className="absolute top-6 left-6 w-28 h-12 border border-cyan-400 rounded"></div>

        {/* Lightning bolts */}
        <div className="absolute top-2 right-8 text-yellow-400 text-2xl transform rotate-12">
          ⚡
        </div>
        <div className="absolute bottom-2 right-12 text-blue-400 text-xl transform -rotate-12">
          ⚡
        </div>
        <div className="absolute top-4 right-20 text-yellow-300 text-lg">
          ✨
        </div>

        {/* Geometric shapes */}
        <div className="absolute bottom-4 left-8 w-6 h-6 border-2 border-yellow-400 transform rotate-45"></div>
        <div className="absolute top-6 right-4 w-4 h-4 bg-cyan-400 rounded-full"></div>
      </div>

      {/* Main LIVE button */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-gradient-to-r from-red-600 to-red-500 border-2 border-red-400 px-8 py-3 rounded-lg shadow-lg">
          <span className="text-white font-bold text-xl tracking-wider">
            LIVE
          </span>
        </div>
      </div>

      {/* Glowing effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
    </div>
  );
};

export default LiveBanner;
