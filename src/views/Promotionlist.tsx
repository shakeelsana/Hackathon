import E1 from '/public/event1.webp';
import E2 from '/public/event2.webp';
import E3 from '/public/event3.webp';
import Image from 'next/image';
import React from 'react';

const Promotionlist = () => {
  return (
    <section>
      <div className="mt-10">
        <h2 className="text-center">Promotions</h2>
        <h3 className="text-4xl font-bold text-center">Our Promotions Events</h3>

        <div className='flex justify-center'>
        <div className="grid justify-start grid-rows-2 mt-8">
          <div className="flex flex-col p-2 bg-gray-200 bg-center"> {/* Modified: Reduced padding */}
            <div className="flex flex-row">
              <div className="w-1/2 p-8 text-center">
                <h4 className="text-xl font-semibold">GET UP TO 60%</h4>
                <p>For the summer season</p>
              </div>
              <div className="flex justify-start w-1/2">
                <Image src={E1} alt="Promotion 1" width={300} height={200} />
              </div>
              
            </div>
          </div>
          <div className="p-8 mt-4 bg-blue-200 "> {/* Added: Separate box with different color */}
          <h3 className="text-xl font-semibold text-center">GET 30% OFF</h3>
          <p className='mt-2 text-center'>Details of the additional promotion</p>
          <div className='mt-2'>
          <button className="px-40 py-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
  DINE WEEKEND SALE </button></div>
          </div> 
        </div> 

          
        <div className="flex justify-start mt-8">
          <div className="flex flex-col p-8 ml-8 bg-gray-200">
            <h4 className="text-xl font-semibold">Flex Sweatshirt</h4>
            <p>  <span style={{ textDecoration: 'line-through' }}>$100.00</span>&nbsp;&nbsp;
            <span>$75.00</span> </p>

            <Image src={E2} alt="Promotion 2" width={300} height={200} />
          </div>

          <div className="flex flex-col p-8 ml-8 bg-gray-200">
            <h4 className="text-xl font-semibold">Flex Push Button Bomber</h4>
            <p>  <span style={{ textDecoration: 'line-through' }}>$225.00</span>&nbsp;&nbsp;
            <span>$190.00</span> </p>
            
            <Image src={E3} alt="Promotion 3" width={300} height={200} />
          </div>
        </div> </div>
       
        <div className="mt-8"></div>
      </div>
    </section>
  );
};

export default Promotionlist;
	