import ArrowRight from './../assets/arrow-right.png';
import Mobile from './../assets/mobile-device.png';


export default function Banner() {
    return (
        <section className='bg-[url(./assets/banner.png)] bg-no-repeat bg-cover bg-left-top flex items-start justify-center relative after:absolute after:inset-0 after:bg-black/20 after:z-0 lg:pt-60 pt-40 px-6'>
            <div className="grid lg:gap-20 gap-16">
                <div className="text-center grid xl:gap-8 gap-5 relative z-10">
                    <h1
                        data-aos="fade-up"

                        className="xl:text-7xl lg:text-5xl md:text-4xl text-2xl font-semibold xl:leading-tight lg:leading-tight md:leading-tight">
                        Trade your cryptocurrency and{' '}
                        <br className='hidden md:block' />
                        valid giftcards to{' '}
                        <span className="bg-clip-text bg-gradient-to-br from-primary to-secondary from-0% to-100% fill-none text-white/0">
                            Naira{' '}
                        </span>
                        swiftly
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="md:max-w-2xl mx-auto xl:text-2xl lg:text-lg md:text-base text-sm font-medium">
                        Seamlessly convert your cryptocurrency
                        <br className='md:hidden block' />
                        to fiat with
                        <br className='hidden md:block' />
                        lightning-fast speed.
                    </p>
                    <a
                        data-aos="fade-up"
                        data-aos-delay="200"
                        target='_blank' href="https://api.whatsapp.com/send/?phone=2347049688012"
                        className='inline-block mx-auto'>
                        <div className="flex items-center xl:gap-5 gap-3 px-6 xl:py-5 bg-secondary rounded-xl lg:py-4 py-3.5 hover:bg-primary">
                            <span className="font-medium xl:text-xl md:text-lg text-base">
                                Start trading
                            </span>
                            <img src={ArrowRight} className='h-5 w-5' />
                        </div>
                    </a>
                </div>
                <div
                    className="relative xl:h-72 lg:h-60 h-48 w-auto">
                    <img src={Mobile} alt='image' className='h-full w-full object-contain absolute' />
                </div>
            </div>
        </section>
    )
}
