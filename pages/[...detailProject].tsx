import { useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import { useRouter } from "../node_modules/next/router"

export default function detailProject() {
    const router = useRouter()
    const { slug } = router.query
    const [dark, setDark] = useState<boolean>()

    return(
        <div className={`h-screen ${dark? 'bg-black': 'bg-white'}`}>
            <Header setDark={setDark} dark={dark}/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="flex justify-between">
                    <div>
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-5xl mb-8`}>"title"</h1>
                        <div className="flex space-x-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded w-max`}>"2020-2021 datum"</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded w-max`}>"frontend"</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded w-max`}>"data storage"</h4>
                        </div>
                    </div>
                    <div className="relative w-30 h-30">
                        <Image src={""} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                {/* <p>{explanation}</p> */}
            </main>
        </div>
    )
}