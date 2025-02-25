import React from 'react'
import SectionTitle from '../../../Components/Common/SectionTitle'
import ServiceItem from '../../../Components/Common/ServiceItem'
import { MdDeveloperBoard } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaWordpress } from "react-icons/fa";
import Container from '../../../Components/Common/Container';

const ServiceSection = () => {

  const wordpressDetails = "I create websites based on your ready-made design. Whether it's landing page or a business card website. I will make it look great and work smoothly on any device"


  return (
    <div className='bg-gray-800'>
      <Container>
        <div className='relative'>
          <SectionTitle title="My Service"/>
          {/**WebDevelopmen Service */}
          <ServiceItem
            itemPosition={'self-start'}
            sIcon={<MdDeveloperBoard />}
            sType={'Web Development'}
            sDetails={wordpressDetails}
          />
          {/* Vertical Connecting Line */}
          <div className="absolute md:left-1/2 md:top-[305px] md:h-[80px] w-0.5 bg-gray-700 hidden md:block"></div>
          
          {/**WebDesign Service */}
          <ServiceItem
            itemPosition={'self-end'}
            sIcon={<HiOutlinePencilSquare />}
            sType={'Web Design'}
            sDetails={wordpressDetails}
          />
          {/* Vertical Connecting Line */}
          <div className="absolute md:left-1/2 md:bottom-[186px] md:h-[80px] w-0.5 bg-gray-700 hidden md:block"></div>
          
          {/**WebDesign Service */}
          <ServiceItem
            itemPosition={'self-start'}
            sIcon={<FaWordpress />}
            sType={'WordPress Development'}
            sDetails={wordpressDetails}
          />
        </div>
      </Container>
    </div>
  )
}

export default ServiceSection

