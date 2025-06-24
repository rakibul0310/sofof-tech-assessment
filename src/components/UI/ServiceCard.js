const ServiceCard = ({ imgSrc, title }) => {
  return (
    <div className="flex justify-center rounded-full cursor-pointer w-fit h-fit bg-[#FFFFFF]">
      <img
        src={imgSrc}
        alt={title}
        className="hover:shadow-md transition-shadow rounded-full w-[150px] h-[150px]"
      />
    </div>
  );
};

export default ServiceCard;
