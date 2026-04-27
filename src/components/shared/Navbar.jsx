import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png'
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-3 justify-items-center mt-8.5'>
            <div></div>
           <ul className='flex gap-6 items-center text-[#706F6F]'>
            <li><Navlink href={"/"}>Home</Navlink></li>
            <li><Navlink href={"/about"}>About</Navlink></li>
            <li><Navlink href={"/career"}>Career</Navlink></li>
           </ul>

           <div className='flex gap-4 items-center mt-5 md:mt-0'>
            <Image className='rounded-full' src={userAvater} height={'41px'} alt='user avater'></Image>
            <button className='btn px-10.5 bg-[#403F3F] text-white rounded-none'><Link href={"/login"}>Login</Link></button>
           </div>
        </div>
    );
};

export default Navbar;