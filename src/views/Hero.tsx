import { Badge } from "components/ui/badge";
import { Button } from "../../components/ui/button"
import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import heroimage from '/public/header.webp'
import Featured1 from "/public/Featured1.webp"
import Featured2 from "/public/Featured2.webp"
import Featured3 from "/public/Featured3.webp"
import Featured4 from "/public/Featured4.webp"

const Hero = () => {
    return (
      <section className="flex flex-col py-6 lg:flex-row gap-y-10"> 
        {/* Left Section */}
    <div className='flex-1 m-6'>
     <Badge className='px-3 py-3 text-blue-600 bg-blue-200 rounded-lg'> Sale 70% </Badge>
         <h1 className="mt-6 text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
    An Industrial Take on Streetwear
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
    Anyone can beat you but no one can beat your
      <br/> outfit as long as you wear Dine outfits.
    </p>
    <Button className='px-6 py-5 mt-4 bg-black'> 
    <ShoppingCart className="w-4 h-4 mr-2" /> Start Shopping </Button>
    <div className="flex justify-between">
    <Image src={Featured1} alt="Featured1" className="flex mt-20"/>
    <Image src={Featured2} alt="Featured2" className="flex mt-20"/>
    <Image src={Featured3} alt="Featured3" className="flex mt-20"/>
    <Image src={Featured4} alt="Featured4" className="flex mt-20"/>
    </div>
    </div>
    
        {/* Right Section */}
        <div className="flex-1"> 
            <Image src={heroimage} alt='hero' />
        </div>
      </section>
    )
}
export default Hero;
