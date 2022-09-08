import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar.js'
import Header from '../Components/Headers.js'
import ProfileCards from '../components/ProfileCards.js'
import NftCards from '../components/NftCardsSection.js'
import CardsCarousel from '../components/CardCarousel.js'
import Footer from '../components/Footer.js'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Theme</title>
        <link rel="icon" href="/logo.png" />
      </Head>

    <Navbar />
    <Header/>
    <ProfileCards />
    <NftCards />
<CardsCarousel />
<Footer />
    </div>
  )
}

export default Home
