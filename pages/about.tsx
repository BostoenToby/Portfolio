import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import { useEffect, useState } from "react";
import { getStorage, setStorage } from "../components/localstorage";
import { Sun, Menu, X } from "lucide-react"
import business from '../public/business.jpeg';
import personalprogrammer from '../public/computergray.jpg';
import computer from '../public/computergray.jpg';

export default function about () {
    const [dark, setDark] = useState<boolean>()
    const [fullSize, setFullSize] = useState<boolean>(true)
    const [showSideNav, setShowSideNav] = useState<boolean>(false)

    useEffect(() => {
        if(getStorage("dark") != undefined || getStorage("dark") != null){
            setDark(getStorage("dark") === 'true' ? true : false)
            console.log(getStorage("dark") === 'true' ? true : false)
        } else {
            setDark(false)
            setStorage("dark", false)
        }

        if(typeof window !== "undefined"){
            const updateSize = () => {
                if(window.innerWidth >= 768){
                    setFullSize(true)
                } else {
                    setFullSize(false)
                }
            }
            updateSize()

            window.addEventListener("resize", updateSize)
        }
    }, [])

    const changeTheme = () => {
        setDark(!dark)
        setStorage("dark", !dark)
    }

    const handleSideBar = () => {
        setShowSideNav(!showSideNav)
    }

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'}`}>
            {fullSize? (
                <header className="flex justify-between items-center mx-8 pt-6 font-montserrat">
                    <h1 className={`${dark? 'text-white border-white' : 'text-black border-black'} border-b-2 font-montserrat h-7 sm:text-sm`}>Bostoen Toby</h1>
                    <div className="flex space-x-12 sm:text-sm">
                        <Link href="/"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>Home</p></Link>
                        <Link href="/projects"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>Projects</p></Link>
                        <Link href="/about"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>About</p></Link>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <Sun className={`cursor-pointer ${dark? 'text-lightgray' : 'text-darkgray'}`} onClick={async() => {changeTheme()}}/>
                        <Link href="/contact"><button className={`${dark? 'bg-darkgray text-white' : 'bg-lightgray text-black'} p-2 rounded`}>Contact</button></Link>
                    </div>
                </header>
            ) : (
                <div>
                    <header className={`flex items-center mx-8 pt-6 font-montserrat ${showSideNav? 'justify-end' : 'justify-between'}`}>
                        <Menu className={`${dark? 'text-white':'text-black'} ${showSideNav? 'hidden' : ''}`} onClick={() => handleSideBar()}/>
                        <div className={`fixed top-0 left-0 ${showSideNav? '' : 'hidden'} ${dark? 'bg-darkgray' : 'bg-lightgray'} h-screen w-1/3`}>
                            <div className="flex justify-between mx-8 mt-6 items-center">
                                <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-xl`}>Dashboard</h3>
                                <X className={`${dark? 'text-white' : 'text-black'} h-4 w-4`} onClick={() => handleSideBar()}/>
                            </div>
                            <section className="mt-8 mx-8 space-y-4">
                                <Link href="/"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>Home</p></Link>
                                <Link href="/projects"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>Projects</p></Link>
                                <Link href="/about"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>About</p></Link>
                            </section>
                        </div>
                        <h1 className={`${dark? 'text-white border-white' : 'text-black border-black'} border-b-2 font-montserrat h-7 sm:text-sm`}>Bostoen Toby</h1>
                    </header>
                </div>
            )}
            <main className="font-montserrat mx-8">
                <section className="h-screen flex flex-col items-center justify-center">
                    <div className="flex mb-16 space-x-16">
                        <div className="space-y-10 pr-12">
                            <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-6xl`}>Some words about me, if you're interested at least</h1>
                            <p className={`${dark? 'text-white' : 'text-black'} text-lg`}>Toby Bostoen is a passionate <span className="font-bold">frontend developer</span> based in Belgium. He is a final year student <span className="font-bold">MCT at Howest Kortrijk</span></p>
                        </div>
                        <picture className="relative w-full h-30"><Image src={personalprogrammer} className="rounded" layout="fill" placeholder="blur" objectFit="cover" /></picture>
                    </div>
                </section>
                <section className="h-screen flex flex-col items-center justify-center">
                    <div className="flex space-x-8 mb-16 items-center">
                        <Image src={business} className="rounded"/>
                        <div className="space-y-10 pl-12">
                            <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-4xl`}>Some of my qualities</h3>
                            <div className="space-y-4">
                                <p className={`${dark? 'text-white' : 'text-black'} text-lg`}>Toby is a person who likes to know how things were build and programmed. Sometimes he's thinking about how some things can be <span className="font-bold">improved</span> and be <span className="font-bold">made even faster</span>. His strong points are that he likes to <span className="font-bold">stay open minded</span> about newer technologies and he likes to learn more every day. Sitting still isn't something he likes to do because he wants to be <span className="font-bold">productive</span> throughout the day.</p>
                                <p className={`${dark? 'text-white' : 'text-black'} text-lg`}>Every human has some bad qualities and his are that he is not easily satisfied with the results of a project. You can call it <span className="font-bold">perfectionism at it's finest</span>, but hey who's perfect?</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-screen flex flex-col items-center justify-center">
                    <div className="flex space-x-8 pb-16 items-center">
                        <div className="space-y-10 pr-12">
                            <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-4xl`}>Improve yourself</h3>
                            <div className="space-y-4">
                                <p className={`${dark? 'text-white' : 'text-black'} text-lg`}>In his free time he likes to take care of himself both mentally and physically. Programming with a <span className="font-bold">clear mind</span> and a big bottle of water is the best way to start your productive day. He tries to have some kind of excersice at least one hour per day to improve his stamina and endurance because taking care of himself means taking care of others.</p>
                                <p className={`${dark? 'text-white' : 'text-black'} text-lg`}>On this website you'll get to see my <span className="font-bold">improvements</span> and some of my <span className="font-bold">projects</span> throughout my course of learning and developing. Hopefully you'll get inspired to improve yourself and your knowledge and who knows, maybe there's even place and time to collaborate on some projects.</p>
                            </div>
                        </div>
                        <Image src={computer} className="rounded"/>
                    </div>
                </section>
            </main>
        </div>
    )
}