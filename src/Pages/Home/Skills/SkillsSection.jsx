import React from 'react'
import SectionTitle from '../../../Components/Common/SectionTitle'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNpmjsFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiWebpack } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import Container from '../../../Components/Common/Container';

const SkillsSection = () => {
  return (
    <div className='bg-slate-900'>
      <Container>
        <SectionTitle title={"Skills"}/>
          <div className='text-center text-amber-50 mt-5'>
          <div className='text-2xl'>The Skills Tools and technologies I use</div>
              <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-3xl mx-auto max-w-70 place-items-center">
                  <FaHtml5 />
                  <FaCss3Alt />
                  <IoLogoJavascript />
                  <RiTailwindCssFill />
                  <RiNpmjsFill />
                  <IoLogoFigma />
                  <FaReact />
                  <SiWebpack />
                  <FaGitAlt />
                  <FaWordpress />
                  <FaPhp />
                  <FaBootstrap />
              </div>
          </div>
      </Container>
    </div>

  )
}

export default SkillsSection