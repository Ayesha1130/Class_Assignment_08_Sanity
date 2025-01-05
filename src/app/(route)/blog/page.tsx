import React from "react";
import Card from "@/components/Card";

import { client } from "@/sanity/lib/client";

const blog = async () => {
  const query = `*[_type=='post'] | order(_createdAT asc){
      summary,title,image,
        "slug":slug.current
    }
    `;
  const posts = await client.fetch(query);

  return (
    <div>
      <div
        className="flex bg-cover h-[50vh] bg-center justify-center items-center font-serif "
        style={{ backgroundImage: "url(/images/bn2.jpg)" }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white">
            Latest Blogs
          </h1>
          <p>
            Discover the latest articles, insights, and updates from The Curious
            Mind.
          </p>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {posts.map((post: Post) => (
          <Card post={post} key={post.slug} />
        ))}
      </section>
    </div>
  );
};

export default blog;
