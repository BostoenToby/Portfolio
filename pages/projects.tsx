import { useState } from "react"
import ProjectBlock from "../components/projectblock"
import Header from "../components/header"


export default function Projects () {
    const [dark, setDark] = useState<boolean>()

    const projects = [{
        title: "Cocktail Maker",
        explanation: "My first individual project for school was a cocktail maker. This was made in my first year of my bachelor course. I've used a Rasperrby Pi 4B and python to program the cocktail maker. On the screen there is a IP address displayed where you can surf to. If you load the webpage you'll see what cocktails are available and you're able to make these. There are also statistics about how much there is left of a certain drink, how hot the drinks are, how much a certain cocktail was asked in a period of time. You don't have to use the webpage to make cocktails because you can also press a button on the keypad to make a cocktail. The display shows different screens and each screen has different cocktails with the number displayed.",
        image: "cocktailmaker.jpg",
        alt: "image of the cocktailmaker"
    },
    {
        title: "Vital Cities Beweegscan",
        explanation: "My second big project was in my second year of my bachelor course MCT. We worked on a project for Vital Cities where they wanted an online tool for people where they could compare their city with others on certain aspects. The main goal of Vital Cities was to make people aware that the car doesn't need to be your first option to get around. They support people to go on walks, go cycling, use public transportation, ... Some examples of the aspects that you can compare on the online tool are: accessibility of playgrounds, enough options for public transport, ...",
        image: "vitalcities.png",
        alt: "logo of vital cities"
    },
    {
        title: "Portfolio",
        explanation: "In the summer of 2022 I've started this portfolio as a place to store my projects and to inspire others to expand their knowledge. My goal is to make a fun website that isn't boring to look at with a cool color palette and without the boring parts. In the future I'll maybe consider to change to another framework to make sure the user gets the best experience.",
        image: "personalprogrammer.jpg",
        alt: "an image of the creator of the site"
    }]

    return(
        <div className={`h-full ${dark? 'bg-black': 'bg-white'}`}>
            <Header setDark={setDark} dark={dark}/>
            <main className="font-montserrat mt-16 mx-8 pb-8">
                <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-5xl mb-8`}>Projects</h1>               
                {projects.map((project, index) => {
                    return(
                        <ProjectBlock dark={dark} key={index} image={require(`../public/${project.image}`)} title={project.title} explanation={project.explanation} altImage={project.alt}/>
                    )
                })}
            </main>
        </div>
    )
}