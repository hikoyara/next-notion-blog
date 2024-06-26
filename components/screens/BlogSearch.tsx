"use client";

import { useState } from "react";
import { BlogCard } from "../BlogCard";

const BlogSearch = ({ posts }: any) => {
    const [search, setSearch] = useState("");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 max-w-7xl m-auto">
            {posts.map((item: any) => (
                <div key={item.id} className="grid-row-dance">
                    <BlogCard title={item.properties.title.title[0].text.content} img={item.cover?.external.url} tag={item.properties.tag.multi_select} blogLink={item.id} createdTime={item.created_time} />
                </div>
            ))}
        </div>
    );
};

export default BlogSearch;
