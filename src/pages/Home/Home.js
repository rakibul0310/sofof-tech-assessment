"use client";

import { useNavigate } from "react-router-dom";
import Carousel from "../../components/UI/Carousel";
import LiveBanner from "../../components/UI/LiveBanner";
import PremiumBanner from "../../components/UI/PremiumBanner";
import ServiceCard from "../../components/UI/ServiceCard";

const Home = () => {
  const navigate = useNavigate();

  const handleServiceCardClick = (serviceType) => {
    switch (serviceType) {
      case "mecca-mosques":
        navigate("/mecca-mosques");
        break;
      case "help":
        console.log("Navigate to help page");
        break;
      case "feeding":
        console.log("Navigate to feeding page");
        break;
      default:
        console.log("Service not implemented yet");
    }
  };

  const carouselSlides = [
    <div key="slide1">
      <img src="/assets/carusel_image.png" alt="" />
    </div>,

    <div key="slide2">
      <img src="/assets/carusel_image.png" alt="" />
    </div>,

    <div key="slide3">
      <img src="/assets/carusel_image.png" alt="" />
    </div>,

    <div key="slide4">
      <img src="/assets/carusel_image.png" alt="" />
    </div>,
    <div key="slide5">
      <img src="/assets/carusel_image.png" alt="" />
    </div>,
    <div key="slide6">
      <img src="/assets/carusel_image.png" alt="" />
    </div>,
  ];

  return (
    <div className="px-4 py-2 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Home</h1>

      {/* Hero Carousel */}
      <div className="mb-6 -mx-[1rem] md:-mx-[13rem] lg:-mx-[22rem] overflow-x-hidden">
        <Carousel slides={carouselSlides} />
      </div>

      {/* Live Banner */}
      <div className="w-full mx-auto">
        <LiveBanner />
      </div>

      {/* Services Grid */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <div onClick={() => handleServiceCardClick("mecca-mosques")}>
          <ServiceCard
            imgSrc={"/assets/section1.png"}
            title="مساعدة مكة"
            description=""
          />
        </div>
        <div onClick={() => handleServiceCardClick("mecca-mosques")}>
          <ServiceCard
            imgSrc={"/assets/section2.png"}
            title="مسجد مكة المكرمة"
            description=""
          />
        </div>
        <div onClick={() => handleServiceCardClick("mecca-mosques")}>
          <ServiceCard
            imgSrc={"/assets/section3.png"}
            title="سقيا وإطعام الحرم"
            description=""
          />
        </div>
      </div>

      {/* Premium Banner */}
      <div className="absolute bottom-20 left-0 right-0 z-20 w-fit">
        <PremiumBanner />
      </div>
    </div>
  );
};

export default Home;
