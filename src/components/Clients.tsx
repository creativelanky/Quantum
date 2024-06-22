import ClientCrousel from './ClientCrousel';

export default function Clients() {
    return (
        <section className='py-16 md:py-20 text-black'>
            <div className="px-7 md:px-16 lg:px-24">
                <h2 className='max-w-4xl lg:text-5xl text-2xl md:text-4xl font-bold text-center mx-auto'>Satisfied Clients</h2>
            </div>
            <div className="md:mt-16 mt-6">
                <ClientCrousel />
            </div>
        </section>
    )
}
