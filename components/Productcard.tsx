import React from 'react'
import Image,{StaticImageData} from 'next/image'
import P1 from '/public/p1.webp'
import { title } from 'process'

function Productcard(props:{title:string, price:number, img: StaticImageData}) {
 
  return (
    <div>
          <Image src={props.img} alt='product1' />
            <h3 className='mt-3 text-lg font-bold'> {props.title} </h3>
            <p className='text-lg font-bold'> ${props.price} </p>
    </div>
  )
}

export default Productcard