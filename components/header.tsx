//@ts-ignore
import { Download } from "lucide-react"
import { Sun, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "../node_modules/next/link"
import { getStorage, setStorage } from "./localstorage"
import fileDownload from 'js-file-download'

const Header = (params) => {
    const [fullSize, setFullSize] = useState<boolean>(true)
    const [showSideNav, setShowSideNav] = useState<boolean>(false)

    let dissapearTimeout

    useEffect(() => {
        if(getStorage("dark") != undefined || getStorage("dark") != null){
            params.setDark(getStorage("dark") === 'true' ? true : false)
            console.log(getStorage("dark") === 'true' ? true : false)
        } else {
            params.setDark(false)
            setStorage("dark", false)
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // dark mode from OS
                params.setDark(true)
                setStorage("dark", true)
            }
            else {
                params.setDark(false)
                setStorage("dark", false)
            }
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
        params.setDark(!params.dark)
        setStorage("dark", !params.dark)
    }

    const handleSideBar = () => {
        setShowSideNav(!showSideNav)
    }

    const Show = (array: string[]) => {
        array.forEach(link => document.getElementById(link).style.opacity = '100')
        array.forEach(link => document.getElementById(link).style.display = 'block')
    }

    const Dissapear = (array: string[]) => {
        dissapearTimeout = setTimeout(() => {
            array.forEach(link => {
                const linkItem = document.getElementById(link)
                linkItem.style.opacity = '0'
            })
        }, 500)
    }

    const InterruptDissapear = () => {
        clearTimeout(dissapearTimeout)
    }

    return(
        <div className={`${params.dark? 'dark' : null} z-10 landscape:pb-4`}>
            {fullSize? (
                <header className="flex justify-between items-center mx-8 pt-6 font-montserrat">
                    <Link href="/"><button><h1 className="cursor-pointer dark:text-lightblue dark:border-lightblue text-green border-green border-b-2 font-montserrat h-7 sm:text-sm">Bostoen Toby</h1></button></Link>
                    <div className="flex space-x-12 sm:text-sm">
                        <Link href="/"><button className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'Home' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green' : null} hover:border-b-2 hover:-mb-1`}>Home</p></button></Link>
                        <div className="flex flex-col">
                            <Link href="/projects"><button onMouseEnter={() => {InterruptDissapear(); Show(["cocktailmaker", "vitalcities", "portfolio"])}} onMouseLeave={() => Dissapear(["cocktailmaker", "vitalcities", "portfolio"])} className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'Projects' || params.active === "Vitalcities" || params.active === "Portfolio" || params.active === "Cocktailmaker" ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green' : null} hover:border-b-2 hover:-mb-1`}>Projects</p></button></Link>
                            <div id="cocktailmaker" onMouseEnter={() => InterruptDissapear()} onMouseLeave={() => Dissapear(["cocktailmaker", "vitalcities", "portfolio"])} className="hidden transition-opacity ease-in text-opacity-0 absolute mt-7"><Link href="/cocktailmaker"><button className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'Cocktailmaker' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green': null} hover:border-b-2 hover:-mb-1`}>Cocktailmaker</p></button></Link></div>
                            <div id="vitalcities" onMouseEnter={() => InterruptDissapear()} onMouseLeave={() => Dissapear(["cocktailmaker", "vitalcities", "portfolio"])} className="hidden transition-opacity ease-in text-opacity-0 absolute mt-14"><Link href="/vitalcitiesbeweegscan"><button className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'Vitalcities' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green': null} hover:border-b-2 hover:-mb-1`}>Vital Cities Beweegscan</p></button></Link></div>
                            <div id="portfolio" onMouseEnter={() => InterruptDissapear()} onMouseLeave={() => Dissapear(["cocktailmaker", "vitalcities", "portfolio"])} className="hidden transition-opacity ease-in text-opacity-0 absolute mt-[84px]"><Link href="/portfolio"><button className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'Portfolio' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green': null} hover:border-b-2 hover:-mb-1`}>Portfolio</p></button></Link></div>
                        </div>
                        <Link href="/about"><button className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'About' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green' : null} hover:border-b-2 hover:-mb-1`}>About</p></button></Link>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"><div className="flex space-x-1"><p className="hover:dark:border-white hover:border-black text-base dark:text-white text-black">CV</p><Download strokeWidth="1" className="dark:text-white text-black" /></div></a>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <button><Sun className="cursor-pointer dark:text-lightblue text-green" onClick={async() => {changeTheme()}} onKeyPress={(event: any) => {if(event.key === 'Enter'){changeTheme()}}}/></button>
                        <Link href="/contact"><button className="dark:bg-darkgray dark:text-white bg-lightgray text-black hover:dark:bg-lightblue hover:text-white hover:bg-green p-2 rounded">Contact</button></Link>
                    </div>
                </header>
            ) : (
                <div>
                    <header className={`flex items-center mx-8 pt-6 font-montserrat ${showSideNav? 'justify-end' : 'justify-between'}`}>
                        <Menu className={`dark:text-white text-black ${showSideNav? 'hidden' : ''}`} onClick={() => handleSideBar()}/>
                        <div className={`fixed top-0 left-0 ${showSideNav? '' : 'hidden'} ${params.dark? 'bg-darkgray' : 'bg-lightgray'} h-screen w-2/5 z-20`}>
                            <div className="h-screen flex flex-col justify-between py-6">
                                <div>
                                    <div className="flex justify-between items-center mx-4 md:mx-8">
                                        <X className="dark:text-white text-black h-6 w-6" onClick={() => handleSideBar()}/>
                                        <Sun className="cursor-pointer dark:text-lightblue text-green h-6 w-6" onClick={async() => {changeTheme()}}/>
                                    </div>
                                    <div className="flex justify-between mx-4 mt-3 md:mx-8 md:mt-6 items-center">
                                        <h3 className="dark:text-lightblue text-green text-lg md:text-xl">Dashboard</h3>
                                    </div>
                                    <section className="mt-4 mx-4 md:mt-8 md:mx-8 space-y-4">
                                        <Link href="/"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'Home' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green' : null} hover:border-b-2 hover:-mb-1`}>Home</p></div></Link>
                                        <Link href="/projects"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'Projects' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green' : null} hover:border-b-2 hover:-mb-1`}>Projects</p></div></Link>
                                        <Link href="/about"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'About' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green' : null} hover:border-b-2 hover:-mb-1`}>About</p></div></Link>
                                        <p className="w-max"><a href="/cv.pdf" target="_blank" rel="noopener noreferrer"><div className="flex space-x-1"><p className="hover:dark:border-white hover:border-black text-base dark:text-white text-black">CV</p><Download strokeWidth="1" className="dark:text-white text-black"/></div></a></p>
                                        <Link href="/contact"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`hover:dark:border-white hover:border-black ${params.active === 'Contact' ? 'dark:text-lightblue text-darkgreen hover:dark:!border-lightblue hover:!border-green' : null} hover:border-b-2 hover:-mb-1`}>Contact</p></div></Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <Link href="/"><h1 className="cursor-pointer dark:text-lightblue dark:border-lightblue text-green border-green border-b-2 font-montserrat h-7 sm:text-sm">Bostoen Toby</h1></Link>
                    </header>
                    <div className={`${showSideNav? null : 'hidden' } fixed top-0 bottom-0 left:0 right:0 h-screen w-screen z-10 bg-darkgray opacity-40 pl-20`} onClick={() => handleSideBar()}></div>
                </div>
            )}
        </div>
    )
}

export default Header