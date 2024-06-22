import Swap from './../assets/swap.png';

export default function Swaps() {
    return (
        <section className='text-black py-16 md:py-20'>
            <div className="px-7 md:px-16 lg:px-24">
                <h2 data-aos="fade-up"
                    data-aos-delay='100' className='max-w-4xl lg:text-5xl text-2xl md:text-4xl font-bold text-center mx-auto'>Why choose Quantum swaps?</h2>
            </div>
            <div className="grid lg:grid-cols-2 mt-16 md:mt-20">
                <div className="bg-[#FFF6F8] px-7 md:px-16 lg:px-24 py-10 md:py-16 lg:py-20 flex flex-col gap-6">
                    {
                        Quantum.map((item, idx) => {
                            return (
                                <div data-aos="fade-up"
                                    data-aos-delay={(idx + 1) * 30} key={idx} className={`text-left p-7 border border-black/20 rounded-2xl ${idx === 1 ? 'bg-[#7E081E] text-white' : 'text-black'} flex flex-col gap-5`}>
                                    <h4 data-aos="fade-up"
                                        data-aos-delay={(idx + 1) * 50} className="lg:text-xl text-base font-bold">{idx + 1}.{' '}{item.title}</h4>
                                    <p data-aos="fade-up"
                                        data-aos-delay={(idx + 1) * 70} className="font-bold opacity-60 text-sm md:text-base">{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="relative min-h-[500px] h-full">
                    <img src={Swap} alt="Image" className='object-cover object-left-top h-full w-full absolute' />
                </div>
            </div>
        </section>
    )
}

const Quantum = [
    {
        title: 'Available Anytime',
        description: 'Sell your preferred cryptocurrency at anytime, we’re available 24/7'
    },
    {
        title: 'Convenient Payment Methods',
        description: 'We  support local bank transfers, and credit/debit cards for Push-to-Card sell transactions. Our user-friendly interface makes digital assets accessible even to customers who are new to crypto transactions.'
    },
    {
        title: 'Sell what you need',
        description: "If you want to sell crypto in large or small amounts, we've got you covered.Just start by selling your preferred cryptocurrency for as little as $30 in value on MoonPay."
    },
]