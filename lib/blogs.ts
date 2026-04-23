import { promises as fs } from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  content: string;
  updatedAt: number;
};

type Frontmatter = {
  title?: string;
  date?: string;
  excerpt?: string;
  url?: string;
};

const BLOGS_DIR = path.join(process.cwd(), "public", "blogs");

function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function parseFrontmatter(markdown: string): { frontmatter: Frontmatter; content: string } {
  if (!markdown.startsWith("---\n")) {
    return { frontmatter: {}, content: markdown };
  }

  const frontmatterEnd = markdown.indexOf("\n---\n", 4);

  if (frontmatterEnd === -1) {
    return { frontmatter: {}, content: markdown };
  }

  const rawFrontmatter = markdown.slice(4, frontmatterEnd);
  const content = markdown.slice(frontmatterEnd + 5).trim();

  const frontmatter = rawFrontmatter.split("\n").reduce<Frontmatter>((acc, line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return acc;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, "");

    if (key === "title") acc.title = value;
    if (key === "date") acc.date = value;
    if (key === "excerpt") acc.excerpt = value;
    if (key === "url") acc.url = value;

    return acc;
  }, {});

  return { frontmatter, content };
}

function formatTitleFromSlug(slug: string): string {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const entries = await fs.readdir(BLOGS_DIR, { withFileTypes: true });
    const markdownFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"));

    const blogs = await Promise.all(
      markdownFiles.map(async (entry) => {
        const absolutePath = path.join(BLOGS_DIR, entry.name);
        const fileStats = await fs.stat(absolutePath);
        const rawMarkdown = await fs.readFile(absolutePath, "utf8");
        const { frontmatter, content } = parseFrontmatter(rawMarkdown);

        const slug = entry.name.replace(/\.md$/, "");
        const title = frontmatter.title || formatTitleFromSlug(slug);
        const date = frontmatter.date || fileStats.mtime.toISOString();
        const plainText = toPlainText(content);

        return {
          slug,
          title,
          date,
          excerpt:
            frontmatter.excerpt ||
            plainText.slice(0, 140).trim() + (plainText.length > 140 ? "..." : ""),
          imageUrl: frontmatter.url,
          content,
          updatedAt: fileStats.mtimeMs,
        } satisfies BlogPost;
      })
    );

    return blogs.sort((a, b) => b.updatedAt - a.updatedAt);
  } catch {
    // Return an empty list when the blogs directory does not exist yet.
    return [];
  }
}
