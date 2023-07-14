import Image from 'next/image';
import { NavLinks } from '@/constants';
import Link from 'next/link';
import logo from './../public/logo-2.png'

const Navbar = () => {
    return (
       <nav className='flexBetween navbar text-color'>
            <div className='flex-1 flexStart gap-10'>
                <Link href='/'>
                    <Image 
                    src={logo}
                    width={130}
                    height={43}
                    alt='Todo'
                    />
                </Link>
            </div>
            <ul className='xl:flex hidden flexBetween'>
                    {NavLinks.map((link) => 
                      (  <Link href={link.href}>
                        {link.text}
                        </Link>)
                    )}
            </ul>
       </nav>
    );
};

export default Navbar;