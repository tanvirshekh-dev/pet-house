import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import heroSlider from "../../public/heroslider.json";

const HeroSlider = () => {
  return (
    <section className="w-full h-[calc(100vh-80px)] mb-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {heroSlider.map((slide) => (
          <SwiperSlide key={slide.serviceId}>
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 text-white max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold pb-8">
                    {slide.serviceName}
                  </h1>
                  <p className="text-lg md:text-xl pb-8">{slide.description}</p>
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md">
                    view more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
