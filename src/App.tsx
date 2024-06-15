import Banner from './components/Banner'
import SupportedCoin from './components/SupportedCoin'
import GiftCard from './components/GiftCard'
import HowToSell from './components/HowToSell'
import Swaps from './components/Swaps'
import Clients from './components/Clients'
import Person from './assets/person.png';
import Transcript from './assets/transcript.png';
import Dollar from './assets/dollar.png';
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'
import Navbar from './components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);


  return (
    <>
      <Navbar />
      <main className='w-screen overflow-hidden font-inter text-white'>
        <Banner />
        <SupportedCoin />
        <GiftCard />
        <HowToSell
          bgColor={'bg-[#4F0714]'}
          section={cryptocurrencies}
          heading={'How to Sell cryptocurrencies in 3 simple steps'} />
        <HowToSell
          bgColor={'bg-[#FFE7C5] text-black'}
          section={cryptocurrencies}
          heading={'How to Sell Valid Giftcards in 3 simple steps'}
        />
        <Swaps />
        <Clients />
        <Whatsapp />
      </main>
      <Footer />
    </>
  )
}


const cryptocurrencies = [
  {
    icon: Person,
    title: 'Send us a message',
    description: 'Reach out to us on any of our socials Via WhatsApp, instagram , or via the chat bot on our website'
  },
  {
    icon: Transcript,
    title: 'Specify the details',
    description: 'Tell us the crypto you want to buy or sell and the amount'
  },
  {
    icon: Dollar,
    title: 'Get credited within 5 minutes',
    description: 'Get your naira or crypto paid within 5 minutes'
  },
]