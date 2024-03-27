import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Recipes from '../Components/Recipes'
import Footer from '../Components/Footer'

function Home() {
  return (
    <main className='w-full flex flex-col'>
      <Navbar/>
      <Header
      
      title={
        <p>
          Hello, world welcome <br/>
          to Kay-Tog
        </p>
      }
      type='home'

      />
      <section id='recipes' className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        <Recipes/>
      </section>
      <Footer/>
    </main>
  )
}

export default Home