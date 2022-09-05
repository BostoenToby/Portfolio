import { Sun, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "../node_modules/next/link"
import { getStorage, setStorage } from "./localstorage"

export default (params) => {
    // const [dark, setDark] = useState<boolean>()
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
        <div>
            {fullSize? (
                <header className="flex justify-between items-center mx-8 pt-6 font-montserrat">
                    <h1 className={`${params.dark? 'text-white border-white' : 'text-black border-black'} border-b-2 font-montserrat h-7 sm:text-sm`}>Bostoen Toby</h1>
                    <div className="flex space-x-12 sm:text-sm">
                        <Link href="/"><p className={`text-base ${params.dark? 'text-white' : 'text-black'} cursor-pointer`}>Home</p></Link>
                        <Link href="/projects"><p className={`text-base ${params.dark? 'text-white' : 'text-black'} cursor-pointer`}>Projects</p></Link>
                        <Link href="/about"><p className={`text-base ${params.dark? 'text-white' : 'text-black'} cursor-pointer`}>About</p></Link>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <Sun className={`cursor-pointer ${params.dark? 'text-lightgray' : 'text-darkgray'}`} onClick={async() => {changeTheme()}}/>
                        <Link href="/contact"><button className={`${params.dark? 'bg-darkgray text-white' : 'bg-lightgray text-black'} p-2 rounded`}>Contact</button></Link>
                    </div>
                </header>
            ) : (
                <div>
                    <header className={`flex items-center mx-8 pt-6 font-montserrat ${showSideNav? 'justify-end' : 'justify-between'}`}>
                        <Menu className={`${params.dark? 'text-white':'text-black'} ${showSideNav? 'hidden' : ''}`} onClick={() => handleSideBar()}/>
                        <div className={`fixed top-0 left-0 ${showSideNav? '' : 'hidden'} ${params.dark? 'bg-darkgray' : 'bg-lightgray'} h-screen w-1/3`}>
                            <div className="h-screen flex flex-col justify-between py-6">
                                <div>
                                    <div className="flex justify-between mx-8 mt-6 items-center">
                                        <h3 className={`${params.dark? 'text-lightblue' : 'text-green'} text-xl`}>Dashboard</h3>
                                        <X className={`${params.dark? 'text-white' : 'text-black'} h-4 w-4`} onClick={() => handleSideBar()}/>
                                    </div>
                                    <section className="mt-8 mx-8 space-y-4">
                                        <Link href="/"><p className={`text-base ${params.dark? 'text-white' : 'text-black'} cursor-pointer`}>Home</p></Link>
                                        <Link href="/projects"><p className={`text-base ${params.dark? 'text-white' : 'text-black'} cursor-pointer`}>Projects</p></Link>
                                        <Link href="/about"><p className={`text-base ${params.dark? 'text-white' : 'text-black'} cursor-pointer`}>About</p></Link>
                                    </section>
                                </div>
                                <div className="flex justify-end"><Sun className={`cursor-pointer ${params.dark? 'text-lightgray' : 'text-darkgray'} mx-8 mb-16`} onClick={async() => {changeTheme()}}/></div>
                            </div>
                        </div>
                        <h1 className={`${params.dark? 'text-white border-white' : 'text-black border-black'} border-b-2 font-montserrat h-7 sm:text-sm`}>Bostoen Toby</h1>
                    </header>
                </div>
            )}
        </div>
    )
}