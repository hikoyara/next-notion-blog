import { fetchBlogData } from "@/lib/actions";
import BlogSearch from "@/components/screens/BlogSearch";

const page = async () => {
    const { posts, nextCursor } = await fetchBlogData();

    return (
        <main>
            <BlogSearch posts={posts} />
        </main>
    );
};

export default page;
