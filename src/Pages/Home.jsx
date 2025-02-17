import About from "../Components/About"
import Blog from "../Components/Blog"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Portfolio from "../Components/Portfolio"
import Skills from "../Components/Skills"
import SocialContacts from "../Components/SocialContacts"
import Testimonial from "../Components/Testimonial"
import BackToTop from "../Components/Utils/BackToTop"
import Footer from "../Components/Utils/Footer"
import LoadingEffect from "../Components/Utils/LoadingEffect"
import { useState,useEffect } from "react"

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);
  return (
    <div className="bg-neutral-900">
      {loading ? (
        <LoadingEffect/>
      ) : (
      <><Navbar /><Hero /><section id="about"><About /></section><section id="skills"><Skills /></section><section id="portfolio"><Portfolio /></section><Testimonial /><section id="contact"> <Contact /></section><section id="blog"><Blog /></section><SocialContacts /><Newsletter /><Footer /><BackToTop /></>
      )}
    </div>
  )
}

export default Home