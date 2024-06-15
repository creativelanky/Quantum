import Coin1 from './../assets/coins/ApeCoin_3D.png';
import Coin2 from './../assets/coins/Avalanche_3D.png';
import Coin3 from './../assets/coins/Bitcoin_3D.png';
import Coin4 from './../assets/coins/Cosmos_3D.png';
import Coin5 from './../assets/coins/EOS_3D.png';
import Coin6 from './../assets/coins/Ethereum_3D.png';
import Coin7 from './../assets/coins/Polygon_3D.png';
import Coin8 from './../assets/coins/Shiba Inu_3D 1.png';
import Coin9 from './../assets/coins/Solana_3D.png';
import Coin0 from './../assets/coins/USD Coin_3D.png';
import Supported from './../assets/supported-card.png';

export default function SupportedCoin() {
    const Coins = [Coin1, Coin2, Coin3, Coin4, Coin5, Coin6, Coin7, Coin8, Coin9, Coin0]
    return (
        <section className='text-black md:pt-32 md:px-16 lg:px-24 pt-24 grid md:grid-cols-2 items-center gap-10'>
            <div className="px-7 md:px-0">
                <div className="grid md:gap-8 gap-5 h-fit">
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className='xl:text-4xl md:text-[28px] text-2xl font-medium'>More than 50+ crypto <br /> coins supported</h2>
                    <div className="flex items-center">
                        {
                            Coins.map((_, idx) => {
                                return (<img
                                    data-aos="fade-up"
                                    data-aos-delay={(idx + 1) * 50}
                                    src={_} key={idx} className='lg:h-12 lg:w-12 h-9 w-9 md:-ml-2 -ml-1' />)
                            })
                        }
                    </div>
                    <p data-aos="fade-up"
                        data-aos-delay="500" className='text-tertiary xl:text-3xl md:text-2xl text-xl max-w-lg'>More than creating a seamless platform for you to perform crypto transactions, we are with you every step of the way, providing you with tips and tricks to becoming a crypto guru.
                    </p>
                </div>
            </div>
            <div className="h-full w-full">
                <img
                    data-aos="fade-up"
                    data-aos-delay="100" src={Supported} className='xl:h-[550px] md:h-[350px] h-[450px] w-auto mx-auto md:mx-0' />
            </div>
        </section>
    )
}
