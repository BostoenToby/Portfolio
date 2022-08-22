import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import Logo from '../assets/2x/Asset2@2x.png';
import { useEffect, useState } from "react";
import { getStorage, setStorage } from "../components/localstorage";
import { Sun } from "lucide-react";

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
        <div className={`h-screen ${dark? 'bg-black': 'bg-white'}`}>
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
            <main>

            </main>
        </div>
    )
}