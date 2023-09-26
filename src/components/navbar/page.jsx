'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


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



  return (
    <div className="bg-slate-400 w-full p-4">
        <div className="max-container flex justify-between max-md:px-2">
        <div className="flex gap-4 max-md:hidden">
            <Link href='https://facebook.com'><Image src='/facebook.svg' alt="facebook icon" width={24} height={24} /></Link>
            <Link href='https://www.instagram.com'><Image className="rounded-full" src='/instagram.svg' alt="instagram icon" width={24} height={24} /></Link>
            <Link href='https://www.tiktok.com'><Image className="rounded-full p-1 bg-white" src='/tiktok.svg' alt="tiktok icon" width={24} height={24} /></Link>
            <Link href='https://www.youtube.com'><Image className="rounded-full p-1 bg-white" src='/youtube.svg' alt="youtube icon" width={24} height={24} /></Link>        
        </div>
            <Link href='/'>Reacton Blog</Link>
            <div className="flex gap-4">
              <div className="flex bg-slate-500 rounded-full border-2 px-1 border-black relative cursor-pointer items-center justify-between">
                <div className="flex w-[20px] h-[20px] bg-slate-950 rounded-full absolute"/>
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
                <div className="bg-slate-700 absolute top-0 right-0 w-1/2 h-screen hidden max-md:block bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-l-lg z-10">
  
                  <div className="pt-20 flex flex-col gap-4"> 
                {
                menu.map((item) => <Link className="items-center w-full p-4 hover:bg-slate-800 text-center hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg" href={item.link} key={item.name}>
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