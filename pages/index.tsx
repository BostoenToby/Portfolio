import Image from '../node_modules/next/image'
import personalimage from '../public/personalimage.jpg';
import Header from '../components/header'
import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState<boolean>()

  const languages = [
    "Javascript",
    "Python",
    "NextJS",
    "React",
    "Gatsby",
    "TailwindCSS",
    "C#"
  ]

  return (
    <div className={`${dark? 'dark': null}`}>
      <div className="h-screen overflow-x-hidden overflow-y-hidden z-0 dark:bg-black bg-white">
        <Header setDark={setDark} dark={dark}/>
        <main className="font-montserrat my-auto pt-4 mx-8 space-y-4">
          <section className="sm:grid sm:grid-rows-2 md:grid-cols-2 md:grid-rows-none">
            <div className="md:col-start-1 md:px-4 text-center landscape:py-12 portrait:py-40 md:py-40 flex flex-col my-auto">
              <div className="mb-16">
                <h1 className="dark:text-white text-black text-3xl md:text-5xl pb-4">Toby Bostoen</h1>
                <h2 className="dark:text-white text-black text-xl md:text-3xl leading-normal">Frontend Developer<br />Based in Belgium</h2>
              </div>
              <div className="dark:text-white text-black grid grid-rows-2 grid-cols-4 justify-between text-xl items-end space-y-4 space-x-4">
                {languages.map((lang, index) => {
                  return(
                    <p key={index} className="dark:text-white text-black text-sm md:text-xl`">{lang}</p>
                  )
                })}
              </div>
            </div>
            <div className="hidden md:block md:my-auto md:relative row-start-1 md:col-start-2">
              <Image src={personalimage} alt="an image of the creator of the site" layout="responsive" placeholder="blur" className="rounded" />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
