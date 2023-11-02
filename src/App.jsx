import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Landing from './pages/Home';
import LoaderAnimation from './components/Loader/animation';
import Services from './pages/Service/Services';
import Featured from './pages/Featured/Featured';
import Footer from './pages/Footer/Footer';



function App() {




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
  }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
        {
          LoaderAnimation()
        }
      </AnimatePresence>
      
      <Header />
      <Landing />
      <Services />
      <Featured />
      <Footer />
    </>
  )
}

export default App
