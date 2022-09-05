import { useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import vitalcities from '../public/vitalcities.png';

export default function beweegscan () {
    const [dark, setDark] = useState<boolean>()

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'}`}>
            <Header setDark={setDark} dark={dark}/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="grid grid-cols-3 justify-between items-center mb-8">
                    <div className="col-start-1 col-end-3">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-5xl mb-8`}>Vital Cities Beweegscan</h1>
                        <div className="flex space-x-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>2021-2022</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>frontend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>data storage</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>CMS</h4>
                        </div>
                    </div>
                    <div className="col-start-3 relative w-30 h-96">
                        <Image src={vitalcities} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section className="grid grid-cols-2 space-x-8">
                    <div className="col-start-1 relative w-auto h-auto">
                        <Image src={""} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                    <p className={`${dark? 'text-white' : 'text-black'} py-16`}>My second big project was in my second year of my bachelor course MCT. We worked on a project for Vital Cities where they wanted an online tool for people where they could compare their city with others on certain aspects. The main goal of Vital Cities was to make people aware that the car doesn't need to be your first option to get around. They support people to go on walks, go cycling, use public transportation, ... Some examples of the aspects that you can compare on the online tool are: accessibility of playgrounds, enough options for public transport, ...</p>
                </section>
            </main>
        </div>
    )
}