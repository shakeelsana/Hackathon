import React from 'react'
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';

export const Newsletter = () => {
  return (
    <section className='flex justify-center'>
    <div className="mt-20 text-center">
    <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors scroll-m-20 first:mt-0">
    Subscribe Our Newsletter
    </h2>
    <p className="leading-7 [&:not(:first-child)]:mt-2">
    Get the latest information and promo offers directly
    </p>
    <div className="flex items-center w-full max-w-sm mt-5 space-x-2">
      <Input type="email" placeholder="Input Email Address" />
      <Button type="submit"> Subscribe  </Button>
    </div>
      
        <div className="mt-20 text-center"></div>
      </div>
      </section>

  )
}
export default Newsletter;