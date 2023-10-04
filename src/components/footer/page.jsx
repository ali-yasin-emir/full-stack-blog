import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="border-t-4 border-t-gray-400 py-16 w-full max-md:text-sm">
        <div className="max-container flex max-md:px-10 justify-between items-center">
          <div className="flex flex-col w-5/12 gap-6 max-md:gap-4">
            <div className="flex items-center gap-4">
                <Image src='https://pbs.twimg.com/profile_images/1709146304603947008/-_qAkhep_400x400.jpg' width={48} height={48} alt='footer img' className="rounded-full object-contain aspect-square"/>
                <span className="text-lg font-bold">Reacton Blog</span>
            </div>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit expedita obcaecati ad sequi commodi officiis error minus quibusdam voluptates illum.</p>
            <div className="flex gap-4">
            <Link href='https://facebook.com'><Image src='/facebook.svg' alt="facebook icon" width={24} height={24} /></Link>
            <Link href='https://www.instagram.com'><Image className="rounded-full" src='/instagram.svg' alt="instagram icon" width={24} height={24} /></Link>
            <Link href='https://www.tiktok.com'><Image className="rounded-full p-1 bg-white" src='/tiktok.svg' alt="tiktok icon" width={24} height={24} /></Link>
            <Link href='https://www.youtube.com'><Image className="rounded-full p-1 bg-white" src='/youtube.svg' alt="youtube icon" width={24} height={24} /></Link>        
        </div>
          </div>
          <hr className="w-[1px] h-24 mx-8 max-md:mx-12 max-md:h-50 bg-gray-400" />
          <div className="flex w-5/12 justify-center max-md:gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-bold underline underline-offset-8 mb-2">Links</h3>
              <Link href='/'><span>Homepage</span></Link>
              <Link href='/blog'><span>Blog</span></Link>
              <Link href='/about'><span>About</span></Link>
              <Link href='/contact'><span>Contact</span></Link>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-bold underline underline-offset-8 mb-2">Tags</h3>
              <Link href='#'><span>Style</span></Link>
              <Link href='#'><span>Fashion</span></Link>
              <Link href='#'><span>Coding</span></Link>
              <Link href='#'><span>Travel</span></Link>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-bold underline underline-offset-8 mb-2">Social</h3>
              <Link href='/'><span>Facebook</span></Link>
              <Link href='/'><span>Instagram</span></Link>
              <Link href='/'><span>Tiktok</span></Link>
              <Link href='/'><span>Youtube</span></Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer