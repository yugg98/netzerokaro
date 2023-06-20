import React from 'react'

const Heading = ({text,color}) => {
  return (
    <div>
        {color ?
        <p className={`sm:text-5xl text-3xl text-center pt-6 font-semibold text-white text-[${color}] `}>{text}</p>
        :
        <p className={`sm:text-5xl text-3xl text-center pt-6 font-semibold text-green `}>{text}</p>}
    </div>
  )
}

export default Heading