import Productcard from 'components/Productcard';
import P1 from '/public/p1.webp'
import P2 from '/public/P2.png'
import P3 from '/public/P3.png'
import Image from 'next/image';

const Productlist = () => {
    return (
       <section>
        <div className='flex justify-center'>
            <h2 className="text-center">Products</h2>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-center">Check What We Have</h3>
                      
       <div className='flex mt-16 justify-evenly'> 
         <Productcard title="Shirt" price={100} img={P1} />
         <Productcard title="Sweatshirt" price={200} img={P2} />
         <Productcard title="Jacket" price={1000} img={P3} />
        </div>
        </section>
        
    )
}
export default Productlist;