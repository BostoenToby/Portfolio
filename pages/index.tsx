import Link from '../node_modules/next/link'
import Image from '../node_modules/next/image'
import { useEffect, useState } from 'react'
import { getStorage, setStorage } from '../components/localstorage'
import { Sun } from 'lucide-react'
import personalImage from '../public/personalImage.jpg'
import spotify from '../public/spotify.png';

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
      <main className="font-montserrat mt-16 mx-8 space-y-4²">
        <section className="grid grid-cols-2">
          <div className="p-4 text-center">
            <h1 className={`${dark? 'text-white' : 'text-black'} text-5xl pb-4`}>Toby Bostoen</h1>
            <h3 className={`${dark? 'text-white' : 'text-black'} text-3xl leading-normal`}>Frontend Developer<br />Based in Belgium</h3>
          </div>
          <div className="flex items-center">
            <a className="flex items-center" target="_blank" href="https://open.spotify.com/playlist/7tvzXRYLK4GDMAetKXz5BJ?si=ce83aa71e5544ed8">
              <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl pr-4`}>Enjoy my playlist</h3>
              <Image src={spotify} width={50} height={50}/>
            </a>
          </div>
        </section>
        <section className={`${dark? 'bg-darkgray' : 'bg-lightgray'} rounded p-4 mx-auto mt-32`}>
          <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl pb-4`}>Experience</h3>
          <div className={`${dark? 'text-white' : 'text-black'} flex justify-between text-xl mx-12`}>
            {languages.map((lang) => {
              return(
                <p className={`${dark? 'text-white' : 'text-black'} text-xl`}>{lang}</p>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
