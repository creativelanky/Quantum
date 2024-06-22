import card1 from './../assets/giftcards/amazon.png';
import card2 from './../assets/giftcards/apple-giftcard.png';
import card3 from './../assets/giftcards/razer-gold.png';
import card4 from './../assets/giftcards/steam-digital-giftcard.png';
import Gift from './../assets/gift-card.png';

export default function GiftCard() {
    const Cards = [card1, card2, card3, card4]

    return (
        <section className='text-black md:py-32 md:px-16 lg:px-24 py-24 grid md:grid-cols-2 items-center gap-10'>
            <div className="h-full w-full order-2 md:order-1">
                <img data-aos="fade-up"
                    data-aos-delay="100"
                    src={Gift} alt='image' className='xl:h-[550px] md:h-[350px] h-[400px] w-auto mx-auto md:mx-0' />
            </div>
            <div className="px-7 md:px-0 order-1 md:order-2">
                <div className="grid md:gap-8 gap-5 h-fit">
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className='xl:text-4xl md:text-[28px] text-2xl font-medium'>Multiple Valid Giftcards <br /> Supported</h2>
                    <div className="flex items-center gap-3">
                        {
                            Cards.map((_, idx) => {
                                return (<img
                                    data-aos="fade-up"
                                    data-aos-delay={(idx + 1) * 100}
                                    src={_} key={idx} className='lg:h-14  h-9 w-auto' />)
                            })
                        }
                    </div>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className='text-tertiary xl:text-3xl md:text-2xl text-xl max-w-lg'>Our platform allows you to trade multiple valid gift cards seamlessly. Simply submit valid gift cards to us and you would be credited in 5 mins
                    </p>
                </div>
            </div>
        </section>
    )
}
