import { fetchBlogData } from "@/lib/actions";
import BlogSearch from "@/components/screens/BlogSearch";

const page = async () => {
    const { posts, nextCursor } = await fetchBlogData();

    return (
        <main>
            <img src="https://dummyimage.com/1920x400/000/ffffff&text=Hello,NotionBlog!!!" alt="" />
            <div className="pt-24"></div>
            <BlogSearch posts={posts} />
        </main>
    );
};

export default page;
