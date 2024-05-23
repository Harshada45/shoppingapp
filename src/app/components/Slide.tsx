import React from 'react'


interface propsType{
    img:string;
    title:string;
    mainTitle:string;
    price:string;
}
const Slide:React.FC<propsType> = ({img,title,mainTitle,price}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%]-translate-y[50%] space-y-2 lg:space-y-4 bg-[#ffffff] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-lg sm:rounded-none' >
            <h3 className='text-accent-text-[2]'>{title}</h3>
            
            <h2 className='text-blackish text-[26px] md:text-[30px] lg-text-[44px] font-bold leading [1.2]'>{mainTitle}</h2>

             <h3 className='text-[24px] text-gray-500'>starting at <b className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</b></h3>

             <div className='bg-accent text-white text-[14px] md:text-[16px] p-2 px-2 rounded-lg inline-block cursor-ointer hover:bg-blackish'>Shop Now</div>
             </div>
    
        
        </div>
  )
}

export default Slide