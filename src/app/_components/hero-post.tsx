import Avatar from "./avatar";
import CoverImage from "./cover-image";
import { type Author } from "../../interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  author,
  slug,
}: Props) {
  return (
    <section className="bg-first items-center md:grid md:grid-cols-2 pb-12">
      <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 pb-8 md:pb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline text-lightgradient">
              {title}
            </Link>
          </h3>
          <div className="text-gray-500  text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          {/* <p className="text-md mr-12 text-gray-500 leading-relaxed pb-4">{excerpt}</p> */}
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div className="pb-8 bg-first md:pb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
    </section>
  );
}
