// import React from 'react'
import '../styles/home.css'



const Home = () => {
  return (
    <main className="px-5 grid md:grid-cols-2 md:grid-rows-2 xs:grid-rows-4">
      <section className="flex flex-col justify-around items-center gap-2 col-start-1 ">
        <h1 className='text-3xl'>Welcome to MeraVidya</h1>
        <p className='text-md color-mainGreen'>Your journey to knowledge starts here.</p>
        
      </section>
      <section className="features">
        <h2>Our Features</h2>
        <p>Explore the best courses and find the perfect tutor for you.</p>
      </section>
      {/* Add more sections as needed */}
    </main>
  )
}

export default Home