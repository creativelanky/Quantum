import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"


export default function HowToSell(props: { bgColor: any; heading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; section: any[] }) {
    return (
        <section className={`px-7 md:px-16 lg:px-24 md:py-24 py-20 ${props.bgColor}`}>
            <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className='max-w-4xl lg:text-5xl text-2xl md:text-4xl font-medium text-center mx-auto'>{props.heading}</h2>
            <div className="grid md:grid-cols-3 items-start gap-12 mt-20">
                {
                    props.section.map((item, idx) => {
                        return (
                            <div className="flex flex-col items-center md:gap-8 gap-6 text-center" key={idx}>
                                <div data-aos="fade-up"
                                    data-aos-delay={(idx + 1) * 30}>
                                    <img src={item.icon} alt="Icon" className="md:h-16 md:w-16 h-10 w-10" />
                                </div>
                                <h4 data-aos="fade-up"
                                    data-aos-delay={(idx + 1) * 60} className="lg:text-xl text-base font-semibold">{idx + 1}.{' '}{item.title}</h4>
                                <p data-aos="fade-up"
                                    data-aos-delay={(idx + 1) * 100} className="max-w-xs font-normal opacity-60 text-sm md:text-base">{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
