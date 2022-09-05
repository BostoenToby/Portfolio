import Link from '../node_modules/next/link'
import Image from '../node_modules/next/image'
import { useEffect, useState } from 'react'
import { getStorage, setStorage } from '../components/localstorage'
import { Sun, Menu, X } from "lucide-react"
import personalImage from '../public/personalImage.jpg'
import spotify from '../public/spotify.png';
import personalimage from '../public/personalimage.jpg';
import headerlogo from '../public/logo.png';

export default function Home() {
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

  const languages = [
    "javascript",
    "python",
    "C#",
    "React",
    "Gatsby",
    "TailwindCSS",
    "NextJS"
  ]

  return (
    <div className={`h-screen ${dark? 'bg-black': 'bg-white'}`}>
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
      <main className="font-montserrat my-16 mx-8 space-y-4²">
        <section className="grid grid-cols-2">
          <div className="px-4 text-center py-40 flex flex-col">
            <div className="items-start mb-16">
              <h1 className={`${dark? 'text-white' : 'text-black'} text-5xl pb-4`}>Toby Bostoen</h1>
              <h3 className={`${dark? 'text-white' : 'text-black'} text-3xl leading-normal`}>Frontend Developer<br />Based in Belgium</h3>
            </div>
            <div className={`${dark? 'text-white' : 'text-black'} flex justify-between text-xl mx-12 items-end`}>
              {languages.map((lang, index) => {
                return(
                  <p key={index} className={`${dark? 'text-white' : 'text-black'} text-xl`}>{lang}</p>
                )
              })}
            </div>
          </div>
          <div className="flex items-center relative h-30">
            <Image src={personalimage} layout="fill" placeholder="blur" objectFit="cover" className="rounded" />
          </div>
        </section>
      </main>
    </div>
  )
}
