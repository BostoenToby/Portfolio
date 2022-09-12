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
        <Header setDark={setDark} dark={dark} active="Home"/>
        <main className="font-montserrat pt-0 mx-8 space-y-4">
          <section className="sm:grid sm:grid-rows-2 md:grid-cols-2 md:grid-rows-none">
            <div className="md:col-start-1 md:px-4 text-center landscape:py-12 portrait:py-40 md:py-40 flex flex-col my-auto">
              <div className="xsmH:mb-12 mb-8">
                <h1 className="dark:text-white text-black text-3xl md:text-5xl pb-4">Toby Bostoen</h1>
                <h2 className="dark:text-white text-black text-xl md:text-3xl leading-normal">Frontend Developer<br />Based in Belgium</h2>
              </div>
              <div className="dark:text-white text-black grid grid-rows-2 grid-cols-4 justify-between text-xl items-end space-y-4 space-x-4">
                {languages.map((lang, index) => {
                  return(
                    <p key={index} className="dark:text-white text-black text-sm md:text-xl lg:text-3xl`">{lang}</p>
                  )
                })}
              </div>
            </div>
            <div className="h-full flex items-center">
              <div className="hidden md:block md:items-center md:relative row-start-1 md:col-start-2 md:mx-auto h-[50%] w-[50%] md:mt-32 landscape:mt-0 xsmH:h-[60%] xsmH:w-[50%] smH:h-[70%] smH:w-[70%] lg:w-[80%] lg:h-[80%] 2xl:w-[70%] 2xl:h-[70%]">
                <Image src={personalimage} alt="an image of the creator of the site" layout="responsive" placeholder="blur" className="rounded" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
