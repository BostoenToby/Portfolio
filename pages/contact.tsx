import { useState } from "react";
import Header from "../components/header";

export default function Contact () {
    const [dark, setDark] = useState<boolean>()

    return(
        <div className={`h-screen ${dark? 'bg-black': 'bg-white'}`}>
            <Header setDark={setDark} dark={dark}/>
            <main className="font-montserrat flex items-center justify-center space-x-20 mt-4 md:mt-16 h-[70vh] mx-8 flex-col lg:flex-row">
                <section className="mb-8 mt-32 md:mt-0 lg:-mb-0">
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl md:text-5xl mb-4`}>Don't hessitate, go ahead<br />and contact me</h1>
                    <p className={`text-base ${dark? 'text-white' : 'text-black'}`}>Send me directly <span className="font-bold text-green cursor-pointer">here</span> or use the form on the right</p>
                </section>
                <section className="flex flex-col space-y-4 !-ml-0 lg:!ml-4 md:w-1/2">
                    <div className="flex space-x-4">
                        <input type="text" placeholder="Full name" className={`p-2 md:p-4 w-5/6 md:w-full rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                        <input type="text" placeholder="Subject" className={`p-2 md:p-4 w-5/6 md:w-full rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    </div>
                    <input type="text" placeholder="Email address" className={`p-2 md:p-4 rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    <textarea name="message" id="message" cols={10} rows={7} placeholder="Message" className={`p-4 resize-none rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    <button className={`px-4 py-2 md:py-6 md:px-16 text-white bg-green rounded`}>Send message</button>
                </section>
            </main>
        </div>
    )
}