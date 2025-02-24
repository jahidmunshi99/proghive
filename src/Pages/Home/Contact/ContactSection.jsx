import React from 'react'
import Container from '../../../Components/Common/Container'

const ContactSection = () => {
  return (
    <div className='bg-slate-900'>
      <Container>
        <div className="text-white flex items-center justify-center px-6 border-0 border-t-2 border-amber-100">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
            
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                  DO YOU HAVE A PROJECT TO DISCUSS?
                </span>
              </h2>
              <p className="text-lg flex items-center gap-2">
                GET IN TOUCH <span>💬</span>
              </p>
              
              {/* Contact Email */}
              <div className="mt-6">
                <p className="text-gray-400 uppercase text-sm mb-2">Contact</p>
                <a href="mailto:web.smm.zty@gmail.com" className="text-blue-400 hover:underline">
                  web.smm.zty@gmail.com
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <p className="text-gray-400 uppercase text-sm mb-2">Social Media</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">🔗</a>
                  <a href="#" className="text-gray-300 hover:text-white">📘</a>
                  <a href="#" className="text-gray-300 hover:text-white">📸</a>
                  <a href="#" className="text-gray-300 hover:text-white">📱</a>
                  <a href="#" className="text-gray-300 hover:text-white">✈️</a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CONTACT FORM</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full bg-[#161A2B] text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-blue-500 transition" />
                <input type="email" placeholder="Email" className="w-full bg-[#161A2B] text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-blue-500 transition" />
                <textarea placeholder="Message" rows="4" className="w-full bg-[#161A2B] text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-blue-500 transition"></textarea>
                
                <button className="w-[120px] py-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-md text-white font-semibold relative shadow-lg hover:opacity-80 transition">
                  SEND
                </button>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactSection