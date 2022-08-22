import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import Logo from '../assets/2x/Asset2@2x.png';

export default function about () {
    return(
        <div className="bg-gradient-to-r from-white via-lightgray to-silver h-screen w-screen">
            <header className="flex items-center justify-between mx-8 pt-4 font-montserrat">
                <Image src={Logo} layout="fixed"/>
                <div className="flex flex-row space-x-6">
                <Link href="/"><p>Home</p></Link>
                <Link href="/projects"><p>Projects</p></Link>
                <Link href="/about"><p>About</p></Link>
                </div>
                <Link href="/contact"><button className="p-1 border border-darkgray bg-darkgray rounded">Contact</button></Link>
            </header>
            <main className="mt-12 font-montserrat mx-8">
                <h1 className="text-4xl font-bold">About me</h1>
                <p>Toby Bostoen is a passionate frontend developer based in Belgium. He is a final year student MCT at Howest Kortrijk.</p>
                <p>Toby is a person who likes to know how things were build and programmed. Sometimes he's thinking about how some things can be improved and be made even faster. His strong points are that he likes to stay open minded about newer technologies and he likes to learn more every day. Sitting still isn't something he likes to do because he wants to be productive throughout the day. Every human has some bad qualities and his are that he is not easily satisfied with the results. Everything must be worked out in the details.</p>
                <p>On this website you'll get to see my improvements and some of my projects throughout my course of learning and developing. Hopefully you'll get inspired to improve yourself and your knowledge and maybe we can even collaborate on some projects.</p>
                <p>You can always contact me with questions.</p>
            </main>
        </div>
    )
}