import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ActuItem {
    date: Date;
    titre: string;
    descript: string;
    post?: any
    delay?: number
}

export default function ActuItem({ date, titre, descript, post, delay }: ActuItem) {
    const D = new Date(date).toDateString()
    const [read, setreader] = useState<boolean>(false)


    const description = descript.length > 150 ? `${descript?.substring(0, 150)}...` : descript;
    return (
        <div id="" className='flex flex-col lg:flex-row p-5 lg:p-9 items-start bg-[#F6FBFF] mb-3 lg:mb-6 gap-9' data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay={`${delay}`}>
            <div className='w-[250px] font-bold text-base lg:text-2xl principal-blue'>
                <span>{D}</span>
            </div>
            <div className='flex-1'>
                <div className='w-[80%]'>
                    <div className='text-2xl lg:text-3xl font-bold mb-4'>{titre}</div>
                    {!read && <div className='mb-4'>{description}</div>}

                    {
                        read && (<div className="document">
                            <Markdown remarkPlugins={[remarkGfm]}>{post}</Markdown>
                        </div>)
                    }

                    <button onClick={() => setreader(!read)} className='font-bold principal-blue uppercase'>
                        {
                            !read
                                ? "lire plus"
                                : "close"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}