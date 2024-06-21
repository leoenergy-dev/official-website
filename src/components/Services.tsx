import { useEffect, useRef, useState } from "react"
import CarouselItem from "./carousel"

export type imageData = {
    image: string,
    titre: string
}

interface ServicesElement {
    children?: string | JSX.Element | JSX.Element[];
    data: Array<imageData>;
    titre?: string;
    description: string
}

export default function ServicesElement({ children, data, titre, description }: ServicesElement) {
    const carouselMain = useRef<any>()
    const carouselContainer = useRef<any>()
    const [lastPas, setPas] = useState(0)
    const [count, setCount] = useState(0)
    const [position, setPosition] = useState<number>(0)
    const [isLast, setIsLast] = useState<boolean>(false)

    const image_count = data.length

    useEffect(() => {
        const container = carouselContainer.current?.offsetWidth as number
        const main = carouselMain.current?.offsetWidth as number

        const rest = container - main - 500
        setPas(rest)

    }, [])

    useEffect(() => {

        // if (count === 0) setCount(1)
        const gap = 20 * (count)

        setPosition(gap + (count * 500))

        if (count > 0) setCount(0);

        if (count === (-(image_count))) setCount(0);

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
        <div>
            <div className="md:flex gap-[30px] items-start px-[50px]">
                <div className="w-[277px] aspect-square border">
                    <img src="/logo_leo_blanc.png" alt="logo_leo" />
                </div>
                <div className="flex-1">
                    <div className="text-3xl font-bold mb-2 uppercase">{titre}</div>
                    <div>{description}</div>
                    <div>
                        <div className="w-full">
                            <div className="h-[150px] flex gap-5 items-end pb-6">
                                <button onClick={() => setCount(count + 1)} className={`w-[72px] aspect-square rounded-full flex items-center justify-center text-white bg-blue hover:bg-blue-900`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414z" /></svg>
                                </button>
                                <button onClick={handleNext} className={`w-[72px] aspect-square rounded-full flex items-center justify-center text-white bg-blue hover:bg-blue-900`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z" /></svg>
                                </button>
                            </div>
                            <div ref={carouselMain} className="w-full relative h-[500px]">
                                <div ref={carouselContainer} className={`flex gap-5 absolute transition-transform ease-out duration-500`} style={{ transform: `translateX(${position}px)` }}>
                                    {data.map((el, key) => <CarouselItem image={el.image} titre={el.titre} key={key} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
} 