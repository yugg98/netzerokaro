import { Fragment } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import img1 from '@/assets/courses/img1.png';
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import img from '@/assets/img4.png'

export default function Courses() {
  return (
      <div className="mx-auto ">
        <div className="sm:p-8 sm:pt-4 p-2   linearbggreen rounded-lg">
          <div className=" rounded-xl py-20 pt-4">
          <h3 className="text-green text-5xl text-center text-gray-900 tracking-tight font-semibold mb-8">
          Our Tailored Courses for you          </h3>
          <Tab.Group >
            <Tab.List className="text-center mb-4 flex justify-center items-center flex-wrap" >
              
            
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none my-2"
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] my-2"
                    }
                  >
                    Net Zero Essentials
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none my-2"
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] my-2"
                    }
                  >
                    Climate Change 101
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none my-2"
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] my-2"
                    }
                  >
                    ABCs of Circular Economy
                  </button>
                )}
              </Tab>
              
              <button className="md:block hidden bg-white rounded-full mr-4 text-gray-600 px-5 py-3 pt-0 border-green border-[1px] my-2"> <p className="text-[8px] text-[red]">Coming soon</p>
                    e-Mobility </button>
             
              <button className="md:block hidden bg-white rounded-full mr-4 text-gray-600 px-5 py-3 pt-0 border-green border-[1px] my-2"> <p className="text-[8px] text-[red]">Coming soon</p>
              Green Digitization </button>
            </Tab.List>
            <Tab.Panels >
              <Tab.Panel>
               {/* <div className="rounded-lg">
                    <div className="flex justify-center items-center flex-wrap mt-8">
                      <div className="max-w-[300px] mx-10 my-2 ">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Net Zero Essentials</p>
                        <p className="text-greyf text-lg text-center">Energy Transition and Renewable Energy Solutions</p>
                      </div>
                      <div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Net Zero Essentials</p>
                        <p className="text-greyf text-lg text-center">Carbon Accounting and Reporting</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Net Zero Essentials</p>
                        <p className="text-greyf text-lg text-center">Sustainable Transportation and Mobility</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Net Zero Essentials</p>
                        <p className="text-greyf text-lg text-center">Building and Infrastructure Sustainability</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Net Zero Essentials</p>
                        <p className="text-greyf text-lg text-center">Supply Chain Sustainability and Green Procurement</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Net Zero Essentials</p>
                        <p className="text-greyf text-lg text-center">Climate Risk Assessment and Resilience Planning</p>
                      </div>
                    </div>
               </div> */}
               <div className="w-full flex flex-wrap p-10  pb-10 mt-10">
                <motion.div className="sm:w-1/2 " variants={slideIn('left', 'tween', 0.1, 1)} initial="hidden" whileInView="show">
                    <Image src={img} className='md:max-w-[80%]  mx-auto rounded-2xl' />
                </motion.div>
                <div className="sm:w-1/2 sm:px-10 px-2 sm:pt-0 flex   flex-col">
                    <p className="text-green sm:text-3xl text-2xl   text-center sm:text-left ml-2 md:mt-0 mt-4">Net Zero Essentials</p>
                    <ol className="list-decimal course-list mt-4 mx-4">
                      <li>Energy Transition and Renewable Energy Solutions</li>
                      <li>Energy Transition and Renewable Energy Solutions</li>
                      <li>Energy Transition and Renewable Energy Solutions</li>
                      <li>Energy Transition and Renewable Energy Solutions</li>
                      <li>Energy Transition and Renewable Energy Solutions</li>
                      <li>Energy Transition and Renewable Energy Solutions</li>
                    </ol>
                </div>
            </div>
              </Tab.Panel>
              <Tab.Panel>
               <div className="rounded-lg">
                    <div className="flex justify-center items-center flex-wrap mt-8">
                      <div className="max-w-[300px] mx-10 my-2 ">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Climate Change 101</p>
                        <p className="text-greyf text-lg text-center">1.Fundamentals of Climate Change Science</p>
                      </div>
                      <div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Climate Change 101</p>
                        <p className="text-greyf text-lg text-center">2.Climate Policy and International Agreements</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Climate Change 101</p>
                        <p className="text-greyf text-lg text-center">3.Mitigation Strategies and Carbon Footprint Reduction</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Climate Change 101</p>
                        <p className="text-greyf text-lg text-center">4.Adaptation and Resilience Planning</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Climate Change 101</p>
                        <p className="text-greyf text-lg text-center">5.Sustainable Practices for Individuals and Organizations</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> Climate Change 101</p>
                        <p className="text-greyf text-lg text-center">6.Climate Communication and Advocacy</p>
                      </div>
                    </div>
               </div>
              </Tab.Panel>
              <Tab.Panel>
               <div className="rounded-lg">
                    <div className="flex justify-center items-center flex-wrap mt-8">
                      <div className="max-w-[300px] mx-10 my-2 ">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> ABCs of Circular Economy</p>
                        <p className="text-greyf text-lg text-center">1.Introduction to Circular Economy Principles</p>
                      </div>
                      <div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> ABCs of Circular Economy</p>
                        <p className="text-greyf text-lg text-center">2.Designing for Circular Economy</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> ABCs of Circular Economy</p>
                        <p className="text-greyf text-lg text-center">3.Circular Supply Chain Management</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> ABCs of Circular Economy</p>
                        <p className="text-greyf text-lg text-center">4.Waste Reduction and Resource Recovery</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> ABCs of Circular Economy</p>
                        <p className="text-greyf text-lg text-center">5.Circular Business Models and Innovation</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2"> ABCs of Circular Economy</p>
                        <p className="text-greyf text-lg text-center">6.Circular Economy in Practice: Case Studies and Best Practices </p>
                      </div>
                    </div>
               </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          </div>
        </div>
    </div>
  );
}