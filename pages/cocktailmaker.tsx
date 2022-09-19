import { useEffect, useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import cocktailmakerimage from '../public/cocktailmaker.jpg';
import fritzing from '../public/fritzing.jpg'

export default function Cocktailmaker () {
    const [dark, setDark] = useState<boolean>()
    const [height, setHeight] = useState<boolean>(false)

    useEffect(() => {
        const updateSize = () => {
            const contentHeight = document.getElementsByTagName("body")[0].clientHeight
            const contentRelativeHeight = contentHeight / window.innerHeight
            if(contentRelativeHeight <= 1){
                setHeight(true)
            } else {
                setHeight(false)
            }
        }
        updateSize()
        window.addEventListener("resize", updateSize)
    }, [])

    return(
        <div className={`${height? 'h-screen' : 'h-full'} ${dark? 'bg-black': 'bg-white'}`}>
            <Header setDark={setDark} dark={dark} active="Cocktailmaker"/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="grid landscape:grid-cols-3 landscape:grid-rows-none grid-cols-none grid-rows-2 ipadMini:grid-cols-3 ipadMini:grid-rows-none items-center justify-center mb-8">
                    <div className="landscape:col-start-1 landscape:col-end-3 landscape:row-start-1 landscape:row-end-1 row-start-1 row-end-2 ipadMini:col-start-1 ipadMini:col-end-3 w-full sm:w-3/4 md:w-full">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} landscape:text-4xl text-3xl mb-8`}>Cocktail Maker</h1>
                        <div className="grid grid-cols-2 grid-rows-3 lg:flex gap-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#2020-2021</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#frontend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#backend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#data storage</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#electronics</h4>
                        </div>
                    </div>
                    <div className="block landscape:col-start-3 landscape:col-end-4 landscape:row-start-1 landscape:row-end-1 row-start-2 row-end-3 ipadMini:row-start-1 ipadMini:row-end-1 ipadMini:col-start-3 ipadMini:col-end-4 relative w-80 ipadMini:w-60 landscape:ipadMiniLand:w-64 next:w-80 landscape:mt-8 pr-8">
                        <Image src={cocktailmakerimage} alt="image of the cocktailmaker" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section>
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-2xl md:text-4xl mb-4`}>Explanation</h1>
                    <div className="grid grid-rows-7">
                        <div className="row-start-4 row-end-5 mt-4 block mb-4">
                            <Image src={fritzing} alt="image of the fritzing scheme" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                        </div>
                        <p className={`${dark? 'text-white' : 'text-black'} row-start-1 row-end-4`}>My first individual project for school was a cocktail maker. This was made in my first year of my bachelor course. I've used a Rasperrby Pi 4B and python to program the cocktail maker. On the screen there is a IP address displayed where you can surf to. If you load the webpage you'll see what cocktails are available and you're able to make these. There are also statistics about how much there is left of a certain drink, how hot the drinks are, how much a certain cocktail was asked in a period of time. You don't have to use the webpage to make cocktails because you can also press a button on the keypad to make a cocktail. The display shows different screens and each screen has different cocktails with the number displayed.</p>
                        <p className={`${dark? 'text-white' : 'text-black'} row-start-5 row-end-8`}>On the right you can see the electrical scheme of the cocktail maker. It was a challenge to connect every wire without making mistakes. When something didn't work like it needed to and I was sure that my program was working it was a whole search for the problem in the circuit. One of the biggest problems of the project was transporting everything for my presentation. The danger of some wire coming loose was huge and eventually it did happen. Two of my sensors weren't working the day of the presentation but the day before they did work. Luckily I had a video and some data that they were working so it wasn't a big problem after all.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}