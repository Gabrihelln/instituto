import React, {useState} from 'react';
import { AiOutlinecloce } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import UserProfile from '../assets/profile.png' 
import Logo from './Logo';
import ThemeSwitch from './Swtich';

const Navbar = () => {
    const user = {}
    const [showProfile, setShowProfile] = useState(false)
  
    return (
    <div className='flex flex-col md:flex-row w-full py-5 items-center justify-between gap-4 md:gap-0'>
        <div className='flex gap-2 text-[20px] md:hidden lg:flex'>
            <Link to='/' className='text-blue-600'>
                <FaYoutube/>
            </Link>
            <Link to='/' className='text-blue-600'>
                <FaFacebook/>
            </Link>
            <Link to='/' className='text-blue-600'>
                <FaInstagram/>
            </Link>
            <Link to='/' className='text-blue-600'>
                <FaTwitterSquare/>
            </Link>
        </div>
        <Logo/>
        <div className='hidden md:flex gap-14 items-center'>
            <ul className='flex gap-8 text-base text-black dark:text-white'>
                <Link to='/'>Início</Link>
                <Link to='/'>Contatos</Link>
                <Link to='/'>Sobre</Link>
            </ul>
            {/* Theme switch */}
            <ThemeSwitch/>
        </div>
    </div>
  )
}

export default Navbar