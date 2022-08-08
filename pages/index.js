import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Vectorr</title>
        <meta name="description" content="Free vectors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#F5F5F7]'>
        <Navbar />
        <Hero />
        <Cards />
        <Footer />
      </div>
    </div>
  )
}
