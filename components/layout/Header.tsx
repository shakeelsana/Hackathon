import Link from "next/link";
import Logo from "/public/Logo.webp"
import Image from "next/image";
import {ShoppingCart} from "lucide-react";
import { Input } from "../../components/ui/input";
import { Search } from "lucide-react";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-8 py-6"> 
          <Image src={Logo} alt="logo" className="w-40" />
          <ul className="flex gap-x-10">
            <li className="text-lg"> <Link href={"/"}> Female </Link>  </li>
            <li className="text-lg"> <Link href={"/"}> Male </Link> </li>
            <li className="text-lg"> <Link href={"/"}> Kids </Link> </li>
            <li className="text-lg"> <Link href={"/"}> All Products </Link> </li>
          </ul>
         <div className="flex items-center"> <Search/> <Input type="search"  placeholder="Search Here"/>  </div> 
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"> <ShoppingCart/> </div>
         
       </div>
    )
}

export default Header;