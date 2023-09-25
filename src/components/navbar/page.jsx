import Image from "next/image"
import Link from "next/link"
const Navbar = () => {

  const menu = ['Homepage', 'Contact', 'About', 'Login']

  return (
    <div className="bg-slate-400 w-full p-4">
        <div className="max-container flex justify-between">
        <div className="flex gap-4">
            <Link href='/'><Image src='/facebook.svg' alt="facebook icon" width={24} height={24} /></Link>
            <Link href='/'><Image className="rounded-full" src='/instagram.svg' alt="instagram icon" width={24} height={24} /></Link>
            <Link href='/'><Image className="rounded-full p-1 bg-white" src='/tiktok2.svg' alt="tiktok icon" width={24} height={24} /></Link>
            <Link href='/'><Image className="rounded-full p-1 bg-white" src='/youtube.svg' alt="youtube icon" width={24} height={24} /></Link>        
        </div>
            <div>reacton_blog</div>
            <div className="flex gap-4">
              <div className="flex bg-slate-500 rounded-full border-2 px-1 border-black relative cursor-pointer items-center justify-between">
                <div className="flex w-[20px] h-[20px] bg-slate-950 rounded-full absolute z-10"/>
                <div>🌙</div>
                <div>🔆</div>
                </div>
              {menu.map((link) => <span key={link}>
                {link}
              </span>)}
            </div>
        </div>
        </div>
  )
}

export default Navbar