import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import Logo from '../assets/2x/Asset2@2x.png';
import { Sun } from 'lucide-react' 
import { useEffect, useState } from "react";
import { getStorage, setStorage } from "../components/localstorage";

export default function contact () {
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
            <main className="font-montserrat flex items-center justify-center space-x-20 mt-16 h-[70vh] mx-8">
                <section>
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-6xl mb-4`}>Don't hessitate, go ahead<br />and contact me</h1>
                    <p className={`text-base ${dark? 'text-white' : 'text-black'}`}>Send me directly <span className="font-bold text-green cursor-pointer">here</span> or use the form on the right</p>
                </section>
                <section className="flex flex-col space-y-4">
                    <div className="flex space-x-4">
                        <input type="text" placeholder="Full name" className={`p-4 rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                        <input type="text" placeholder="Subject" className={`p-4 rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    </div>
                    <input type="text" placeholder="Email address" className={`p-4 rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    <textarea name="message" id="message" cols={30} rows={7} placeholder="Message" className={`p-4 resize-none rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    <button className={`py-6 px-16 text-white bg-green rounded`}>Send message</button>
                </section>
            </main>
        </div>
    )
}