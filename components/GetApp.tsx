import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Experience Delight Now!</h2>
          <p className="regular-16 text-gray-10"> Enjoy exclusive offers and updates from our restaurant. Sign up for our newsletter to stay informed about special events, new menu items, and more. </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Reach us Today"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
           
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/greenwood_5.jpg" alt="phones" width={550} height={1000} className='rounded-xl h-auto w-[800px]' />
        </div>
      </div>
    </section>
  )
}

export default GetApp