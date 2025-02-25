import Container from '../../../Components/Common/Container'
import SectionTitle from '../../../Components/Common/SectionTitle'
import SwiperTestimonial from '../../../Components/Common/SwiperTestimonial/SwiperTestimonial'





const Testimonial = () => {

  return (
    <div className='bg-slate-900'>
      <Container>
        <SectionTitle title={"Testimonial"}/>
        <div className='pt-8'><SwiperTestimonial/></div>
      </Container>
    </div>
  )
}

export default Testimonial