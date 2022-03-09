import Head from 'next/head';
import Link from 'next/link';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typing';

interface Props {
  posts: [Post];
}

function Blog({ posts }: Props) {
    console.log(posts);
  return (

   
     <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6  ">
        {posts.map((post) => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg border">
                <img
                  className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between bg-white p-5">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p>
                      {post.description} by {post.author.name}
                    </p>
                  </div>
                    <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    
  )
}

export default Blog


export async function getServerSideProps() {
    const query = `*[_type == "post"] {
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;
  
    const posts = await sanityClient.fetch(query);
  
    return {
      props: { posts },
    };
  }