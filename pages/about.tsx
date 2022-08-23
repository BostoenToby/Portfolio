import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import Logo from '../assets/2x/Asset2@2x.png';
import { useEffect, useState } from "react";
import { getStorage, setStorage } from "../components/localstorage";
import { Sun } from "lucide-react";
import dreamQuote from '../public/dreams-quote.jpeg';
import computer from '../public/computer.webp';
import business from '../public/business.jpeg';


export default function about () {
    const [dark, setDark] = useState<boolean>()

    useEffect(() => {
        console.log(getStorage("dark"))
        if(getStorage("dark") != undefined || getStorage("dark") != null){
            setDark(getStorage("dark") === 'true' ? true : false)
            console.log(getStorage("dark") === 'true' ? true : false)
        } else {
            setDark(false)
            setStorage("dark", false)
        }
    }, [])

    const changeTheme = () => {
        setDark(!dark)
        setStorage("dark", !dark)
    }

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'}`}>
            <header className="flex justify-between mx-8 pt-6 font-montserrat">
                <Image src="" />
                <div className="flex space-x-12">
                    <Link href="/"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>Home</p></Link>
                    <Link href="/projects"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>Projects</p></Link>
                    <Link href="/about"><p className={`text-base ${dark? 'text-white' : 'text-black'} cursor-pointer`}>About</p></Link>
                </div>
                <div className="flex space-x-4 items-center">
                    <Sun className={`cursor-pointer ${dark? 'text-lightgray' : 'text-darkgray'}`} onClick={async() => {changeTheme()}}/>
                    <Link href="/contact"><button className={`${dark? 'bg-darkgray text-white' : 'bg-lightgray text-black'} p-2 rounded`}>Contact</button></Link>
                </div>
            </header>
            <main className="font-montserrat mt-16 mx-8">
                <div className="grid grid-cols-2 mb-8 space-x-8">
                    <div className="py-20 flex flex-col justify-between">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-6xl`}>Some words about me, if you're interested at least</h1>
                        <p className={`${dark? 'text-white' : 'text-black'}`}>Toby Bostoen is a passionate frontend developer based in Belgium. He is a final year student MCT at Howest Kortrijk</p>
                    </div>
                    <Image src={computer} className="rounded shadow-lg"/>
                </div>
                <div className="grid grid-cols-2 mb-8 space-x-8">
                    <Image src={business} className="rounded" layout="intrinsic"/>
                    <div className="flex flex-col space-y-10 justify-between py-24">
                        <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-4xl`}>Some of my qualities</h3>
                        <p className={`${dark? 'text-white' : 'text-black'}`}>Toby is a person who likes to know how things were build and programmed. Sometimes he's thinking about how some things can be improved and be made even faster. His strong points are that he likes to stay open minded about newer technologies and he likes to learn more every day. Sitting still isn't something he likes to do because he wants to be productive throughout the day.</p>
                        <p className={`${dark? 'text-white' : 'text-black'}`}>Every human has some bad qualities and his are that he is not easily satisfied with the results of a project. You can call it perfectionism at it's finest, but hey who's perfect?</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 space-x-8 pb-16">
                    <div className="flex col-start-1 col-end-3 flex-col justify-between py-32 space-y-10">
                        <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-4xl`}>Improve yourself</h3>
                        <p className={`${dark? 'text-white' : 'text-black'}`}>In his free time he likes to take care of himself both mentally and physically. Programming with a clear mind and a big bottle of water is the best way to start your productive day. He tries to have some kind of excersice at least one hour per day to improve his stamina and endurance because taking care of himself means taking care of others.</p>
                        <p className={`${dark? 'text-white' : 'text-black'}`}>On this website you'll get to see my improvements and some of my projects throughout my course of learning and developing. Hopefully you'll get inspired to improve yourself and your knowledge and who knows, maybe there's even place and time to collab on some projects.</p>
                    </div>
                    <Image src={dreamQuote} className="rounded"/>
                </div>
            </main>
        </div>
    )
}