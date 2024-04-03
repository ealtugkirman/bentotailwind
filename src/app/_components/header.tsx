import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl bg-first md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pb-20 pt-8">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
      .
    </h2>
  );
};

export default Header;
