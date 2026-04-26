import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png'

const Navbar = () => {
    return (
        <div className='container mx-auto grid grid-cols-3 justify-items-center mt-8.5'>
            <div></div>
           <ul className='flex gap-6 items-center text-[#706F6F]'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/career"}>Career</Link></li>
           </ul>

           <div className='flex gap-4 items-center'>
            <Image src={userAvater} height={'41px'} alt='user avater'></Image>
            <button className='btn px-10.5 bg-[#403F3F] text-white rounded-none'><Link href={"/login"}>Login</Link></button>
           </div>
        </div>
    );
};

export default Navbar;