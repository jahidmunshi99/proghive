import React from 'react'
import Button from '../../../Components/Common/Button/Button'
import TextTyping from '../../../Components/TypeAnimation/TextTyping'
import Container from '../../../Components/Common/Container'



const HeroSection = () => {

  return (
    <div className='bg-slate-900'>
      <Container>
        <div className="min-h-80 border-amber-100 pt-10">
          <div className='md:flex flex-col-2 justify-between md:items-center p-5 md:flex-row-reverse'>
            <div className="mockup-code md:w-xl">
              <pre data-prefix="$"><code>npm i daisyui</code></pre>
            </div>

            <div className='text-white md:mr-28'>
              <div className='text-6xl uppercase gradient-text'><TextTyping/></div>
              <div className='text-6xl uppercase py-4'>Developer</div>
              <div className='text-2xl my-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quo illo ea quod.</div>
              <div className='mt-15'><Button btntxt="View My Work"/></div>
            </div>
          </div>
        </div>
      </Container> 
    </div>
  )
}

export default HeroSection