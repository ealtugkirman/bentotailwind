// import Container from "../_components/container";
// import { HeroPost } from "../_components/hero-post";
// import { Intro } from "../_components/intro";
// import { MoreStories } from "../_components/more-stories";
// import { getAllPosts } from "../../lib/api";
// import Footer from "../../components/Layout/Footer";

// export default function Index() {
//   const allPosts = getAllPosts();

//   const heroPost = allPosts[1];

//   const morePosts = allPosts.slice(0);

//   return (
//     <main className="bg-first md:px-12" >
//       <Container>
//         <Intro />
//         <HeroPost
//           title={heroPost.title}
//           coverImage={heroPost.coverImage}
//           date={heroPost.date}
//           author={heroPost.author}
//           slug={heroPost.slug}
//           // excerpt={heroPost.excerpt}
//         />
//         {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//           </Container>
//           <Footer />
//     </main>
//   );
// }



import { RiCopilotFill, RiOpenaiFill } from "react-icons/ri";
import { GiCrackedShield } from "react-icons/gi";
import { FaGithub, FaRegCopy, FaWindows } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Blog = () => {
  return (
  <div className="grid h-screen px-32 bg-gray-900 p-5  rounded-lg gap-5 grid-cols-5 grid-rows-4">
      <div className="rounded-lg px-12 justfiy-center items-end col-span-3 bg-gradient-to-l from-blue-600 to-blue-800  row-span-2">
        <h1 className="text-white mt-8 text-3xl">
          Proven to increase developer productivty and accelerate the pace of
          software development
        </h1>
        <span className="flex cursor-pointer font-lg flex-row mt-32 items-center justify-start">
          Read the research <IoIosArrowForward />
        </span>
      </div>
      <div className="rounded-lg col-span-2 px-6  bg-darkblue row-span-2">
        <div className="text-7xl p-4 ">
          <BsFillLightningChargeFill className="shadow-2xl shadow-slate-100 bg-dark p-4 rounded-full text-white border-blue-700 border" />
        </div>
        <div className="flex flex-col items-start mt-40 align-bottom">
          <h1 className="text-2xl font-semibold">55% faster coding</h1>
          <span className="text-gray-400">faster coding</span>
        </div>
      </div>
      <div className="rounded-lg col-span-2 px-8 bg-darkblue row-span-2">
        <div className="text-xl flex flex-row mt-12 space-x-6 justify-center items-center">
          <RiCopilotFill className="shadow-2xl shadow-slate-100 bg-dark p-4 text-7xl  rounded-full text-white border-blue-700 border" />
          <FaWindows className="text-gray-400 text-3xl " />
          <FaGithub className="text-gray-400 text-3xl " />
          <RiOpenaiFill className="text-gray-400 text-3xl " />
        </div>
        <div>
          <h1 className="text-2xl mt-20 font-semibold">
            Designed by leaders in AI so you can build with confidence
          </h1>
        </div>
      </div>
      <div className="rounded-lg relative col-span-3 px-12 pt-8  row-span-2 bg-gradient-to-r from-blue-600 to-blue-800 ">
        <h1 className="text-3xl">
          Committed to your privacy, security, and trust
        </h1>
        <div className="text-9xl absolute right-2 bottom-12 " >
          <GiCrackedShield className="text-yellow-300/30" />
        </div>
        <span className="flex cursor-pointer font-lg flex-row mt-44 items-center justify-start">
          Visit the Github CoPilot Trust Center <IoIosArrowForward />
        </span>
      </div>
    </div>
      );
};


export default Blog