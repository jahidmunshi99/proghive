import Container from '../../../Components/Common/Container'
import SectionTitle from '../../../Components/Common/SectionTitle'
import SwiperTestimonial from '../../../Components/Common/SwiperTestimonial/SwiperTestimonial'





const Testimonial = () => {

  return (
    <div className='bg-slate-900'>
      <Container>
        <SectionTitle title={"Testimonial"}/>
        <SwiperTestimonial/>
      </Container>
    </div>
  )
}

export default Testimonial