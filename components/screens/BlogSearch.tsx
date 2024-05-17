"use client";

import { useState } from "react";
import { BlogCard } from "../BlogCard";

const BlogSearch = ({ posts }: any) => {
    const [search, setSearch] = useState("");

    return (
        <div>
            {posts.map((item: any) => (
                <div key={item.id} className="grid-row-dance">
                    <BlogCard title={item.properties.title.title[0].text.content} img={item.cover?.external.url} tag={item.properties.tag.multi_select} blogLink={item.id} />
                </div>
            ))}
        </div>
    );
};

export default BlogSearch;
