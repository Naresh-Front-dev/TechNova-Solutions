import Image from "next/image";

export default function ArticleCover({ post }) {
  return (
    <Image
      src={post.image}
      alt={post.imageAlt}
      fill
      sizes="(min-width: 1344px) 768px, (min-width: 1024px) 58vw, 100vw"
      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
    />
  );
}
