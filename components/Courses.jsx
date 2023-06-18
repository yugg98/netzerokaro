import { Fragment } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import img1 from '@/assets/courses/img1.png';
export default function Courses() {
  return (
      <div className="mx-auto ">
        <div className="sm:p-8 p-2  shadow-lg linearbggreen rounded-lg">
          <div className="bg-white rounded-xl py-20">
          <h3 className="text-green text-5xl text-center text-gray-900 tracking-tight font-semibold mb-8">
          Our Tailored Courses for you          </h3>
          <Tab.Group >
            <Tab.List className="text-center  mb-4" >
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none my-2 "
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] "
                    }
                  >
                    Sustainability
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none "
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] "
                    }
                  >
                    Sustainability
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none "
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] "
                    }
                  >
                    Sustainability
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none "
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] "
                    }
                  >
                    Sustainability
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none "
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] "
                    }
                  >
                    Sustainability
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "px-5 py-3 rounded-full mr-4 bg-green text-white outline-none "
                        : "bg-white rounded-full mr-4 text-gray-600 px-5 py-3 border-green border-[1px] "
                    }
                  >
                    Sustainability
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels >
              <Tab.Panel>
               <div className="rounded-lg">
                    <div className="flex justify-center items-center flex-wrap mt-8">
                      <div className="max-w-[300px] mx-10 my-2 ">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2">Sustainability</p>
                        <p className="text-greyf text-lg text-center">An Introduction to Sustainability</p>
                      </div>
                      <div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2">Sustainability</p>
                        <p className="text-greyf text-lg text-center">An Introduction to Sustainability</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2">Sustainability</p>
                        <p className="text-greyf text-lg text-center">An Introduction to Sustainability</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2">Sustainability</p>
                        <p className="text-greyf text-lg text-center">An Introduction to Sustainability</p>
                      </div><div className="max-w-[300px] mx-10 my-2">
                        <Image src={img1}/>
                        <p className="text-sm text-center text-greyf mt-2">Sustainability</p>
                        <p className="text-greyf text-lg text-center">An Introduction to Sustainability</p>
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