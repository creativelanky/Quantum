import { useEffect, useState } from 'react';
import Logo from './../assets/logo.png';
import ArrowRight from './../assets/arrow-right.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <header className={scrolled ? 'inset-x-0 fixed top-0 bg-black z-50 translate-y-0 transition-all ease-linear duration-500' : 'inset-x-0 absolute s top-10 z-50'}>
            <nav className="flex items-center justify-between lg:px24 md:px-16 px-8 bg-transparent">
                <div className="">
                    <img src={Logo} alt="Logo" className='h-20 w-auto' />
                </div>
                <div className="hidden md:block">
                    <a href="">
                        <div className="flex items-center xl:gap-5 gap-3 px-6 xl:py-5 bg-white/10 border border-white/20 rounded-xl lg:py-4 py-3.5 hover:bg-black">
                            <span className="font-medium text-white text-sm">
                                Send us a whatsapp message
                            </span>
                            <img src={ArrowRight} className='h-5 w-5' />
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
