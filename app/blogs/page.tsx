import type { Metadata } from "next";
import BlogsPageClient from "@/components/BlogsPageClient";
import { getBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs | Sarvan Kumar",
  description: "Read latest blog posts written in markdown.",
};

const BlogsPage = async () => {
  const blogs = await getBlogs();

  return <BlogsPageClient blogs={blogs} />;
};

export default BlogsPage;
