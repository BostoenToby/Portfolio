import { useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import personalImageFull from '../public/personalimagefull.jpeg';
import personalImage from '../public/personalprogrammer.jpg';

export default function Portfolio () {
    const [dark, setDark] = useState<boolean>()

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'} xsm:pb-20 sm:pb-52 md:pb-96 xmd:pb-[490px] lg:pb-0`}>
            <Header setDark={setDark} dark={dark} active="Portfolio"/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="flex flex-col md:grid md:grid-cols-3 md:justify-between md:items-center mb-8">
                    <div className="md:col-start-1 md:col-end-3 w-full sm:w-3/4 md:w-full">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl md:text-5xl mb-8`}>Portfolio</h1>
                        <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 lg:flex gap-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>2021-2022</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>frontend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>data storage</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>CMS</h4>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 block md:col-start-3 relative w-80 h-auto landscape:w-60">
                        <Image src={personalImageFull} alt="an image of the creator of the site" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section>
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-2xl md:text-4xl mb-4`}>Explanation</h1>
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 lg:grid-rows-none lg:gap-4">
                        <div className="lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-2 mt-4 block w-full h-20 mb-32 md:mb-0">
                            <Image src={personalImage} alt="an image of the creator of the site" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                        </div>
                        <div className="flex flex-col space-y-4 lg:col-start-1 lg:col-end-3">
                            <p className={`${dark? 'text-white' : 'text-black'}`}>In the summer of 2022 I've started this portfolio as a place to store my projects and to inspire others to expand their knowledge. My goal is to make a fun website that isn't boring to look at with a cool color palette and without the boring parts. In the future I'll maybe consider to change to another framework to make sure the user gets the best experience.</p>
                            <p className={`${dark? 'text-white' : 'text-black'}`}>I'd like to improve the site every year with new projects, new images and maybe a whole new look. This is going to be a project that will keep me busy from time to time and when I find new interesting designs for certain things I can use them here. I would also like to inspire people with this project to start working on projects that they like outside of school. The upcoming year I'd like to get more into backend with the ultimate goal to become a Full Stack Developer</p>
                            <p className={`${dark? 'text-white' : 'text-black'}`}>The hardest part of this portfolio was finding good images. Some projects were from a long time ago and I don't have such good images of them. Another hard part was making a good logo for my site. I wanted it to be clean and not to chaotic but it also needs to nice. After some time experimenting with different designs I took the current design with my name underlined. It's simple and clean without all the chaos. Sometimes is simplicity the best choice, but maybe in the future this logo will change with the design.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}