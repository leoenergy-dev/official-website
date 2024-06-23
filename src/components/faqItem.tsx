import { useState } from "react";

interface FaqItems {
    intitule?: string;
    descript?: string;
}

export default function FaqItems({
    intitule, descript
}: FaqItems) {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div className="mb-6 px-4 lg:px-[50px] py-4 lg:py-7  bg-[#F6FBFF]">
            <div className='flex items-center justify-between'>
                <div className={`font-semibold w-[80%] transition-all ease-in-out duration-200 ${active ? 'text-lg lg:text-[28px] mb-6' : ''}`}>
                    {intitule}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat
                    mollitia,
                </div>
                <div className="flex items-center">
                    <button
                        className={`w-[50px] aspect-square flex items-center justify-center ${active ? 'rotate-180' : ''}`}
                        onClick={() => setActive(!active)}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='32'
                            height='32'
                            viewBox='0 0 24 24'
                        ><path
                            fill='currentColor'
                            d='m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z'
                        ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <div className={`overflow-hidden ${active ? 'h-auto' : 'h-0'}`}>{descript}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat
                    mollitia, debitis facilis eos quibusdam. Similique animi eligendi ipsum nam
                    amet facere autem? Iure debitis similique dolorem!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus obcaecati
                    libero eveniet dolorum quos soluta, rem dignissimos quaerat praesentium ad, tempora
                    nemo asperiores est quisquam assumenda minus laboriosam unde.
                </div>
            </div>
        </div>
    )
}