import { useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import cocktailmakerimage from '../public/cocktailmaker.jpg';
import fritzing from '../public/fritzing.jpg'

export default function Cocktailmaker () {
    const [dark, setDark] = useState<boolean>()

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'} xsm:pb-20 sm:pb-40 md:pb-80 xmd:pb-96 lg:pb-0`}>
            <Header setDark={setDark} dark={dark} active="Cocktailmaker"/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="flex flex-col md:grid md:grid-cols-3 md:justify-between md:items-center mb-8">
                    <div className="md:col-start-1 md:col-end-3 w-full sm:w-3/4 md:w-full">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl md:text-5xl mb-8`}>Cocktail Maker</h1>
                        <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 lg:flex gap-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>2020-2021</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>frontend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>backend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>data storage</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>electronics</h4>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 block md:col-start-3 relative w-80 h-auto landscape:w-60">
                        <Image src={cocktailmakerimage} alt="image of the cocktailmaker" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section>
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-2xl md:text-4xl mb-4`}>Explanation</h1>
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:grid-rows-none lg:gap-4">
                        <div className="lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-2 mt-4 block w-full h-20 mb-32 md:mb-0">
                            <Image src={fritzing} alt="image of the fritzing scheme" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                        </div>
                        <div className="flex flex-col space-y-4 lg:col-start-1 lg:col-end-3">
                            <p className={`${dark? 'text-white' : 'text-black'}`}>My first individual project for school was a cocktail maker. This was made in my first year of my bachelor course. I've used a Rasperrby Pi 4B and python to program the cocktail maker. On the screen there is a IP address displayed where you can surf to. If you load the webpage you'll see what cocktails are available and you're able to make these. There are also statistics about how much there is left of a certain drink, how hot the drinks are, how much a certain cocktail was asked in a period of time. You don't have to use the webpage to make cocktails because you can also press a button on the keypad to make a cocktail. The display shows different screens and each screen has different cocktails with the number displayed.</p>
                            <p className={`${dark? 'text-white' : 'text-black'}`}>On the right you can see the electrical scheme of the cocktail maker. It was a challenge to connect every wire without making mistakes. When something didn't work like it needed to and I was sure that my program was working it was a whole search for the problem in the circuit. One of the biggest problems of the project was transporting everything for my presentation. The danger of some wire coming loose was huge and eventually it did happen. Two of my sensors weren't working the day of the presentation but the day before they did work. Luckily I had a video and some data that they were working so it wasn't a big problem after all.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}