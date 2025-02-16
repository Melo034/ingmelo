import About from "../Components/About"
import Blog from "../Components/Blog"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Portfolio from "../Components/Portfolio"
import Skills from "../Components/Skills"
import Testimonial from "../Components/Testimonial"
import BackToTop from "../Components/Utils/BackToTop"
import Footer from "../Components/Utils/Footer"

const Home = () => {
  return (
    <div className="bg-neutral-900">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Blog/>
    <Contact/>
    <Testimonial/>
    <Footer/>
    <BackToTop/>
  </div>
  )
}

export default Home