import { type imageData } from "./Services"


export default function CarouselItem({ image, titre }: imageData) {
    return (
        <div className={`w-[500px] aspect-square border bg-no-repeat bg-cover`} style={{ backgroundImage: `url('${image}')` }}></div>
    )
}