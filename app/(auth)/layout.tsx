import Image from 'next/image'
import React from 'react'

const LayoutSign = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
        <section className='bg-brand p-10'>
            <Image 
                src={"../favicon.ico"} 
                alt="logo" 
                height={16} 
                width={16} 
                className='auto'
            />

            <div className='space-y-5 text-white'>
                <h1 className='h1'>Manage your files the best way.</h1>
                <p className='body-1'>This is a place where you can store all your documents</p>
            </div>
        </section>
        {children}
    </div>
  )
}

export default LayoutSign