const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center border border-purple-200">
          {icon}
        </div>
      </div>
      <h3 className="font-medium text-gray-800 text-xs leading-tight rtl">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-xs leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
};

export default ServiceCard;
