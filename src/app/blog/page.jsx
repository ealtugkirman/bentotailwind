import Container from "../_components/container";
import { HeroPost } from "../_components/hero-post";
import { Intro } from "../_components/intro";
import { MoreStories } from "../_components/more-stories";
import { getAllPosts } from "../../lib/api";
import Footer from "../../components/Layout/Footer";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[1];

  const morePosts = allPosts.slice(0);

  return (
    <main className="bg-first md:px-12" >
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </Container>
          <Footer />
    </main>
  );
}
