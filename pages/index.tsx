import Image from '../node_modules/next/image'
import personalimage from '../public/personalimage.jpg';
import Header from '../components/header'
import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState<boolean>()

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
      <Header setDark={setDark} dark={dark}/>
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
