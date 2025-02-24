import React from 'react'
import SectionTitle from '../../../Components/Common/SectionTitle'
import Container from '../../../Components/Common/Container'

const Faq = () => {
  return (
    <div className='bg-slate-900'>
        <Container>
            <SectionTitle title={"FAQ"}/>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl text-white font-medium">Do You Offer WordPress Design and Development Services</div>
                    <div className="collapse-content bg-gray-600 text-white py-4">
                    <p>Yes, I provide all kind of web design and development Service</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl text-white font-medium">Click to open this one and close others</div>
                    <div className="collapse-content bg-gray-600 text-white">
                    <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl text-white font-medium">Click to open this one and close others</div>
                    <div className="collapse-content bg-gray-600 text-white">
                    <p>hello</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Faq