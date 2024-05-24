import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
const data = async () => {
  const res = await fetch('http://localhost:3000/api/content')
}

  return (
    <section>
      <Navbar/>
      <h1>
      Latests Blog
      </h1>

    </section>
  )
}

export default page