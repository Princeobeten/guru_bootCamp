import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col items-start 
        justify-center gap-12'>
          <h2 className='bold-32 lg:bold-40 xl:mx-w-[320px]'>
            Get the Guru BootCamp App
          </h2>
          <p className='regular-14 text-green-50'>
            Download our app now and embark on your journey to become a 
            skilled software developer!'
            <p className='pt-4 regular-16 text-gray-10'>
            Avaliable on ios and Android
            </p>
          </p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button type='button' tittle='App Store' 
            icon='/apple.svg' variant='btn_white' full
            className='hover:border-green-50 hover:bg-green-90'/>
            <Button type='button' tittle='Play Store' 
            icon='/android.svg' variant='btn_dark_green_outline' full
            className='hover:border-green-50 hover:bg-green-50'/>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <Image src="/phones.png" alt='phones' width={550} height={870}/>
        </div>
      </div>
    </section>
  )
}

export default GetApp
