import React from 'react'

const ServiceItem = ({itemPosition, sIcon, sType, sDetails}) => {
  return (
    <>
       <div className="flex flex-col md:justify-between px-4 py-10">
            <div className="relative w-full flex items-center flex-col space-y-12">
            
                {/* Website Development - Left */}
                <div className={`relative ${itemPosition} text-white p-6 shadow-lg md:w-[55%] gradient-border`}>
                    <div className="flex items-center space-x-3">
                    <span className="text-blue-400 text-2xl">{sIcon}</span>
                    <div className="text-2xl font-semibold">{sType}</div>
                    </div>
                    <p className="pt-4 text-gray-400">{sDetails}</p>
                </div>
            </div>
       </div>
    </>
  )
}

export default ServiceItem