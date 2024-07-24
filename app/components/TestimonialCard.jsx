import React from 'react'
import Image from 'next/image'

const TestimonialCard = () => {
  return (
    <div className='bg-[#334d55] rounded-2xl px-5 py-7'>
        <div className='flex items-center gap-x-3'>
            <Image src="/images/team-1.jpg" width="72" height="72" alt='testimonial-profile' className='size-[4.5rem] object-cover rounded-full'/>
            <div>
                <h3 className='font-bold text-white font-base text-2xl'>Jenny Mendez</h3>
                <p className='text-white'>Manager at CCP</p>
            </div>
        </div>

        <div className='content-box'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

    </div>
  )
}

export default TestimonialCard