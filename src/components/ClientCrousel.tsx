import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Client from './../assets/client.png';
import Appox from './../assets/appox.png';

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
                slidesPerView={'auto'}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    Testimonial.map((item, idx) => {
                        return (
                            <SwiperSlide className="bg-[#FFF6F8] p-7 rounded-2xl max-w-[300px] md:max-w-sm h-[200px]" key={idx}>
                                <div>
                                    <img src={Appox} alt="icon" className="h-5 w-5" />
                                </div>
                                <p className="font-medium text-sm md:text-base my-5">{item.said}</p>
                                <div className="flex gap-4 items-center">
                                    <img src={item.image} alt='Person Image' className="h-10 w-10" />
                                    <p className="font-medium opacity-80 text-sm">{item.by}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

const Testimonial = [
    {
        image: Client,
        said: 'Their customer service was the best and i got credited in 3 mins',
        by: 'James Friday'
    },
    {
        image: Client,
        said: 'Their customer service was the best and i got credited in 3 mins',
        by: 'James Friday'
    },
    {
        image: Client,
        said: 'Their customer service was the best and i got credited in 3 mins',
        by: 'James Friday'
    },
    {
        image: Client,
        said: 'Their customer service was the best and i got credited in 3 mins',
        by: 'James Friday'
    },
    {
        image: Client,
        said: 'Their customer service was the best and i got credited in 3 mins',
        by: 'James Friday'
    },
    {
        image: Client,
        said: 'Their customer service was the best and i got credited in 3 mins',
        by: 'James Friday'
    },
]