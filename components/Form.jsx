import React from 'react'

const Form = () => {
  return (
    <div className='sm:p-20 p-2 bg-img1 flex flex-wrap sm:py-20 py-10'>
        <div className="sm:w-[60%] sm:p-[130px]">
            <p className="sm:text-5xl text-3xl text-white sm:text-left text-center">Discover the versatility  of our Net Zero Karo Academy</p>
            <p className="text-white mt-10 sm:text-left text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio ligula. Aenean eu urna a leo interdum venenatis. Suspendisse potenti. Vivamus id magna ac dui fringilla pharetra quis vitae mauris. </p>
        </div>
        <div className='sm:w-[40%] max-w-full'>
            <div className="bg-white rounded-lg sm:p-14 p-4">
                <p className="text-center text-green  text-2xl">Send Us Your Message</p>
                <p className="mt-2 text-center">Help your organisation get to Net Zero, faster!</p>
                <form action="" className='flex  sm:items-center flex-col'>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor="" className='w-full text-sm m-2'>First Name</label>
                        <input type="text" name="" id="" placeholder='Name' className='border-black outline-none border-[1px] p-4 rounded-lg md:w-[350px] w-full min-h-[50px]'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="" className='w-full text-sm m-2'>First Name</label>
                        <input type="text" name="" id="" placeholder='Name' className='outline-none border-[1px] p-4 rounded-lg md:w-[350px] w-full min-h-[50px]'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="" className='w-full text-sm m-2'>First Name</label>
                        <input type="text" name="" id="" placeholder='Name' className='outline-none border-[1px] p-4 rounded-lg md:w-[350px] w-full min-h-[50px]'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="" className='w-full text-sm m-2'>First Name</label>
                        <input type="text" name="" id="" placeholder='Name' className='outline-none border-[1px] p-4 rounded-lg md:w-[350px] w-full min-h-[50px]'/>
                    </div>
                    <button className="rounded-full bg-green text-white sm:px-12 px-6 text-lg py-3 mt-10">Let’s Connect Together</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Form