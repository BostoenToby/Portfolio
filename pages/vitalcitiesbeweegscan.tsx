import { useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import vitalcities from '../public/vitalcities.png';
import netlify from '../public/netlifycms.jpg'

export default function Beweegscan () {
    const [dark, setDark] = useState<boolean>()

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'} xsm:pb-20 sm:pb-40 md:pb-80 xmd:pb-96 lg:pb-0`}>
            <Header setDark={setDark} dark={dark} active="Vitalcities"/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="flex flex-col md:grid md:grid-cols-3 md:justify-between md:items-center mb-8">
                    <div className="md:col-start-1 md:col-end-3 w-full sm:w-3/4 md:w-full">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl md:text-5xl mb-8`}>Vital Cities Beweegscan</h1>
                        <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 lg:flex gap-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#2021-2022</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#frontend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#data storage</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#CMS</h4>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 block md:col-start-3 relative w-30 h-44">
                        <Image src={vitalcities} alt="image of vital cities" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section>
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-2xl md:text-4xl mb-4`}>Explanation</h1>
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:grid-rows-none lg:gap-4">
                        <div className="lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-2 mt-4 block w-full h-20 mb-32 md:mb-0">
                            <Image src={netlify} alt="image of netlify cms" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                        </div>
                        <div className="flex flex-col space-y-4 lg:col-start-1 lg:col-end-3">
                            <p className={`${dark? 'text-white' : 'text-black'}`}>My second big project was in my second year of my bachelor course MCT. We worked on a project for Vital Cities where they wanted an online tool for people where they could compare their city with others on certain aspects. The main goal of Vital Cities was to make people aware that the car doesn't need to be your first option to get around. They support people to go on walks, go cycling, use public transportation, ... Some examples of the aspects that you can compare on the online tool are: accessibility of playgrounds, enough options for public transport, ...</p>
                            <p className={`${dark? 'text-white' : 'text-black'}`}>One of the challenging parts of the project was that the customer wanted to be able to change almost every bit of content on the site. There for we implemented Netlify CMS where we can generate MarkDown files that the customer makes. We placed these MarkDown files in a folder structure seperated for every part of the pages and when loading the page these files would be read. The content would then be placed on the page at the right spot and this also works with images. For some parts of the site this was a challenge because we needed to read the MarkDown file and some bold parts are just plain text when you read the file so we needed to filter the text on a couple of things.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}