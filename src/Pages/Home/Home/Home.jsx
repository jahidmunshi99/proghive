import ContactSection from "../Contact/ContactSection"
import Faq from "../Faq/Faq"
import HeroSection from "../HeroSection/HeroSection"
import PortfolioSection from "../Portfolio/PortfolioSection"
import ServiceSection from "../Service/ServiceSection"
import SkillsSection from "../Skills/SkillsSection"
import Testimonial from "../Testimonial/Testimonial"



const Home = () => {
  return (
    <>
      <HeroSection/>
      <ServiceSection/>
      <SkillsSection/>
      <PortfolioSection/>
      <Faq/>
      <Testimonial/>
      <ContactSection/>
    </>

  )
}

export default Home