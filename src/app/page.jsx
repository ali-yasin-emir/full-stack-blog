import Image from "next/image";

export default function Home() {

  const categories = [
    {
      name: 'Fashion',
      alt: 'fashion category image',
      img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b'
    },
    {
      name: 'Food',
      alt: 'food category image',
      img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'
    },
    {
      name: 'Coding',
      alt: 'coding category image',
      img: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3'
    },
    {
      name: 'Style',
      alt: 'style category image',
      img: 'https://images.unsplash.com/photo-1525299374597-911581e1bdef'
    },
    {
      name: 'Travel',
      alt: 'travel category image',
      img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60'
    },
    {
      name: 'Culture',
      alt: 'culture category image',
      img: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3'
    },
  ]

  return (
   <div className=''>
    <div className="max-container flex flex-col py-36 max-md:py-12 max-md:px-6">
      <h1 className="text-4xl leading-relaxed max-md:leading-normal font-bold pb-6 max-md:text-3xl">Hey, Reacton dev here!
      <br />
          <span className="text-4xl leading-relaxed max-md:leading-normal font-normal max-md:text-2xl">Discover my stories and creative ideas.</span>
      </h1>
      
      {/* ITEMS */}
      <div className="flex flex-col gap-8">
        {/* ITEM */}
        <div className="flex max-md:bg-transparent max-md:flex-col min-h-[420px] max-md:h-[620px]"> 
        {/* ITEM Image Box */}
        <div className="relative flex flex-1 max-md:mb-8">
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

      {/* POPULAR CATEGORIES */}
        <section className="flex flex-col py-12 gap-9  max-md:items-center">
          <h1 className="text-2xl max-md:text-3xl">Popular Categories</h1>
        {/* CATEGORY BOX */}
          <div className="flex justify-around max-md:flex-col max-md:gap-6">
          {/* CATEGORY ITEM */}
        { categories.map((category) => (
          <div key={category.name} className="flex gap-3 relative items-center">
          <Image src={category.img}
          alt={category.alt}
          width={32} height={32}
          className="object-cover rounded-full aspect-square"
          />
          <span>{category.name}</span>
        </div>
          ))
        }
          {/* CATEGORY ITEM */}
          </div>
        {/* CATEGORY BOX */}
        </section>


    </div>
   </div>
  )
}
