import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const Header = () => {
  return (
    <h2 className="text-2xl flex items-center bg-first md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pb-10 md:pb-20  pt-8 md:pt-12">
      <Link href="/blog" className="hover:underline flex  items-center ml-12">
        <IoIosArrowBack />
        Blog
      </Link>
      .
    </h2>
  );
};

export default Header;
