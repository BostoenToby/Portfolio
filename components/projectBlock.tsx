import { useEffect } from "react";
import Image from "../node_modules/next/image";
import computer from '../public/computer.webp';
import personal from '../public/personalImage.jpeg';

export default ({dark, image, title, explanation} : {dark: boolean, image: any, title: string, explanation: string}) => {
    return(
        <section className="grid grid-cols-3 space-x-4 mb-16">
            <div className="col-start-1 col-end-3 flex flex-col space-y-10">
                <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl`}>{title}</h3>
                <p className={`${dark? 'text-white' : 'text-black'} text-lg line-clamp-5`}>{explanation}</p>
                <button className={`${dark? 'text-lightblue' : 'text-green'} text-lg underline text-start`}>Read more</button>
            </div>
            <div className="col-start-3 col-end-4 relative w-30 h-30">
                <Image src={image} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
            </div>
        </section>
    )
}