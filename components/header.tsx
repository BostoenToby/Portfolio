//@ts-ignore
import { Download } from "lucide-react"
import { Sun, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "../node_modules/next/link"
import { getStorage, setStorage } from "./localstorage"

const Header = (params) => {
    const [fullSize, setFullSize] = useState<boolean>(true)
    const [showSideNav, setShowSideNav] = useState<boolean>(false)

    useEffect(() => {
        console.log({params})
        if(getStorage("dark") != undefined || getStorage("dark") != null){
            params.setDark(getStorage("dark") === 'true' ? true : false)
            console.log(getStorage("dark") === 'true' ? true : false)
        } else {
            params.setDark(false)
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
        params.setDark(!params.dark)
        setStorage("dark", !params.dark)
    }

    const handleSideBar = () => {
        setShowSideNav(!showSideNav)
    }
    return(
        <div className={`${params.dark? 'dark' : null} z-10`}>
            {fullSize? (
                <header className="flex justify-between items-center mx-8 pt-6 font-montserrat">
                    <Link href="/"><h1 className="cursor-pointer dark:text-white dark:border-white text-black border-black border-b-2 font-montserrat h-7 sm:text-sm">Bostoen Toby</h1></Link>
                    <div className="flex space-x-12 sm:text-sm">
                        <Link href="/"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`${params.active === 'Home' ? 'text-lightblue' : null}`}>Home</p></div></Link>
                        <Link href="/projects"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`${params.active === 'Projects' ? 'text-lightblue' : null}`}>Projects</p></div></Link>
                        <Link href="/about"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`${params.active === 'About' ? 'text-lightblue' : null}`}>About</p></div></Link>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"><div className="flex space-x-1"><p className="text-base dark:text-white text-black">CV</p><Download className="dark:text-white text-black"/></div></a>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <Sun className="cursor-pointer dark:text-lightgray text-darkgray" onClick={async() => {changeTheme()}}/>
                        <Link href="/contact"><button className="dark:bg-darkgray dark:text-white bg-lightgray text-black p-2 rounded">Contact</button></Link>
                    </div>
                </header>
            ) : (
                <header className={`flex items-center mx-8 pt-6 font-montserrat ${showSideNav? 'justify-end' : 'justify-between'}`}>
                    <Menu className={`dark:text-white text-black ${showSideNav? 'hidden' : ''}`} onClick={() => handleSideBar()}/>
                    <div className={`fixed top-0 left-0 ${showSideNav? '' : 'hidden'} ${params.dark? 'bg-darkgray' : 'bg-lightgray'} h-screen w-2/5 z-10`}>
                        <div className="h-screen flex flex-col justify-between py-6">
                            <div>
                                <div className="flex justify-between items-center mx-4 md:mx-8">
                                    <X className="dark:text-white text-black h-6 w-6" onClick={() => handleSideBar()}/>
                                    <Sun className="cursor-pointer dark:text-lightgray text-darkgray h-6 w-6" onClick={async() => {changeTheme()}}/>
                                </div>
                                <div className="flex justify-between mx-4 mt-3 md:mx-8 md:mt-6 items-center">
                                    <h3 className="dark:text-lightblue text-green text-lg md:text-xl">Dashboard</h3>
                                </div>
                                <section className="mt-4 mx-4 md:mt-8 md:mx-8 space-y-4">
                                    <Link href="/"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`${params.active === 'Home' ? 'text-lightblue' : null}`}>Home</p></div></Link>
                                    <Link href="/projects"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`${params.active === 'Projects' ? 'text-lightblue' : null}`}>Projects</p></div></Link>
                                    <Link href="/about"><div className="text-base dark:text-white text-black cursor-pointer"><p className={`${params.active === 'About' ? 'text-lightblue' : null}`}>About</p></div></Link>
                                    <p className="w-max"><a href="/cv.pdf" target="_blank" rel="noopener noreferrer"><div className="flex space-x-1"><p className="text-base dark:text-white text-black">CV</p><Download className="dark:text-white text-black"/></div></a></p>
                                    <Link href="/contact"><p className="text-base dark:text-white text-black cursor-pointer">Contact</p></Link>
                                </section>
                            </div>
                        </div>
                    </div>
                    <Link href="/"><h1 className="cursor-pointer dark:text-white dark:border-white text-black border-black border-b-2 font-montserrat h-7 sm:text-sm">Bostoen Toby</h1></Link>
                </header>
            )}
        </div>
    )
}

export default Header