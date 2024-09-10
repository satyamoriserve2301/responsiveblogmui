import React from "react";
import { Box } from "@mui/material";
import BlogPostCard from "../components/BlogPostCard";

const posts = [
  {
    title: "First Post",
    content: "This is the content of the first post.",
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
  },
  {
    title: "Second Post",
    content: "This is the content of the second post.",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
  },
  {
    title: "Third Post",
    content: "This is the content of the third post.",
    image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  },
  {
    title: "Fourth Post",
    content: "This is the content of the fourth post.",
    image:
      "https://media.istockphoto.com/id/806720054/photo/silhouette.webp?b=1&s=170667a&w=0&k=20&c=WkLtHnjnKJLP32iF-qSnJ_DgfsQFXVrMKgsyQmM2eJo=",
  },
  {
    title: "Fifth Post",
    content: "This is the content of the fifth post.",
    image:
      "https://media.istockphoto.com/id/641113786/photo/nine-arch-bridge-in-sri-lanka.webp?b=1&s=170667a&w=0&k=20&c=IvjTXsSLmYsxzkkPXGwH7U7euXtIO7f8hjThQ1JQGRA=",
  },
  {
    title: "Sixth Post",
    content: "This is the content of the sixth post.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

const Home = () => {
  return (
    <Box sx={{ marginTop: "2rem",  position: "relative" }}>
     
      <Box
        sx={{
          display: { xs: "block", md: "block" },
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box className="animate-scroll" sx={{ display: "flex", gap: 2 }}>
          {posts.map((post, index) => (
            <Box key={index}>
              <BlogPostCard
                title={post.title}
                content={post.content}
                image={post.image}
              />
            </Box>
          ))}
        
          {posts.map((post, index) => (
            <Box key={`duplicate-${index}`}>
              <BlogPostCard
                title={post.title}
                content={post.content}
                image={post.image}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
          display: flex;
          width: calc(200%);
        }
      `}</style>
    </Box>
  );
};

export default Home;
