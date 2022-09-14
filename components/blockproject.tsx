import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";

const Blockproject = ({dark, image, title, explanation, altImage} : {dark: boolean, image: any, title: string, explanation: string, altImage: string}) => {
    return(
        <section className="grid grid-cols-1 grid-rows-3 gap-4 ipadMini:grid-rows-3 ipadMini:grid-cols-none landscape:grid-cols-3 landscape:grid-rows-none space-x-4 mb-16 items-center justify-center">
            <div className="landscape:col-start-1 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 ipadMini:row-start-1 ipadMini:row-end-2 row-start-1 row-end-3 grid grid-rows-1 pb-4">
                <div>
                    <div className="flex justify-between items-center pb-2">
                        <h3 className={`${dark? 'text-lightblue' : 'text-green'} text-xl md:text-3xl w-1/2`}>{title}</h3>
                        <div className="!ml-0"><Link href={`${title.replace(/\s/g, '').toLowerCase()}`}><button className={`${dark? 'text-lightblue' : 'text-green'} text-lg dark:bg-darkgray bg-lightgray p-2 rounded hover:dark:bg-lightblue hover:bg-green hover:text-white`}>Read more</button></Link></div>
                    </div>
                    <p className={`${dark? 'text-white' : 'text-black'} text-lg`}>{explanation}</p>
                </div>
                {/* <div><Link href={{pathname:`/detailProject/${title}`, query: { photo: image }}}><button className={`${dark? 'text-lightblue' : 'text-green'} text-lg underline text-start`}>Read more</button></Link></div> */}
            </div>
            <div className="!ml-0 landscape:col-start-3 landscape:col-end-4 landscape:row-start-1 landscape:row-end-2 ipadMini:row-start-2 ipadMini:row-end-5 ipadAir:col-start-1 ipadAir:col-end-1 row-start-3 2xl:w-[500px] relative w-30 h-30">
                <Image src={image} alt={altImage} layout="responsive" placeholder="blur" objectFit="cover" className="rounded"/>
            </div>
        </section>
    )
}

export default Blockproject