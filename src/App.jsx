import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Landing from './pages/Home';
import LoaderAnimation from './components/Loader/animation';
import Contact from './pages/contact/Contact'
import Services from './pages/Service/Services';
import Featured from './pages/Featured/Featured';
import Footer from './pages/Footer/Footer';
import { Routes, Route, useNavigate } from "react-router-dom"
import Works from './pages/Portfolios/Works';



function App() {

  const navigate = useNavigate()



  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }

    )()
    navigate('/')
  }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
        {
          LoaderAnimation()
        }
      </AnimatePresence>
      <Header />
      <Routes>
        {/* Landing */}
        <Route path='/' element={
          <>
            <Landing />
            <Services />
            <Featured />
          </>
        } />

        {/* Work */}
        <Route path='/works' element={<Works />} />

        {/* Contact */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
