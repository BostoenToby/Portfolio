import Logo from '../assets/2x/Asset2@2x.png'
import personalImage from '../public/personalImage.jpeg'
import Link from '../node_modules/next/link'
import Image from '../node_modules/next/image'

export default function Home() {
  return (
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
      <main className="mx-8 mt-12">
        <section className="text-center flex justify-center items-center space-x-8">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold">Bostoen Toby</h1>
            <h3 className="text-3xl">Frontend Developer</h3>
            <h3 className="text-3xl">based in Belgium</h3>
          </div>
          <div>
            <Image src={personalImage} height="568" width="304"/>
          </div>
        </section>
      </main>
    </div>
  )
}
