import { useEffect, useRef, useState } from "react"
import CarouselItem from "./carousel"

export type imageData = {
    image: string,
    titre: string,
    delay?: number
}

interface ServicesElement {
    children?: string | JSX.Element | JSX.Element[];
    data?: Array<imageData>;
    titre?: string;
    description: string;
    image?: string;
}

export default function ServicesElement({ children, data, titre, description, image }: ServicesElement) {
    const carouselMain = useRef<any>()
    const carouselContainer = useRef<any>()
    const descripRef = useRef<any>()
    const [lastPas, setPas] = useState(0)
    const [count, setCount] = useState(0)
    const [position, setPosition] = useState<number>(0)
    const [isLast, setIsLast] = useState<boolean>(false)

    const image_count = data?.length

    useEffect(() => {
        const container = carouselContainer.current?.offsetWidth as number
        const main = carouselMain.current?.offsetWidth as number

        const rest = container - main - 500
        setPas(rest)

        descripRef.current.innerHTML = description

    }, [])

    useEffect(() => {

        // if (count === 0) setCount(1)
        const gap = 20 * (count)

        setPosition(gap + (count * 500))

        if (count > 0) setCount(0);

        if (count === (-(image_count as number))) setCount(0);

    }, [count, position])

    useEffect(() => {
        const container = carouselContainer.current?.offsetWidth as number
        const main = carouselMain.current?.offsetWidth as number
        const step = Math.floor(container / main)

        if (isLast) setPosition(position + lastPas);

        if (step === (count * (-1))) {
            const rest = container - main - 500
            setIsLast(true)
        }
    }, [count])


    const handleNext = () => {
        if (isLast) setPosition(position + lastPas);
        setCount(count - 1)
    }

    return (
        <div className="service-item">
            <div className="md:flex gap-[30px] items-start px-5 lg:px-[50px]">
                <div className="w-full lg:w-[277px] aspect-[16/9] lg:aspect-square border mb-5 lg:mb-0 bg-no-repeat bg-cover bg-center"
                    data-aos='fade-up'
                    data-aos-duration='1000' style={{ backgroundImage: `url(${image})` }}>
                    {/* <img src={image} alt="logo_leo" height={'100%'} width={'100%'} className="object-cover" /> */}
                </div>
                <div className="flex-1"
                    data-aos='fade-down'
                    data-aos-duration='1000'
                >
                    <div className="text-2xl lg:text-3xl font-bold mb-2 uppercase">{titre}</div>
                    <div
                        ref={descripRef}
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        data-aos-delay='500'></div>
                    <div>
                        {data && (<div className="w-full">
                            <div className="hidden h-[150px] lg:flex gap-5 items-end pb-6">
                                <button onClick={() => setCount(count + 1)} className={`w-[72px] aspect-square rounded-full flex items-center justify-center text-white bg-blue hover:bg-blue-900`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414z" /></svg>
                                </button>
                                <button onClick={handleNext} className={`w-[72px] aspect-square rounded-full flex items-center justify-center text-white bg-blue hover:bg-blue-900`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z" /></svg>
                                </button>
                            </div>
                            <div ref={carouselMain} className="w-full relative h-[300px] lg:h-[500px] mt-5 lg:mt-0 overflow-x-auto lg:overflow-x-visible">
                                <div ref={carouselContainer} className={`flex gap-5 absolute transition-transform ease-out duration-500`} style={{ transform: `translateX(${position}px)` }}>
                                    {data.map((el, key) => <CarouselItem image={el.image} titre={el.titre} key={key} delay={100 * (key * 2)} />)}
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>

        </div>
    )
} 