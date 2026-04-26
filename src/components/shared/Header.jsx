import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center pt-12.5 pb-7.5 space-y-3'>
            <Image 
            className='mx-auto'
            src={logo} height={60} width={471} alt='logo'></Image>
            <p className='text-[#706F6F] text-[18px]'>Journalism Without Fear or Favour</p>
            <p className='text-[20px] text-[#706F6F]'><span className='font-semibold text-[#403F3F]'>{format(new Date(), "EEEE")},</span> {format(new Date(), "MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;