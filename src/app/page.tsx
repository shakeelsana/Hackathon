import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import { Button } from "../../components/ui/button"
import Hero from "@/views/Hero"
import { Badge } from 'components/ui/badge'
import Productlist from '@/views/Productlist'
import Promotionlist from '@/views/Promotionlist'
import Vintage from '@/views/Vintage'
import Newsletter from '@/views/Newsletter'


export default function Home() {
  return (
   <div>
    <Hero />
    {/* Promotion List */}
    <Promotionlist/>
    {/* Products */}
     <Productlist/>
    {/* Vintage */}
    <Vintage/>
    {/* Newsletter */}
    <Newsletter/>
 
    </div>
  )
}
