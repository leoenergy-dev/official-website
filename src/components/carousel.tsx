import { type imageData } from "./Services"


export default function CarouselItem({ image, titre, delay }: imageData) {
    return (
        <div
            className={`w-[300px] lg:w-[500px] aspect-square border bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url('${image}')` }}
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay={`${delay}`}
        ></div>
    )
}