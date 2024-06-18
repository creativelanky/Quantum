import { useEffect, useState } from 'react';
import Logo from './../assets/logo.png';
import ArrowRight from './../assets/arrow-right.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false)

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
        <header className={scrolled ? 'inset-x-0 fixed top-0 bg-[#250004] z-50 translate-y-0 transition-all ease-linear duration-500' : 'inset-x-0 absolute s top-10 z-50'}>
            <div className={`fixed inset-0 h-screen w-screen ${open ? 'bg-black/50' : 'bg-transparent'} transition-colors ease-in-out duration-500 z-30`} />
            <nav className="flex items-center justify-between lg:px24 md:px-16 px-8 bg-transparent">
                <div className={`relative z-50 flex items-center justify-between w-full md:w-auto ${scrolled && 'bg-[#250004]'}`}>
                    <div>
                        <img src={Logo} alt="Logo" className='h-20 w-auto' />
                    </div>
                    <button className='md:hidden' onClick={() => setOpen(!open)}>
                        <div className="h-5 w-7 grid gap-1">
                            <span className={`h-1 w-7 rounded-md bg-white relative ${open && 'rotate-45'} transition-all ease-in-out duration-500 block`}></span>
                            <span className={`h-1 w-7 rounded-md bg-white relative ${open && '-rotate-45'} transition-all ease-in-out duration-500 block`}></span>
                            <span className={`h-1 w-7 rounded-md bg-white relative ${open && 'rotate-45'} transition-all ease-in-out duration-500 block`}></span>
                        </div>
                    </button>
                </div>
                <div className={`fixed md:relative md:bg-transparent md:h-fit h-60 w-screen inset-x-0 px-8 pb-10 md:pb-0 md:px-0 z-40 top-0 bg-[#4F0714] md:block flex items-end justify-center md:translate-y-0 md:w-auto ${open ? 'translate-y-0' : '-translate-y-[50vh]'} transition-transform ease-linear duration-500`}>
                    <a
                        target='_blank' href="https://api.whatsapp.com/send/?phone=2347049688012">
                        <div className="flex items-center justify-center xl:gap-5 gap-3 px-6 xl:py-5 bg-white/10 border border-white/20 rounded-xl lg:py-4 py-3.5 hover:bg-[#250004]">
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
