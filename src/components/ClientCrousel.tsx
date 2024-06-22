import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Client1 from './../assets/client/client-1.png';
import Client2 from './../assets/client/client-2.png';
import Client3 from './../assets/client/client-3.png';
import Client4 from './../assets/client/client-4.png';
import Client5 from './../assets/client/client-5.png';
import Client6 from './../assets/client/client-6.png';



export default function ClientCrousel() {

    return (
        <div className="slider-container">
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    Testimonial.map((item, idx) => {
                        return (
                            <SwiperSlide className="rounded-2xl max-w-[300px] md:max-w-sm h-[200px]" key={idx}>
                                <img src={item} alt="icon" className="h-full w-full object-contain" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

const Testimonial = [Client1, Client2, Client3, Client4, Client5, Client6,]


// {
//     Testimonial.map((item, idx) => {
//         return (
//             <SwiperSlide className="bg-[#FFF6F8] p-7 rounded-2xl max-w-[300px] md:max-w-sm h-[200px]" key={idx}>
//                 <div>
//                     <img src={Appox} alt="icon" className="h-5 w-5" />
//                 </div>
//                 <p className="font-medium text-sm md:text-base my-5">{item.said}</p>
//                 <div className="flex gap-4 items-center">
//                     <img src={item.image} alt='Person Image' className="h-10 w-10" />
//                     <p className="font-medium opacity-80 text-sm">{item.by}</p>
//                 </div>
//             </SwiperSlide>
//         )
//     })
// }