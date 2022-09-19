import { useEffect, useState } from "react"
import Header from "../components/header"
import cocktailmaker from '../public/cocktailmaker.jpg'
import vitalcities from '../public/vitalcities.png'
import personalprogrammer from '../public/personalprogrammer.jpg'
import Blockproject from "../components/blockproject"

export default function Projects () {
    const [dark, setDark] = useState<boolean>()
    const [height, setHeight] = useState<boolean>(false)

    useEffect(() => {
        const updateSize = () => {
            const contentHeight = document.getElementsByTagName("body")[0].clientHeight
            const contentRelativeHeight = contentHeight / window.innerHeight
            if(contentRelativeHeight <= 1){
                setHeight(true)
            } else {
                setHeight(false)
            }
        }
        updateSize()
        window.addEventListener("resize", updateSize)
    }, [])

    const projects = [{
        title: "Cocktail Maker",
        explanation: "My first individual project for school was a cocktail maker. I've used a Rasperrby Pi 4B and python to program the cocktail maker. On the screen there is a IP address displayed where you can surf to the webpage to order drinks and much more. You don't have to use the webpage to make cocktails because you can also press a button on the keypad to make a cocktail. The display shows different screens and each screen has different cocktails with the number displayed.",
        map: "public",
        image: "cocktailmaker",
        alt: "image of the cocktailmaker"
    },
    {
        title: "Vital Cities Beweegscan",
        explanation: "My second big project was in my second year of my bachelor course MCT. We worked on a project for Vital Cities where they wanted an online tool for people where they could compare their city with others on certain aspects. The main goal of Vital Cities was to make people aware that the car doesn't need to be your first option to get around. They support people to go on walks, go cycling, use public transportation, ...",
        map: "public",
        image: "vitalcities",
        alt: "logo of vital cities"
    },
    {
        title: "Portfolio",
        explanation: "In the summer of 2022 I've started this portfolio as a place to store my projects and to inspire others to expand their knowledge. My goal is to make a fun website that isn't boring to look at with a cool color palette and without the boring parts. In the future I'll maybe consider to change to another framework to make sure the user gets the best experience.",
        map: "public",
        image: "personalprogrammer",
        alt: "an image of the creator of the site"
    }]

    return(
        <div className={`${height? 'h-screen' : 'h-full'} ${dark? 'bg-black': 'bg-white'} ml-[100vw - 100%]`}>
            <Header setDark={setDark} dark={dark} active="Projects"/>
            <main className="font-montserrat mt-4 mx-8 pb-8">
                <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-5xl mb-8`}>Projects</h1>               
                {projects.map((project, index) => {
                    let image
                    switch(project.image) {
                        case "cocktailmaker":
                            image = cocktailmaker
                            break;
                        case "vitalcities":
                            image = vitalcities
                            break;
                        case "personalprogrammer":
                            image = personalprogrammer
                            break;
                    }
                    return(
                        <Blockproject dark={dark} key={index} image={image} title={project.title} explanation={project.explanation} altImage={project.alt}/>
                    )
                })}
            </main>
        </div>
    )
}