import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ContactForm from '../components/ContactForm/ContactForm'

const page = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default page
