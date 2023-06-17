import React from 'react'
import Image from 'next/image'
import dinelogo from '/public/Logo.webp'

const Footer = () => {
  return (
  <div className='container mx-auto'>
      <footer className="py-10 text-white bg-slate-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                 
                 {/* Copyright */}
          <div className="col-span-2 md:col-span-1">
          <Image src={dinelogo} alt="dinelogo" className="w-40" />
            <p className="mt-4 text-xs">&copy; 2023 Copyright:
            <span className="font-bold"> Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</span>
              
            </p>
          </div>
          {/* Products */}
          <div>
            <h4 className="mb-4 font-bold">PRODUCTS</h4>
            <ul className="list-none">
              <li>Angular</li>
              <li>React</li>
              <li>Vue</li>
              <li>Laravel</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 font-bold">USEFUL LINKS</h4>
            <ul className="list-none">
              <li>Pricing</li>
              <li>Settings</li>
              <li>Orders</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold">CONTACT</h4>
            <p>New York, NY 10012, US</p>
            <p>info@example.com</p>
            <p>+ 01 234 567 88</p>
            <p>+ 01 234 567 89</p>
          </div>

     
        </div>
      </div>
    </footer>
      
  
    <div className='grid justify-between grid-cols-3'>
   <p className="p-10 text-sm text-muted-foreground">Copyright (c) 2023 Dine Market </p>

<div> <p className="p-10 text-sm text-muted-foreground"> Design by: Weird Design Studio </p> </div>
<div> <p className="p-10 text-sm text-right text-muted-foreground"> Code By: Sana Shakeel </p> </div>
    </div>
</div>
  )
}

export default Footer