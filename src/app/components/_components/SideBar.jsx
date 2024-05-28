"use client";
import { useEffect, useState } from "react";

// NavLink component
const NavLink = ({ ...props }) => {
  const { children, href = "", className = "", active = "" } = props;

  const [pathname, setPathname] = useState("/");

  const isActive = pathname == href;
  const activeClass = isActive ? active : "";

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [props]);

  return (
    <a href={href} {...props} className={`${activeClass} ${className}`}>
      {children}
    </a>
  );
};

// Title component
const Title = ({ children }) => (
  <h3 className="pb-3 px-4 font-medium text-yellow-200">{children}</h3>
);

// Sections List
const SectionsList = ({ items }) => (
  <div className="text-white px-4 ">
    <ul>
      {items?.map((item, idx) => (
        <li key={idx}>
          <NavLink
            href={item?.href}
            active="text-white border-indigo-600"
            className="block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-white duration-150">
            {item?.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar = () => {
  const lessons = {
    basicGrids: [
      { name: "Simple Bento Grid", href: "/components/simple-bento" },
      {
        name: "Simple Bento With Text",
        href: "/components/simple-bento-with-text",
      },
      {
        name: "Tailwind Responsive Grid",
        href: "/components/tailwind-responsive-grid",
      },
            { name: "Font Demo Grid", href: "/components/demo-grid-font" },

    ],
    bentoGrids: [
      { name: "Reveal Bento", href: "/components/reveal-bento" },
      { name: "Fade In Grid", href: "/components/fadein-bento-grid" },
      { name: "Github Copilot Grid", href: "/components/github-copilot-bento" },
      { name: "Solid Bento Grid", href: "/components/solid-bento" },
      { name: "Vercel Blog Grid", href: "/components/vercel-blog-grid" },
      {
        name: "Branding Grid Template",
        href: "/components/branding-grid-template",
      },

      { name: "Coming Soon...", href: "/components/coming-soon" },
    ],
  };

  return (
    <>
      <nav className="fixed hidden lg:flex z-10 pb-20 bottom-20 top-32 left-0  h-full border-r bg-first space-y-8 overflow-auto sw-64">
        <div className="text-[0.9rem] space-y-6">
          <>
            <div>
              <Title>Basic Grids</Title>
              <SectionsList items={lessons.basicGrids} />
            </div>
            <div>
              <Title>Bento Grids</Title>
              <SectionsList items={lessons.bentoGrids} />
            </div>
            {/* <div>
                            <Title>al2 Basics</Title>
                            <SectionsList items={ lessons.cargoLessons } />
                        </div> */}
          </>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
