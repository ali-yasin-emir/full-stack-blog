'use client'


import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const categories = [   
    { id: 0, 
      name: 'fashion',
      alt: 'fashion category image',
      img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
      color: 'bg-red-500'
    },
    { id: 1,
      name: 'food',
      alt: 'food category image',
      img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
      color: 'bg-red-400'
    },
    { id: 2,
      name: 'coding',
      alt: 'coding category image',
      img: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3',
      color: '#fff'
    },
    { id: 3,
      name: 'style',
      alt: 'style category image',
      img: 'https://images.unsplash.com/photo-1525299374597-911581e1bdef',
      color: '#fff'
    },
    { id: 4,
      name: 'travel',
      alt: 'travel category image',
      img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
      color: 'bg-red-400' 
    },
    { id: 5,
      name: 'culture',
      alt: 'culture category image',
      img: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3',
      color: 'bg-orange-400'
    },
  ]

  const posts = [
    {
      id: 1,
      img: 'https://journal.adyog.com/assets/img/zustand.png',
      alt: 'post image',
      date: '2023-08-28',
      category: 'CODING',
      title: 'Easiest way for React State Managment',
      desc: 'State management is one of the most important concepts in React world...'
    },
  ]

  const popularPosts = [
    {
      id: 0,  
      category: 'Travel',
      color: 'bg-red-500',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23'
    },
    {
      id: 1,
      category: 'Culture',
      color: 'bg-orange-500',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23'
    },
    {
      id: 2,
      category: 'Food',
      color: 'bg-green-700',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23'
    },
    {
      id: 3,
      category: 'Fashion',
      color: 'bg-violet-600',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23'
    },
    {
      id: 4,
      category: 'Coding',
      color: 'bg-blue-600',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23'
    },
    {
      id: 4,
      category: 'Style',
      color: 'bg-fuchsia-500',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23'
    },
  ]

  return (
   <div className=''>
    {/* FIX py-36 max-md:py-24 */}
    <div className="max-container flex flex-col pt-24 pb-48 max-md:py-24 max-md:px-6">
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
        <section className="flex flex-col pt-16 pb-24 gap-9  max-md:items-center">
          <h1 className="text-2xl max-md:text-3xl">Popular Categories</h1>
        {/* CATEGORY BOX */}
          <div className="flex justify-around max-md:flex-col max-md:gap-6">
          {/* CATEGORY ITEM */}
        { categories.map((category) => (
          <Link href={category.name} key={category.name} className="flex gap-3 relative items-center capitalize">
          <Image src={category.img}
          alt={category.alt}
          width={32} height={32}
          className="object-cover rounded-full aspect-square"
          />
          <span>{category.name}</span>
        </Link>
          ))
        }
          {/* CATEGORY ITEM */}
          </div>
        {/* CATEGORY BOX */}
        </section>
      {/* POPULAR CATEGORIES */}    

        {/* RECENT POSTS / MOST POPULAR / CATEGORIES py-12 section */}
      <section className="flex max-md:flex-col">
        {/* POSTS BOX */}
        <div className="flex flex-col w-4/6 gap-12 max-md:w-fit">
        <h1 className="text-2xl">Recent Posts</h1>
        {/* POST BOX */}
        { posts.map((post) => (
          //  bg-green-800
                  <div className="flex min-h-[340px] max-md:flex-col max-md:h-[540px]" key={post.id}>
                  {/* POST IMAGE BOX */}
                    <div className="flex flex-1 relative">
                    <Image src={post.img} fill alt={post.alt} className="object-cover"/>
                    </div>
                  {/* POST IMAGE BOX */}
          
                  {/* POST INFO BOX */}
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="flex flex-col gap-4 px-8 max-md:p-0">
                        <div className="flex gap-2">   
                          <span className="text-gray-400">{post.date}</span>
                          <span className="text-red-950">{post.category}</span>
                        </div>
                        <h3 className="text-lg">
                        {post.title}
                        </h3>
                        <p className="text-gray-400 text-justify">
                          {post.desc}
                        </p>
                        <button className="bg-transparent shadow-md w-fit">Read More</button>
                      </div>
                    </div>
                  {/* POST INFO BOX */}
                  </div>
        ))
        }
        {/* POST BOX */}

        </div>
        {/* POSTS BOX */}

        {/* MOST POPULAR CONTAINER  */}
        <div className="flex max-md:hidden w-2/6 flex-col h-[465px] px-6 overflow-y-auto pb-6 relative">
        <div className="flex flex-col gap-1 mb-8">
          <span className="text-gray-400">What&apos;s hot</span>
          <h3 className="text-2xl">Most Popular</h3>
        </div>

        {/* MOST POPULAR BOX  */}
        <div className="flex flex-col gap-6">
          {/* MOST POPULAR ITEM bg-amber-200 */}
          {
            (popularPosts).map((popularPost)=> (
              <div className="flex flex-col gap-2" key={popularPost.id}>
              <span className={`${popularPost.color} text-white font-extralight w-fit px-2 rounded-full`}>{popularPost.category}</span>
              <p>{popularPost.title}</p>
              <div className="flex gap-3 items-center">
                <span className="text-sm">{popularPost.author}</span>
                <span className="text-gray-700 text-sm">{popularPost.date}</span>
              </div>
              </div>
            ))
          }
          {/* MOST POPULAR ITEM */}

        </div>
        {/* MOST POPULAR BOX */}

        </div>
        {/* MOST POPULAR CONTAINER */}

      </section>
      {/* RECENT POSTS / MOST POPULAR / CATEGORIES py-12 section */}
    </div>
   </div>
  )
}
