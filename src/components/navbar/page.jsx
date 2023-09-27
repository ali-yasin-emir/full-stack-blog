'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";


const menu = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '/contact',
    name: 'Contact'
  },
  {
    link: '/about',
    name: 'About'
  },
  {
    link: '/login',
    name: 'Login'
  }
]

const Navbar = () => {

  // Sidemenu Functionality
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // DarkMode Functionality
  const {toggle, mode} = useContext(ThemeContext)

  // Sticky Navbar
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full p-4 z-10 scroll-smooth bg-transparent ${isNavbarFixed ? 'backdrop-filter backdrop-blur-lg transition-all duration-300' : ''}`}>
        <div className="max-container flex justify-between max-md:px-2">
        <div className="flex gap-4 max-md:hidden">
            <Link href='https://facebook.com'><Image src='/facebook.svg' alt="facebook icon" width={24} height={24} /></Link>
            <Link href='https://www.instagram.com'><Image className="rounded-full" src='/instagram.svg' alt="instagram icon" width={24} height={24} /></Link>
            <Link href='https://www.tiktok.com'><Image className="rounded-full p-1 bg-white" src='/tiktok.svg' alt="tiktok icon" width={24} height={24} /></Link>
            <Link href='https://www.youtube.com'><Image className="rounded-full p-1 bg-white" src='/youtube.svg' alt="youtube icon" width={24} height={24} /></Link>        
        </div>
            <Link href='/' className="text-xl max-md:text-lg">Reacton Blog</Link>
            <div className='flex gap-4'>
              <div onClick={toggle} className={`flex bg-slate-500 rounded-full border-2 px-1 border-black relative cursor-pointer items-center justify-between`}>
                <div className={`flex w-[18px] h-[18px] bg-slate-950 rounded-full absolute ${mode === 'dark' ? 'left-[6px]' : 'right-[6px]'}`}/>
                <div>🌙</div>
                <div>🔆</div>
              </div>
              <div className="max-md:hidden flex gap-6">
              {
              menu.map((item) => <Link href={item.link} key={item.name}>
                {item.name}
              </Link>)
              }
              </div>
            </div>
                <RxHamburgerMenu onClick={() => setIsSideMenuOpen(!isSideMenuOpen)} className="w-6 h-6 cursor-pointer hidden max-md:block z-20"/>
                  { isSideMenuOpen &&
                <div className="absolute top-0 right-0 w-1/2 h-screen hidden max-md:block bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-l-lg z-10">
  
                  <div className="pt-20 flex flex-col gap-4"> 
                {
                menu.map((item) => <Link className="items-center w-full p-4 hover:bg-gray-600 text-center hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg" href={item.link} key={item.name}>
                  {item.name}
                </Link>
                )
                }
              </div>
                </div>
              }
               </div>
        </div>
  )
}

export default Navbar