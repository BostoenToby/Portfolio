import { useEffect, useState } from "react"
import Header from "../components/header"
import Image from "../node_modules/next/image"
import personalImageFull from '../public/personalimagefull.jpeg';

export default function Portfolio () {
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
            <Header setDark={setDark} dark={dark} active="Portfolio"/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="grid landscape:grid-cols-3 landscape:grid-rows-none grid-cols-none grid-rows-2 ipadMini:grid-cols-3 ipadMini:grid-rows-none items-center justify-center mb-8">
                    <div className="landscape:col-start-1 landscape:col-end-3 landscape:row-start-1 landscape:row-end-1 row-start-1 row-end-2 ipadMini:col-start-1 ipadMini:col-end-3 w-full sm:w-3/4 md:w-full">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} landscape:text-4xl text-3xl mb-8`}>Portfolio</h1>
                        <div className="grid grid-cols-2 grid-rows-3 lg:flex gap-4">
                            <h2 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#2021-2022</h2>
                            <h2 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#frontend</h2>
                            <h2 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} py-2 px-4 rounded w-max`}>#data storage</h2>
                        </div>
                    </div>
                    <div className="block landscape:col-start-3 landscape:col-end-4 landscape:row-start-1 landscape:row-end-1 row-start-2 row-end-3 ipadMini:row-start-1 ipadMini:row-end-1 ipadMini:col-start-3 ipadMini:col-end-4 relative w-60 ipadMini:w-60 landscape:ipadMiniLand:w-64 next:w-80 landscape:mt-8 pr-8">
                        <Image src={personalImageFull} alt="an image of the creator of the site" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section>
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-2xl md:text-4xl mb-4`}>Explanation</h1>
                    <div className="grid grid-rows-9 space-y-2">
                        <p className={`${dark? 'text-white' : 'text-black'} row-start-1 row-end-4`}>In the summer of 2022 I've started this portfolio as a place to store my projects and to inspire others to expand their knowledge. My goal is to make a fun website that isn't boring to look at with a cool color palette and without the boring parts. In the future I'll maybe consider to change to another framework to make sure the user gets the best experience.</p>
                        <p className={`${dark? 'text-white' : 'text-black'} row-start-4 row-end-7`}>I'd like to improve the site every year with new projects, new images and maybe a whole new look. This is going to be a project that will keep me busy from time to time and when I find new interesting designs for certain things I can use them here. I would also like to inspire people with this project to start working on projects that they like outside of school. The upcoming year I'd like to get more into backend with the ultimate goal to become a Full Stack Developer</p>
                        <p className={`${dark? 'text-white' : 'text-black'} row-start-7 row-end-10`}>The hardest part of this portfolio was finding good images. Some projects were from a long time ago and I don't have such good images of them. Another hard part was making a good logo for my site. I wanted it to be clean and not to chaotic but it also needs to nice. After some time experimenting with different designs I took the current design with my name underlined. It's simple and clean without all the chaos. Sometimes is simplicity the best choice, but maybe in the future this logo will change with the design.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}