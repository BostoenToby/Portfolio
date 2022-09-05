import { useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import personalImage from '../public/personalprogrammer.jpg';

export default function portfolio () {
    const [dark, setDark] = useState<boolean>()

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'}`}>
            <Header setDark={setDark} dark={dark}/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="grid grid-cols-3 justify-between items-center mb-8">
                    <div className="col-start-1 col-end-3">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-5xl mb-8`}>Portfolio</h1>
                        <div className="flex space-x-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>2021-2022</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>frontend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>data storage</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>CMS</h4>
                        </div>
                    </div>
                    <div className="col-start-3 relative w-30 h-96">
                        <Image src={personalImage} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section className="grid grid-cols-2 space-x-8">
                    <div className="col-start-1 relative w-auto h-auto">
                        <Image src={""} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                    <p className={`${dark? 'text-white' : 'text-black'} py-16`}>In the summer of 2022 I've started this portfolio as a place to store my projects and to inspire others to expand their knowledge. My goal is to make a fun website that isn't boring to look at with a cool color palette and without the boring parts. In the future I'll maybe consider to change to another framework to make sure the user gets the best experience.</p>
                </section>
            </main>
        </div>
    )
}