import React from 'react'

const Form = () => {
  return (
    <div className='p-20 bg-img1 flex'>
        <div className="w-[70%] p-[130px]">
            <p className="text-5xl text-white">Discover the versatility  of our Net Zero Karo Academy</p>
            <p className="text-white mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at odio ligula. Aenean eu urna a leo interdum venenatis. Suspendisse potenti. Vivamus id magna ac dui fringilla pharetra quis vitae mauris. </p>
        </div>
        <div className=''>
            <div className="bg-white rounded-lg p-12">
                <p className="text-center text-green  text-2xl">Send Us Your Message</p>
                <p className="mt-2 text-center">Help your organisation get to Net Zero, faster!</p>
                <form action="" className='flex  items-center flex-col'>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor="" className='w-full text-sm m-2'>First Name</label>
                        <input type="text" name="" id="" placeholder='Name' className='border-black outline-none border-[1px] p-4 rounded-lg min-w-[350px] min-h-[50px]'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="" className='w-full text-sm m-2'>First Name</label>
                        <input type="text" name="" id="" placeholder='Name' className='outline-none border-[1px] p-4 rounded-lg min-w-[350px] min-h-[50px]'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="" className='w-full text-sm m-2'>First Name</label>
                        <input type="text" name="" id="" placeholder='Name' className='outline-none border-[1px] p-4 rounded-lg min-w-[350px] min-h-[50px]'/>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor="" className='w-full text-sm m-2'>First Name</label>
                        <input type="text" name="" id="" placeholder='Name' className='outline-none border-[1px] p-4 rounded-lg min-w-[350px] min-h-[50px]'/>
                    </div>
                    <button className="rounded-full bg-green text-white px-12 text-lg py-3 mt-10">Let’s Connect Together</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Form