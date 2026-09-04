import aiBusinessImage from "@/public/images/blog/ai-business.svg";
import cloudAppsImage from "@/public/images/blog/cloud-apps.svg";
import digitalTransformationImage from "@/public/images/blog/digital-transformation.svg";
import mobileFirstImage from "@/public/images/blog/mobile-first.svg";
import modernWebImage from "@/public/images/blog/modern-web.svg";
import userExperienceImage from "@/public/images/blog/user-experience.svg";

export const BLOG_API_URL = "https://jsonplaceholder.typicode.com/posts";

const blogVisuals = [
  {
    image: modernWebImage,
    imageAlt: "A browser interface with code and connected web components",
    category: "Engineering",
    date: "August 28, 2026",
  },
  {
    image: aiBusinessImage,
    imageAlt: "Connected AI nodes forming an intelligent business network",
    category: "Artificial Intelligence",
    date: "August 18, 2026",
  },
  {
    image: cloudAppsImage,
    imageAlt: "Cloud platform connected to scalable application services",
    category: "Cloud",
    date: "August 9, 2026",
  },
  {
    image: userExperienceImage,
    imageAlt: "Interface panels arranged into an accessible user experience",
    category: "Design",
    date: "July 30, 2026",
  },
  {
    image: mobileFirstImage,
    imageAlt: "Mobile interface expanding into tablet and desktop layouts",
    category: "Product Design",
    date: "July 19, 2026",
  },
  {
    image: digitalTransformationImage,
    imageAlt: "Business workflow transforming into connected digital services",
    category: "Strategy",
    date: "July 7, 2026",
  },
];

export async function fetchBlogPosts() {
  const response = await fetch(BLOG_API_URL);

  if (!response.ok) {
    throw new Error("Unable to load blog posts. Please try again.");
  }

  const posts = await response.json();
  const firstSixPosts = posts.slice(0, 6);

  return firstSixPosts.map((post, index) => {
    const title = post.title.charAt(0).toUpperCase() + post.title.slice(1);
    const description = post.body.replaceAll("\n", " ");
    const slug = post.title.split(" ").join("-");

    return {
      id: post.id,
      title,
      description,
      slug,
      content: post.body.split("\n"),
      readTime: "1 min read",
      ...blogVisuals[index],
    };
  });
}
