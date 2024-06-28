import { useEffect, useState } from 'react'
import { DB } from '../firebase'
import { getDocs, collection, Timestamp, doc, updateDoc } from 'firebase/firestore'
import type { messageSend } from '../pages/message'
import moment from 'moment'

export default function InboxMessage() {

    const [item, setItems] = useState<any>(null)
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        (async () => {
            const ref = collection(DB, 'message')
            const snapshot = await getDocs(ref)

            const arr: any[] = []

            snapshot.forEach(doc => {
                const suite = doc.data()
                const obj = {
                    id: doc.id,
                    ...suite
                }

                arr.push(obj)
            })

            setData(arr.reverse())

        })()
    }, [])

    const handleItems = (id: string) => {
        const newValue = data.filter((el) => el.id === id)
        setItems(newValue[0])
    }


    useEffect(() => {
    }, [data, item])

    return (
        <div className="w-full flex flex-col pb-4" style={{ height: `calc(100vh - 92px)` }}>
            <div className="h-[72px] flex items-center text-2xl font-semibold">
                Messages
            </div>
            <div className="inbox flex flex-1 border-t">
                <div className="inbox-right-side overflow-y-auto h-full">
                    {
                        data.length === 0
                            ? (<div className='flex items-center justify-center flex-col h-full'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><rect width="7.33" height="7.33" x="1" y="1" fill="currentColor"><animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="1" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="1" y="15.66" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="15.66" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="15.66" fill="currentColor"><animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" /></rect></svg>
                                </div>
                                <div> loading...</div>
                            </div>)
                            : (<> {
                                data.map((el, key) => <Element onClick={handleItems} key={key} data={el} />)
                            }</>)
                    }
                </div>
                <div className="flex-1 border-l">
                    {item === null
                        ? (<div className='flex items-center justify-center h-full w-full'>
                            <div className='flex items-center justify-center flex-col w-[40%] px-4 text-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24"><path fill="currentColor" d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.028 0l9.24 5.545a.5.5 0 0 1 .242.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429m16.103 1.39l-6.285 5.439l-6.414-5.445l-1.294 1.524l7.72 6.555l7.581-6.56z" /></svg>
                                </div>
                                Liste des messages. Cliquer sur un message pour avoir le contenu
                            </div>
                        </div>)
                        : (<div className='h-full'>
                            <div className='p-6 h-full flex flex-col'>
                                <div className='text-2xl'>{item?.nom} - {item?.entreprise}
                                    <div className='text-base font-semibold'>Téléphone : {item?.telephone}</div>
                                </div>
                                <div className='border-t border-b mt-4 pt-4 pb-4 text-base flex gap-10'>
                                    <div className='text-base'>
                                        <span className='font-semibold'>Pays :</span>  {item?.pays}
                                        <br />
                                        <span className='font-semibold'>Ville :</span> {item?.ville}
                                    </div>
                                    <div>
                                        <span className='font-semibold'> Envoyé à : </span> {`${setTime(item.createdAt as Timestamp).h < 10 ? `0${setTime(item.createdAt as Timestamp).h}` : setTime(item.createdAt as Timestamp).h} : ${setTime(item.createdAt as Timestamp).m < 10 ? `0${setTime(item.createdAt as Timestamp).m}` : setTime(item.createdAt as Timestamp).m}`}
                                        <br />
                                        <span className='font-semibold'> Date de création : </span> {`${setTime(item.createdAt as Timestamp).d < 10 ? `0${setTime(item.createdAt as Timestamp).d}` : setTime(item.createdAt as Timestamp).d}`}/{`${setTime(item.createdAt as Timestamp).mt < 10 ? `0${setTime(item.createdAt as Timestamp).mt}` : setTime(item.createdAt as Timestamp).mt}`}/{`${setTime(item.createdAt as Timestamp).yrs}`}
                                    </div>
                                </div>
                                <div className='pt-6 w-[100%] overflow-y-auto overflow-x-hidden flex-1 h-full'>
                                    {item?.message}
                                </div>
                            </div>
                            <div></div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
// @ts-ignore
interface item extends messageSend {
    id: string;
    createdAt: Timestamp
}

type Element = {
    data: item,
    onClick: (id: string) => void
}

function Element({ data, onClick }: Element) {
    const [isread, setIsread] = useState(data.alreadyRead || false)
    const name = data.nom as string
    const createdAt = new Timestamp(data.createdAt.seconds, data.createdAt.nanoseconds).toDate()

    moment.locale('fr')
    const periode = moment(createdAt).calendar()

    const handleClick = async () => {
        const ref = doc(DB, 'message', data.id)
        if (!data.alreadyRead) await updateDoc(ref, { alreadyRead: true, readWhen: new Date() })

        setIsread(true);
        onClick(data.id)
    }
    return (
        <button onClick={handleClick} className='inbox-element'>
            <div className={`user-name ${isread ? '' : 'font-bold'}`}>{name}</div>
            <div className={`periode text-left ${isread ? "" : 'font-semibold'}`}>{periode}</div>
        </button>
    )
}

function setTime(time: Timestamp) {
    const T = new Timestamp(time.seconds, time.nanoseconds).toDate()
    const mm = moment(T)

    return {
        h: mm.hour(),
        m: mm.minute(),
        d: mm.date(),
        mt: mm.month(),
        yrs: mm.year()
    }
}