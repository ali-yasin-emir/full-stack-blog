import Image from "next/image";

export default function Home() {


  return (
   <div className='h-screen'>
    <div className="max-container flex flex-col py-36 max-md:py-24 max-md:px-6">
      <h1 className="text-4xl leading-relaxed font-bold pb-6 max-md:text-3xl">Hey, Reacton dev here!
      <br />
          <span className="text-4xl leading-relaxed font-normal max-md:text-2xl">Discover my stories and creative ideas.</span>
      </h1>
      
      {/* ITEMS */}
      <div className="flex flex-col gap-8">
        {/* ITEM */}
        <div className="flex bg-slate-400 max-md:bg-transparent max-md:flex-col min-h-[420px] max-md:h-[620px]"> 
        {/* ITEM Image Box */}
        <div className="relative flex flex-1">
          <Image src='/main_1.jpg' fill alt="main image" className='object-cover absolute'/>
        </div>
        {/* ITEM Text Box */}
        <div className="flex flex-1 flex-col gap-6 justify-center items-center">
            <div className="flex flex-col gap-6 w-5/6 max-md:w-fit">
              <h2>Simple Ways to Inspire Your Inner Innovator</h2>
              <p className="text-justify">Whether you&apos;re an aspiring artist, a curious thinker, or simply looking to add a touch of creativity to youir routine, our journey together will remind you that creativity knows no bounds. Get ready to unlock a world of innovation and self-expression</p>
              <button className="bg-slate-500 p-2 w-fit mt-2">Read More</button>
            </div>
        </div>
        </div> 
        {/* ITEM */} 

      </div>
        {/* ITEMS */}
    </div>
   </div>
  )
}
