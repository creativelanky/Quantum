import ClientCrousel from './ClientCrousel';

export default function Clients() {
    return (
        <section className='py-16 md:py-20 text-black'>
            <div className="px-7 md:px-16 lg:px-24">
                <h2 className='max-w-4xl lg:text-5xl text-2xl md:text-4xl font-medium text-center mx-auto'>Satisfied Clients</h2>
            </div>
            <div className="mt-16">
                <ClientCrousel />
            </div>
        </section>
    )
}
