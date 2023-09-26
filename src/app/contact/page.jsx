'use client';

import { useRouter, usePathname } from "next/navigation";

const Contact = ({params}) => {

  
const router = useRouter();
const pathname = usePathname();

console.log(pathname)

  return (
    <div className='bg-slate-500 h-screen'>Contact</div>
  )
}

export default Contact