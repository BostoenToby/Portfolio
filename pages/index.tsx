import Link from '../node_modules/next/link'
import Image from '../node_modules/next/image'
import { useEffect, useState } from 'react'
import { getStorage, setStorage } from '../components/localstorage'
import { Sun } from 'lucide-react'
import personalImage from '../public/personalImage.jpg'
import spotify from '../public/spotify.png';
import personalimage from '../public/personalimage.jpg';
import headerlogo from '../public/logo.png';

export default function Home() {
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
      <header className="flex justify-between mx-8 pt-6 font-montserrat">
          <h1 className={`${dark? 'text-white border-white' : 'text-black border-black'} border-b-2 font-montserrat h-7`}>Bostoen Toby</h1>
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
      <main className="font-montserrat my-16 mx-8 space-y-4²">
        <section className="grid grid-cols-2">
          <div className="px-4 text-center py-40 flex flex-col">
            <div className="items-start mb-16">
              <h1 className={`${dark? 'text-white' : 'text-black'} text-5xl pb-4`}>Toby Bostoen</h1>
              <h3 className={`${dark? 'text-white' : 'text-black'} text-3xl leading-normal`}>Frontend Developer<br />Based in Belgium</h3>
            </div>
            <div className={`${dark? 'text-white' : 'text-black'} flex justify-between text-xl mx-12 items-end`}>
              {languages.map((lang) => {
                return(
                  <p className={`${dark? 'text-white' : 'text-black'} text-xl`}>{lang}</p>
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
