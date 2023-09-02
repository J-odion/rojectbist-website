import { Swiper, SwiperSlide } from "swiper/react";
import HeaderComponent from "../Components/Header";
import CardSection from "../Components/CardSection";
import ReactPaginate from 'react-paginate';
import 'swiper/css';
import BottomSectionBlog from "../Components/BottomSectionBlog";
export default function BlogPage() {

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



  return (
    <div>
      <HeaderComponent />
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

      <div className="blogBody">
      <CardSection />
      <BottomSectionBlog />
      </div>
    </div>
  );
}
