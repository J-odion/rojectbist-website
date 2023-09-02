import { Swiper, SwiperSlide } from "swiper/react";
import HeaderComponent from "../Components/Header";
import CardSection from "../Components/CardSection";

export default function BlogPage() {
  return (
    <div>
      <HeaderComponent />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>

      <div className="blogBody">
      <CardSection />
      </div>
    </div>
  );
}
