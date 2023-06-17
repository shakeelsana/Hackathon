import React from 'react';
import V1 from '/public/p1.webp'
import Image from 'next/image';

const Vintage = () => {
  return (
    <section>
      <div className="mt-10 text-right">
        <h1 className="mt-6 text-2xl font-bold tracking-tight scroll-m-20 lg:text-4xl">
        Unique and Authentic <p className='mt-4'> Vintage Designer </p> <p className='mt-4'> Jewellery </p> </h1>
      </div>

      <div className="flex mt-8">
        <div className="grid grid-cols-5 gap-2 bg-gray-200">
          <div className="col-span-1 p-10 bg-gray-200 ">
            <h4 className="font-bold">Using Good Quality Materials</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> &nbsp; 
             <h4 className="font-bold">Modern Fashion Design</h4> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
          </div>
                   
          <div className="col-span-1 p-10 bg-gray-200">
            <h4 className="font-bold">100% Handmade Products</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> &nbsp; 
            
             <h4 className="font-bold">Discount for Bulk Orders</h4> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="col-span-1 p-4 bg-gray-200">
            <Image
              src={V1}
              alt="Vintage Jewelry"
              className="w-full h-auto"
            />
        </div>
        <div className="col-span-2 p-10 bg-gray-200 ">
            <h4 className="font-bold">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</h4>
            
            <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              See All Products
            </button>
          </div>

        </div>
        
                  
      </div>

      <div className="mt-8"></div>
      
    </section>
  );
};

export default Vintage;
