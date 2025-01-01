import staion from "../assets/banner/station.jpeg";
import items from '../assets/banner/items.svg';
import slider2 from "../assets/banner/slider2.png";
import gadget from "../assets/banner/gadgets.png";
import handshake from "../assets/banner/handshake.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {

  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[570px] relative overflow-hidden">
            <img src={handshake} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/75 flex items-center z-30">

              <div className="pt-7 md:pt-0 md:max-w-screen-sm mx-auto">
                <h3 className="text-slate-400 text-sm font-semibold text-center mb-2">Your safety is our priority. Trusted by thousands</h3>
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-slate-50 font-bold text-center pl-5">Found an item? Help <br />A trusted platform for safe exchanges.</h1>
                <div className="text-center py-4 md:pt-6">
                  <button className="py-2 px-4 rounded-lg font-medium text-slate-50 text-sm lg:text-base bg-teal-600 hover:bg-teal-500">Learn More</button>
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[570px] relative overflow-hidden">
            <img src={slider2} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/85 flex flex-col items-center md:justify-around gap-5 md:flex-row z-30">

              <div className="pt-7 md:pt-0 md:max-w-screen-sm">
                <h3 className="text-sm text-slate-400 font-semibold text-center mb-2">Lost items are returned every day. Be part of the solution</h3>
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-slate-50 font-bold text-center pl-5">Found an item? Help <br /> someone reunite with their lost belongings.</h1>
                <div className="text-center py-4 md:pt-6">
                  <Link to='/lost&found' className="py-2 px-4 rounded-lg font-medium text-slate-50 text-sm lg:text-base bg-teal-600 hover:bg-teal-500">Report Found Item</Link>
                </div>
              </div>

              <div>
                <img src={gadget} alt="" className="w-11/12 md:w-[450px] mx-auto bg-black/25 rounded" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[570px] relative overflow-hidden">
            <img src={staion} alt="" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/75 flex flex-col items-center md:justify-around gap-5 md:flex-row z-30">

              <div className="pt-7 md:pt-0">
                <h3 className="text-sm text-slate-400 font-semibold text-center mb-2">Helping you reconnect with what matters most.</h3>
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-slate-50 font-bold text-center">Lost something? <br /> Let us help you find it.</h1>
                <div className="text-center py-4 md:pt-6">
                  <Link to='/lost&found' className="py-2 px-4 rounded-lg font-medium text-slate-50 text-sm lg:text-base bg-teal-600 hover:bg-teal-500">Start Searching</Link>
                </div>
              </div>

              <div>
                <img src={items} alt="" className="w-11/12 md:w-[450px] mx-auto bg-white/35 rounded" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner