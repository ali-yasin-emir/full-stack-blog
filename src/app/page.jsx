import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const categories = [
    { id: 1, 
      name: 'fashion',
      alt: 'fashion category image',
      img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b'
    },
    { id: 2,
      name: 'food',
      alt: 'food category image',
      img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'
    },
    { id: 3,
      name: 'coding',
      alt: 'coding category image',
      img: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3'
    },
    { id: 4,
      name: 'style',
      alt: 'style category image',
      img: 'https://images.unsplash.com/photo-1525299374597-911581e1bdef'
    },
    { id: 5,
      name: 'travel',
      alt: 'travel category image',
      img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60'
    },
    { id: 6,
      name: 'culture',
      alt: 'culture category image',
      img: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3'
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
    {
    id: 2,
    img: 'https://journal.adyog.com/assets/img/zustand.png',
    alt: 'post image',
    date: '2023-08-28',
    category: 'CODING',
    title: 'Easiest way for React State Managment',
    desc: 'State management is one of the most important concepts in React world...'
    }   
  ]

  return (
   <div className=''>
    {/* FIX py-36 max-md:py-24 */}
    <div className="max-container flex flex-col pt-24 max-md:py-24 max-md:px-6">
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

        {/* FIX py-12 section */}
      <section className="flex max-md:flex-col">
        {/* POSTS BOX */}
        <div className="flex flex-col w-3/4 gap-12 max-md:w-fit">
        <h1 className="text-2xl">Recent Posts</h1>
        {/* POST BOX */}
        { posts.map((post) => (
                  <div className="flex min-h-[340px] bg-green-800 max-md:flex-col max-md:h-[540px]" key={post.id}>
                  {/* POST IMAGE BOX */}
                    <div className="flex flex-1 relative">
                    <Image src={post.img} fill alt={post.alt} className="object-cover"/>
                    </div>
                  {/* POST IMAGE BOX */}
          
                  {/* POST INFO BOX */}
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="flex flex-col gap-4 p-8">
                        <div className="flex gap-2">   
                          <span className="text-gray-400">{post.date}</span>
                          <span className="text-red-950">{post.category}</span>
                        </div>
                        <h3 className="text-lg">
                        {post.title}
                        </h3>
                        <p className="text-gray-400">
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

        {/* MOST POPULAR BOX */}
        <div className="flex max-md:hidden w-1/4 flex-col h-[540px] bg-blue-400">
        most popular
        </div>
        {/* MOST POPULAR BOX */}

      </section>


    </div>
   </div>
  )
}
