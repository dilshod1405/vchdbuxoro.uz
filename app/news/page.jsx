import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsList from './NewsList'

const page = () => {
  return (
    <div>
      <Header />
      <NewsList />
      <Footer />
    </div>
  )
}

export default page
