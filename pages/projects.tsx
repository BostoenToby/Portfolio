import { Sun, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { getStorage, setStorage } from "../components/localstorage"
import ProjectBlock from "../components/projectBlock"
import Image from "../node_modules/next/image"
import Link from "../node_modules/next/link"
import * as projectList from '../components/projects'


export default function projects () {
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

    const projects = [{
        title: "Cocktail Maker",
        explanation: "My first individual project for school was a cocktail maker. This was made in my first year of my bachelor course. I've used a Rasperrby Pi 4B and python to program the cocktail maker. On the screen there is a IP address displayed where you can surf to. If you load the webpage you'll see what cocktails are available and you're able to make these. There are also statistics about how much there is left of a certain drink, how hot the drinks are, how much a certain cocktail was asked in a period of time. You don't have to use the webpage to make cocktails because you can also press a button on the keypad to make a cocktail. The display shows different screens and each screen has different cocktails with the number displayed.",
        image: "cocktailmaker.jpg"
    },
    {
        title: "Vital Cities Beweegscan",
        explanation: "My second big project was in my second year of my bachelor course MCT. We worked on a project for Vital Cities where they wanted an online tool for people where they could compare their city with others on certain aspects. The main goal of Vital Cities was to make people aware that the car doesn't need to be your first option to get around. They support people to go on walks, go cycling, use public transportation, ... Some examples of the aspects that you can compare on the online tool are: accessibility of playgrounds, enough options for public transport, ...",
        image: "vitalcities.png"
    },
    {
        title: "Portfolio",
        explanation: "In the summer of 2022 I've started this portfolio as a place to store my projects and to inspire others to expand their knowledge. My goal is to make a fun website that isn't boring to look at with a cool color palette and without the boring parts. In the future I'll maybe consider to change to another framework to make sure the user gets the best experience.",
        image: "personalprogrammer.jpg"
    }]

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
                <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-5xl mb-8`}>Projects</h1>               
                {projects.map((project, index) => {
                    return(
                        <ProjectBlock dark={dark} image={require(`../public/${project.image}`)} title={project.title} explanation={project.explanation}/>
                    )
                })}
            </main>
        </div>
    )
}