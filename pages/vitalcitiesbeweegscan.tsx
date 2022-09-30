import { useEffect, useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import vitalcities from '../public/vitalcities.png';
import netlify from '../public/netlifycms.jpg'

export default function Beweegscan () {
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
            <Header setDark={setDark} dark={dark} active="Vitalcities"/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="grid landscape:grid-cols-3 landscape:grid-rows-none grid-cols-none grid-rows-2 ipadMini:grid-cols-3 ipadMini:grid-rows-none items-center justify-center mb-8">
                    <div className="landscape:col-start-1 landscape:col-end-3 landscape:row-start-1 landscape:row-end-1 row-start-1 row-end-2 ipadMini:col-start-1 ipadMini:col-end-3 w-full sm:w-3/4 md:w-full">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} landscape:text-4xl text-3xl mb-8`}>Vital Cities Beweegscan</h1>
                        <div className="grid grid-cols-2 grid-rows-3 lg:flex gap-4">
                            <h2 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#2021-2022</h2>
                            <h2 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#frontend</h2>
                            <h2 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#data storage</h2>
                            <h2 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#CMS</h2>
                        </div>
                    </div>
                    <div className="block landscape:col-start-3 landscape:col-end-4 landscape:row-start-1 landscape:row-end-1 row-start-2 row-end-3 ipadMini:row-start-1 ipadMini:row-end-1 ipadMini:col-start-3 ipadMini:col-end-4 relative w-32 ipadMini:w-60 landscape:ipadMiniLand:w-64 next:w-80 landscape:mt-8 pr-8">
                        <Image src={vitalcities} alt="image of vital cities" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section>
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-2xl md:text-4xl mb-4`}>Explanation</h1>
                    <div className="grid grid-rows-7">
                        <div className="row-start-4 row-end-5 mt-4 block mb-4">
                            <Image src={netlify} alt="image of netlify cms" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                        </div>
                        <p className={`${dark? 'text-white' : 'text-black'} row-start-1 row-end-4`}>My second big project was in my second year of my bachelor course MCT. We worked on a project for Vital Cities where they wanted an online tool for people where they could compare their city with others on certain aspects. The main goal of Vital Cities was to make people aware that the car doesn't need to be your first option to get around. They support people to go on walks, go cycling, use public transportation, ... Some examples of the aspects that you can compare on the online tool are: accessibility of playgrounds, enough options for public transport, ...</p>
                        <p className={`${dark? 'text-white' : 'text-black'} row-start-5 row-end-8`}>One of the challenging parts of the project was that the customer wanted to be able to change almost every bit of content on the site. There for we implemented Netlify CMS where we can generate MarkDown files that the customer makes. We placed these MarkDown files in a folder structure seperated for every part of the pages and when loading the page these files would be read. The content would then be placed on the page at the right spot and this also works with images. For some parts of the site this was a challenge because we needed to read the MarkDown file and some bold parts are just plain text when you read the file so we needed to filter the text on a couple of things.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}