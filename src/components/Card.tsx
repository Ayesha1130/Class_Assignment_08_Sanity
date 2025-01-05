import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


const Card = ({ post }: { post: Post }) => {
  return (
    <div className="justify-center bg-black p-4 items-center border-2 border-secondary rounded-md  flex flex-col transition-transform hover:scale-105">
      <Image
        src={urlFor(post.image).width(800).url()}
        alt={post.title}
        width={800}
        height={500}
        className="w-full h-full bg-cover rounded-md"
      />

      <h3 className="font-bold text-2xl text-center py-5">{post.title}</h3>
      <p className="mb-5">{post.summary}</p>

      <Link href={"/"} className="flex justify-center items-center ">
        <button className="px-10 py-4 bg-primary rounded-lg hover:scale-105">
          Explore Now
        </button>
      </Link>

    
    </div>
  );
};

export default Card;
