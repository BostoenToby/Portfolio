import { useEffect } from "react";
import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import computer from '../public/computer.webp';
import personal from '../public/personalImage.jpeg';

const ProjectBlock = ({dark, image, title, explanation, altImage} : {dark: boolean, image: any, title: string, explanation: string, altImage: string}) => {
    return(
        <section className="flex flex-col md:grid md:grid-cols-3 space-x-4 mb-16">
            <div className="md:col-start-1 md:col-end-3 flex flex-col space-y-10">
                <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl`}>{title}</h3>
                <p className={`${dark? 'text-white' : 'text-black'} text-lg line-clamp-5`}>{explanation}</p>
                {/* <div><Link href={{pathname:`/detailProject/${title}`, query: { photo: image }}}><button className={`${dark? 'text-lightblue' : 'text-green'} text-lg underline text-start`}>Read more</button></Link></div> */}
                <div><Link href={`${title.replace(/\s/g, '').toLowerCase()}`}><button className={`${dark? 'text-lightblue' : 'text-green'} text-lg underline text-start`}>Read more</button></Link></div>
            </div>
            <div className="hidden md:block md:col-start-3 md:col-end-4 relative w-30 h-30">
                <Image src={image} alt={altImage} layout="fill" placeholder="blur" objectFit="cover" className="rounded"/>
            </div>
        </section>
    )
}

export default ProjectBlock