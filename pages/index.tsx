import Image from '../node_modules/next/image'
import personalimage from '../public/personalimage.jpg';
import Header from '../components/header'
import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState<boolean>()

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
        <main className="font-montserrat pt-0 mx-8 space-y-4 h-screen pb-16">
          <section className="smH:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none h-full grid justify-center">
            <div className="md:col-start-1 md:px-4 text-center landscape:py-12 portrait:py-40 md:py-40 my-auto">
              <div className="xsmH:mb-2 mb-0">
                <h1 className="dark:text-lightblue text-green text-3xl md:text-5xl pb-4">Toby Bostoen</h1>
                <h2 className="dark:text-white text-black text-xl md:text-3xl leading-normal">Full-stack Web Developer<br />Based in Belgium</h2>
              </div>
              <div className="lg:pt-12 dark:text-white text-black grid grid-rows-3 grid-cols-4 landscape:lg:grid-rows-3 landscape:lg:grid-cols-4 portrait:lg:grid-rows-4 portrait:lg:grid-cols-3 gap-x-4 items-end space-y-4">
                {languages.map((lang, index) => {
                  return(
                    <div className="p-2 dark:bg-darkgray bg-lightgray rounded">
                      {lang == 'C#'? (
                        <i className="devicon-csharp-plain text-xl lg:text-3xl dark:text-lightblue text-green"></i>
                      ): (
                        <i className={`devicon-${lang.toLocaleLowerCase()}-plain text-xl lg:text-3xl dark:text-lightblue text-green`}></i>
                      )}
                      <p key={index} className="dark:text-white text-black text-base landscape:text-sm landscape:md:text-sm landscape:lg:text-sm landscape:xl:text-lg md:text-xl lg:text-3xl`">{lang}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="h-full grid grid-cols-1 items-center justify-center">
              <div className="hidden lg:block md:items-center md:relative col-start-1 row-start-1 md:col-start-1 md:mx-auto w-[50%] landscape:mt-0 xsmH:w-[80%] smH:w-[70%] lg:w-[80%] 2xl:w-[70%]">
                <Image src={personalimage} alt="an image of the creator of the site" layout="responsive" placeholder="blur" className="rounded" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
