import { Sun, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { getStorage, setStorage } from "../components/localstorage"
import Image from "../node_modules/next/image"
import Link from "../node_modules/next/link"
import vitalcities from '../public/vitalcities.png';

export default function beweegscan () {
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
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <div className="grid grid-cols-3 justify-between items-center mb-8">
                    <div className="col-start-1 col-end-3">
                        <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-5xl mb-8`}>Vital Cities Beweegscan</h1>
                        <div className="flex space-x-4">
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>2021-2022</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>frontend</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>data storage</h4>
                            <h4 className={`${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} p-2 rounded`}>CMS</h4>
                        </div>
                    </div>
                    <div className="col-start-3 relative w-30 h-96">
                        <Image src={vitalcities} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                </div>
                <section className="grid grid-cols-2 space-x-8">
                    <div className="col-start-1 relative w-auto h-auto">
                        <Image src={""} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
                    </div>
                    <p className={`${dark? 'text-white' : 'text-black'} py-16`}>My second big project was in my second year of my bachelor course MCT. We worked on a project for Vital Cities where they wanted an online tool for people where they could compare their city with others on certain aspects. The main goal of Vital Cities was to make people aware that the car doesn't need to be your first option to get around. They support people to go on walks, go cycling, use public transportation, ... Some examples of the aspects that you can compare on the online tool are: accessibility of playgrounds, enough options for public transport, ...</p>
                </section>
            </main>
        </div>
    )
}