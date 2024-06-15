import Logo from './../assets/logo.png';

export default function Footer() {
    return (
        <footer className="py-7 px-8 md:px-16 lg:px-24 bg-black">
            <div className="border border-white/40 flex flex-wrap justify-between items-center p-8 gap-10">
                <div>
                    <img src={Logo} alt="Logo" className='h-14 w-auto' />
                </div>
                <div className="text-white">
                    <p className='text-sm'>Copyright © 2024 Quantum Swap</p>
                </div>
            </div>
        </footer>
    )
}
