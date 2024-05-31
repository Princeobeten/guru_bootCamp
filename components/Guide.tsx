import Image from 'next/image'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image src="/camp.svg" alt='camp' width={50} height={50} />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>WE ARE HERE FOR YOU</p>
        
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
          Feeling lost in the tech landscape?</h2>
          <p className=' regular-16 lg:regular-20 2xl:regular-24 text-justify text-gray-30 xl:max-w-[520px]'>
            Joining a bootcamp can be your compass, guiding you along an easier path. With 
            structured learning and supportive mentors, you'll navigate through the complexities 
            of tech with confidence. Embrace the journey, and let the bootcamp illuminate your 
            way to success in the tech world.
          </p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image src="/boat.png" alt='boat' width={1440} height={508} 
        className='w-full object-cover object-center 2xl:rounded-5xl'/>
    
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image src='/meter.svg' alt='meter' width={16} height={158}
          className='h-full w-auto'/>
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='ml-5 bold-16 text-green-50'>3-6 months</p>
              </div>
              <p className='bold-20 mt-2'>Hero Developer</p>
            </div> 

             <div className='flex w-full flex-col'>
              <p className='regular text-gray-20'>Start track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Zero Developer</h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide