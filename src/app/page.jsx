'use client'

import Image from "next/image";
import Link from "next/link";

export default function Home() {


  const MAX_LENGTH = 75;

  const categories = [   
    { id: 0, 
      name: 'fashion',
      alt: 'fashion category image',
      img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
      color: 'violet-600'
    },
    { id: 1,
      name: 'food',
      alt: 'food category image',
      img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
      color: 'green-700'
    },
    { id: 2,
      name: 'coding',
      alt: 'coding category image',
      img: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3',
      color: 'blue-600'
    },
    { id: 3,
      name: 'style',
      alt: 'style category image',
      img: 'https://images.unsplash.com/photo-1525299374597-911581e1bdef',
      color: 'fuchsia-500'
    },
    { id: 4,
      name: 'travel',
      alt: 'travel category image',
      img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
      color: 'red-500' 
    },
    { id: 5,
      name: 'culture',
      alt: 'culture category image',
      img: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3',
      color: 'orange-500'
    }
  ]

  const posts = [
    {
      id: 0,
      img: 'https://journal.adyog.com/assets/img/zustand.png',
      alt: 'post image',
      date: '2023-08-28',
      category: 'CODING',
      title: 'Easiest way for React State Managment',
      desc: 'State management is one of the most important concepts in React world...'
    },
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg',
      alt: 'post image',
      date: '2023-07-28',
      category: 'CULTURE',
      title: 'New Visual Feature is a Game Changer',
      desc: 'Google just released a new feature for is Bard chatbot that catapults...'
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/15706251/pexels-photo-15706251/free-photo-of-kirmizi-araba-kentsel-durdurmak.jpeg',
      alt: 'post image',
      date: '2023-07-28',
      category: 'CULTURE',
      title: 'What nobody tells you about taking a career break',
      desc: "Once we've learned how to do something we become unconsciously"
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

  
  const editorsPick = [
    {
      id: 0,  
      category: 'Travel',
      color: 'bg-red-500',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23',
      img: '/editors-pick/1.jpg'
    },
    {
      id: 1,
      category: 'Culture',
      color: 'bg-orange-500',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23',
      img: '/editors-pick/2.jpg'
    },
    {
      id: 2,
      category: 'Food',
      color: 'bg-green-700',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23',
      img: '/editors-pick/3.jpg'
    },
    {
      id: 3,
      category: 'Fashion',
      color: 'bg-violet-600',
      title: 'A Journey Through Boemian Beauty: Exploring the Streets of Prague',
      author: 'Joseph Owen',
      date: '10.08.23',
      img: '/editors-pick/4.jpg'
    },
  ]

  return (
   <div className=''>
    {/* FIX py-36 max-md:py-24 */}
    <div className="max-container flex flex-col py-24 max-md:py-24 max-md:px-6">
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
      <div className="flex max-md:flex-col gap-2">
      <section className="flex max-md:flex-col">
        {/* POSTS BOX */}
        <div className="flex flex-col w-4/6 gap-12 max-md:w-fit h-fit mb-10">
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
                          {
                            post.desc.length > MAX_LENGTH ? `${post.desc.substring(0, MAX_LENGTH)}...` : post.desc
                          }
                        </p>
                        <button className="w-fit py-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">Read More</button>
                      </div>
                    </div>
                  {/* POST INFO BOX */}
                  </div>
        ))
        }
        {/* POST BOX */}

        <div className="flex w-full justify-between items-center py-4 px-12">
          <button className="bg-red-400 text-white font-extralight p-2 w-[100px]">Previous</button>
          <button className="bg-red-500 text-white font-extralight p-2 w-[100px]">Next</button>
        </div>
          
        </div>
        {/* POSTS BOX */}

        <hr className="w-[1px] h-full mx-12 bg-gray-400" />

          {/* SIDE CONTAINER */}
            <div className="flex flex-col gap-16 max-md:w-fit max-md w-2/6 px-6">
            {/* MOST POPULAR CONTAINER  overflow-y-auto */}
              <section className="flex flex-col h-[465px] overflow-y-scroll pb-6 relative custom-scroll">
              <div className="flex flex-col gap-1 mb-8">
                <span className="text-gray-400">What&apos;s hot</span>
                <h3 className="text-2xl">Most Popular</h3>
              </div>
      
              {/* MOST POPULAR BOX  */}
              <div className="flex flex-col gap-6">
                {/* MOST POPULAR ITEM bg-amber-200 */}
                {
                  (popularPosts).map((popularPost)=> (
                    <Link href='/' className="flex flex-col gap-2" key={popularPost.id}>
                    <span className={`${popularPost.color} text-white font-extralight w-fit px-2 rounded-full`}>{popularPost.category}</span>
                    <p>{popularPost.title}</p>
                    <div className="flex gap-3 items-center">
                      <span className="text-sm">{popularPost.author}</span>
                      <span className="text-gray-700 text-sm">{popularPost.date}</span>
                    </div>
                    </Link>
                  ))
                }
                {/* MOST POPULAR ITEM */}
      
              </div>
              {/* MOST POPULAR BOX */}
      
              </section>

            {/* MOST POPULAR CONTAINER */}
  
            {/* CATEGORIES */}
            <section className="flex flex-col h-fit">
            <div className="flex flex-col gap-1 mb-8">
                <span className="text-gray-400">Discover by topic</span>
                <h3 className="text-2xl">Categories</h3>
            </div>
            <div className="flex flex-wrap gap-5 items-start">
            {
              categories.map((category) => (
                // w-fit p-2 rounded-full bg-gray-400
                  <Link href={category.name} key={category.id}  className={`bg-${category.color} text-white text-center border-[2px] rounded-full p-2 w-24`}>{category.name}</Link>
              ))
            }
            </div>
            </section>
            {/* CATEGORIES */}

              {/* Editor's Pick */}
              <section className="flex flex-col h-fit">
              <div className="flex flex-col gap-1 mb-8">
                <span className="text-gray-400">Choosen by the editor</span>
                <h3 className="text-2xl">Editor&apos;s Pick</h3>
              </div>
              <div className="flex flex-col gap-6">
                {/* MOST POPULAR ITEM bg-amber-200 */}
                {
                  (editorsPick).map((item)=> (
                    <Link href='/' className="flex items-center gap-4 hover:bg-gray-500 p-2 transition-all ease-in-out duration-500 rounded-xl" key={item.id}>
                    <Image width={64} height={64} src={item.img} alt="item img" className="rounded-full aspect-square object-cover"/>
                   <div className="flex flex-col gap-2">
                    <span className={`${item.color} text-white font-extralight w-fit px-2 rounded-full`}>{item.category}</span>
                    <p>{item.title}</p>
                    <div className="flex gap-3 items-center"> 
                      <span className="text-sm">{item.author}</span>
                      <span className="text-gray-700 text-sm">{item.date}</span>
                    </div>
                    </div>
                    </Link>
                  ))
                }
                {/* MOST POPULAR ITEM */}
      
              </div>
              </section>
              {/* Editor's Pick */}

            </div>
          {/* SIDE CONTAINER */}

      </section>
      </div>
      {/* RECENT POSTS / MOST POPULAR / CATEGORIES py-12 section */}
    </div>
   </div>
  )
}
