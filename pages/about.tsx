import Image from "../node_modules/next/image";
import { useEffect, useState } from "react";
import business from '../public/business.jpeg';
import personalprogrammer from '../public/computergray.jpg';
import zen from '../public/zen.jpg';
import Header from "../components/header";

export default function About () {
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
        <div className={`${height? 'h-screen' : 'h-full'} ${dark? 'dark' : null} scrollbar`}>
            <div className="h-full  dark:bg-black bg-white">
                <Header setDark={setDark} dark={dark} active="About" />
                <main className="font-montserrat mx-8 pt-8 md:pt-2 landscape:mt-12 max-w-[1200px] xl:mx-auto">
                    <section className="flex flex-col md:justify-center">
                        <div className="flex flex-col md:flex-row mb-16 space-x-16 md:items-center">
                            <div className="space-y-4 md:space-y-10 md:pr-12">
                                <h1 className="dark:text-lightblue text-green text-3xl md:text-5xl">Some words about me, if you're interested at least</h1>
                                <p className="dark:text-white text-black text-lg">Toby Bostoen is a passionate <span className="font-bold">frontend developer</span> based in Belgium. He is a final year student <span className="font-bold">MCT at Howest Kortrijk</span></p>
                            </div>
                            <picture className="relative w-auto 2xl:w-[730px] md:w-full md:h-30 pt-4 !-ml-0"><Image src={personalprogrammer} alt="image of a computer" className="rounded" layout="responsive" placeholder="blur" objectFit="cover" /></picture>
                        </div>
                    </section>
                    <section className="flex flex-col items-center md:justify-center">
                        <div className="flex flex-col-reverse md:flex-row mb-16 space-x-16 md:items-center">
                            <picture className="relative hidden w-auto lgx:block 2xl:w-[1200px] md:w-full md:h-30 pt-4 !-ml-0"><Image src={business} alt="image with the text: open for business" layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/></picture>
                            <div className="space-y-4 md:space-y-10 lgx:pl-12 !-ml-0">
                                <h2 className="dark:text-lightblue text-green text-3xl">Some of my qualities</h2>
                                <div className="space-y-4 text-left">
                                    <p className="dark:text-white text-black text-lg">Toby is a person who likes to know how things were build and programmed. Sometimes he's thinking about how some things can be <span className="font-bold">improved</span> and be <span className="font-bold">made even faster</span>. His strong points are that he likes to <span className="font-bold">stay open minded</span> about newer technologies and he likes to learn more every day. Sitting still isn't something he likes to do because he wants to be <span className="font-bold">productive</span> throughout the day.</p>
                                    <p className="dark:text-white text-black text-lg">Every human has some bad qualities and his are that he is not easily satisfied with the results of a project. You can call it <span className="font-bold">perfectionism at it's finest</span>, but hey who's perfect?</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col items-center justify-center">
                        <div className="flex flex-col md:flex-row pb-16 space-x-16 md:items-center">
                            <div className="space-y-4 md:space-y-10 md:pr-12 !-ml-0">
                                <h2 className="dark:text-lightblue text-green text-3xl">Improve yourself</h2>
                                <div className="space-y-4">
                                    <p className="dark:text-white text-black text-lg">In his free time he likes to take care of himself both mentally and physically. Programming with a <span className="font-bold">clear mind</span> and a big bottle of water is the best way to start your productive day. He tries to have some kind of excersice at least one hour per day to improve his stamina and endurance because taking care of himself means taking care of others.</p>
                                    <p className="dark:text-white text-black text-lg">On this website you'll get to see my <span className="font-bold">improvements</span> and some of my <span className="font-bold">projects</span> throughout my course of learning and developing. Hopefully you'll get inspired to improve yourself and your knowledge and who knows, maybe there's even place and time to collaborate on some projects.</p>
                                </div>
                            </div>
                            <picture className="relative hidden lgx:block w-auto md:w-full md:h-30 pt-4 !-ml-0"><Image src={zen} alt="image of a computer" placeholder="blur" className="rounded"/></picture>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}