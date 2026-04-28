'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png'
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user);
    

    return (
        <div className='container mx-auto grid md:grid-cols-3 justify-items-center mt-8.5'>
            <div></div>
           <ul className='flex gap-6 items-center text-[#706F6F]'>
            <li><Navlink href={"/"}>Home</Navlink></li>
            <li><Navlink href={"/about"}>About</Navlink></li>
            <li><Navlink href={"/career"}>Career</Navlink></li>
           </ul>

           {
            isPending? 
            <span className="loading loading-ring loading-sm"></span> :
            user ? 
            <div className=' md:flex gap-4 items-center mt-5 md:mt-0'>
            <h2 className='text[#403F3F] text-center font-semibold'>Hello, {user?.name}</h2>
            <div className='flex gap-4  items-center mt-5 md:mt-0'>
            <Image className='rounded-full' src={user?.image || userAvater} height={41} width={41} alt='user avater'></Image>
            <button 
            onClick={async() => await authClient.signOut()}
            className='btn px-10.5 bg-[#403F3F] text-white rounded-none'>Logout</button>
            </div>
           </div> : 

           <div className='flex items-center mt-5 md:mt-0'>
            <Link href={"/login"}>
            <button 
            className='btn px-10.5 bg-[#403F3F] text-white rounded-none'>Login</button>
            </Link>
            </div>
           }
        </div>
    );
};

export default Navbar;