import Image from '../node_modules/next/image'
import personalimage from '../public/personalimage.jpg';
import Header from '../components/header'
import { useState } from 'react';

export default function Home({darkParam} : {darkParam: boolean}) {
  const [dark, setDark] = useState<boolean>(darkParam)
  
  const languages = [
    "Javascript",
    "Typescript",
    "Python",
    "NextJS",
    "React",
    "Gatsby",
    "C#",
    "MySQL",
    "HTML5",
    "CSS3",
    "TailwindCSS"
  ]

  return (
    <div className={`${dark? 'dark': null}`}>
      <div className="h-screen overflow-x-hidden overflow-y-hidden z-0 dark:bg-black bg-white">
        <Header setDark={setDark} dark={dark} active="Home"/>
        <main className="font-montserrat pt-0 mx-8 space-y-4 pb-16 h-[calc(100vh-80px)] grid items-center grid-cols-none grid-rows-none">
          <section className="flex w-full mx-auto items-center justify-center xxsm:grid xxsm:grid-cols-none xxsm:grid-rows-5 phoneS20:grid-rows-5 landscape:grid-cols-2 landscape:grid-rows-none ipadMini:grid-rows-5 ipadMini:grid-cols-none next:grid-cols-2 next:grid-rows-none max-w-[1100px]">
            
            <div className="xxsm:row-start-3 xxsm:row-end-6 xxsm:pb-0 phoneS20:row-start-3 phoneS20:row-end-6 ipadMini:row-start-3 ipadMini:row-end-6 next:col-start-1 next:row-start-1 text-center h-full flex flex-col items-center justify-center ipadMini:pb-20 surface:pb-40 landscape:col-start-1 landscape:row-start-1">
              <div className="mb-0 surface:pb-8">
                <h1 className="dark:text-lightblue text-green text-5xl phoneS20:text-2xl ipadMini:text-4xl surface:text-5xl pb-4 landscape:text-xl landscape:ipadMiniLand:text-4xl landscape:next:text-4xl">Toby Bostoen</h1>
                <h2 className="dark:text-white text-black text-xl phoneS20:text-xl md:text-3xl ipadMini:text-3xl surface:text-4xl leading-normal landscape:text-lg landscape:ipadMiniLand:text-3xl landscape:next:text-3xl">Full-stack Web Developer<br />Based in Belgium</h2>
              </div>
              <div className="dark:text-white text-black grid grid-rows-4 grid-cols-3 ipadMini:grid-rows-3 ipadMini:grid-cols-4 surfaceDuo:grid-rows-3 surfaceDuo:grid-cols-4 next:grid-rows-3 next:grid-cols-4 gap-x-4 items-end space-y-4">
                {languages.map((lang, index) => {
                  return(
                    <div key={index} className="p-2 phoneS20:p-1 ipadMini:p-3 landscape:p-1 landscape:ipadMiniLand:p-3 landscape:next:p-2 dark:bg-darkgray bg-lightgray rounded">
                      {lang == 'C#'? (
                        <i className="devicon-csharp-plain text-xl ipadMini:text-3xl surface:text-4xl landscape:hidden landscape:ipadMiniLand:block landscape:ipadMiniLand:text-3xl landscape:next:text-2xl landscape:next:block dark:text-lightblue text-green"></i>
                      ): (
                        <i className={`devicon-${lang.toLocaleLowerCase()}-plain text-xl ipadMini:text-3xl surface:text-4xl landscape:hidden landscape:ipadMiniLand:block landscape:ipadMiniLand:text-3xl landscape:next:text-2xl landscape:next:block dark:text-lightblue text-green`}></i>
                      )}
                      <p className="dark:text-white text-black text-sm phoneS20:text-sm ipadMini:text-xl surface:text-2xl landscape:text-xs landscape:ipadMiniLand:text-base landscape:next:text-base">{lang}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="xxsm:row-start-1 xxsm:row-end-3 ipadMini:row-start-1 ipadMini:row-end-3 next:col-start-2 next:row-start-1 grid items-center justify-center grid-cols-none grid-rows-none h-full surfaceDuo:pb-4 landscape:col-start-2 landscape:row-start-1">
              <div className="hidden xxsm:block w-60 h-60 md:items-center relative phoneS20:w-80 phoneS20:h-80 ipadMini:w-[380px] ipadMini:h-[380px] ipadMini:pt-4 ipadAir:w-[600px] ipadAir:h-[600px] surface:w-[600px] surface:h-[600px] next:h-[400px] next:w-[400px] landscape:next:w-[450px] landscape:next:h-[450px]">
                <Image src={personalimage} alt="an image of the creator of the site" layout="responsive" placeholder="blur" className="rounded" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
