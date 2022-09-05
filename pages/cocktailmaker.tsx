import { useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import cocktailmakerimage from '../public/cocktailmaker.jpg';
import fritzing from '../public/fritzing.jpg'

export default function cocktailmaker () {
    const [dark, setDark] = useState<boolean>()

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'}`}>
            <Header setDark={setDark} dark={dark}/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="grid grid-cols-3 justify-between items-center mb-8">
                    <div className="col-start-1 col-end-3">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-5xl mb-8`}>Cocktail Maker</h1>
                        <div className="flex space-x-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>2020-2021</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>frontend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>backend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>data storage</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>electronics</h4>
                        </div>
                    </div>
                    <div className="col-start-3 relative w-30 h-96">
                        <Image src={cocktailmakerimage} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section className="grid grid-cols-2 space-x-8">
                    <div className="col-start-1 relative w-auto h-auto">
                        <Image src={fritzing} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                    <p className={`${dark? 'text-white' : 'text-black'} py-16`}>My first individual project for school was a cocktail maker. This was made in my first year of my bachelor course. I've used a Rasperrby Pi 4B and python to program the cocktail maker. On the screen there is a IP address displayed where you can surf to. If you load the webpage you'll see what cocktails are available and you're able to make these. There are also statistics about how much there is left of a certain drink, how hot the drinks are, how much a certain cocktail was asked in a period of time. You don't have to use the webpage to make cocktails because you can also press a button on the keypad to make a cocktail. The display shows different screens and each screen has different cocktails with the number displayed.</p>
                </section>
            </main>
        </div>
    )
}