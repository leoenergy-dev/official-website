import { useEffect, useRef, useState } from "react"
import anime from "../lib/anime.es"

export interface liteElement {
    image: string,
    texte?: string
}

interface BanniereTop {
    data: Array<liteElement>
}

export default function BanniereTop({ data }: BanniereTop) {
    const [currentLayout, setLayout] = useState(0)
    const slideRef = useRef<any>()
    const textRef = useRef<any>()

    const position = () => {
        if (currentLayout < data.length) setLayout(currentLayout + 1);

        if (currentLayout === (data.length - 1)) setLayout(0);
    }

    useEffect(() => {

        const check = setTimeout(() => {
            position()
        }, 7000)

        const characters = data[currentLayout].texte?.split('') as string[];

        textRef.current.innerHTML = characters
            .map(char => `<span>${char}</span>`)
            .join('');

        anime({
            targets: slideRef.current,
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 1000,
            easing: 'easeInOutCubic'
        })

        anime({
            targets: textRef.current,
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 1000,
            delay: 300,
            easing: 'easeInOutCubic'
        })

        anime({
            targets: textRef.current.querySelectorAll('span'),
            opacity: [0, 1],
            translateY: [20, 0],
            translateZ: 0,
            duration: 300,
            delay: (el: any, i: number) => 50 * i,
            easing: 'easeOutExpo'
        });


        return () => {
            clearTimeout(check)
        }

    }, [currentLayout])
    return (
        <div className='relative h-[700px] lg:block'>
            <div className='relative h-full overflow-hidden'>
                <div className='diapo_1'>
                    <img ref={slideRef} src={data[currentLayout].image} alt='' width='100%' />
                </div>
            </div>
            <div
                className='absolute top-0 left-0 w-full h-full bg-blue-20 lg:p-[47px] flex items-end justify-start'>
                <div
                    ref={textRef}
                    className='w-[80%] text-center lg:text-left lg:w-[55%] text-4xl lg:text-5xl font-extrabold text-white mb-24 lg:mb-12 mx-auto lg:mx-0'>
                    {data[currentLayout].texte}
                </div>
            </div>
        </div>
    )
}