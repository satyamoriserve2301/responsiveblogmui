// src/pages/Home.js
import React, { useState } from 'react';
import { Container, Grid, Pagination, Box } from '@mui/material';
import BlogPostCard from '../components/BlogPostCard';

const posts = [
  {
    title: "First Post",
    content: "This is the content of the first post.",
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9"
  },
  {
    title: "Second Post",
    content: "This is the content of the second post.",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df"
  },
  {
    title: "Third Post",
    content: "This is the content of the third post.",
    image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
  },
  {
    title: "Fourth Post",
    content: "This is the content of the fourth post.",
    image: "https://media.istockphoto.com/id/806720054/photo/silhouette.webp?b=1&s=170667a&w=0&k=20&c=WkLtHnjnKJLP32iF-qSnJ_DgfsQFXVrMKgsyQmM2eJo="
  },
  {
    title: "Fifth Post",
    content: "This is the content of the fifth post.",
    image: "https://media.istockphoto.com/id/641113786/photo/nine-arch-bridge-in-sri-lanka.webp?b=1&s=170667a&w=0&k=20&c=IvjTXsSLmYsxzkkPXGwH7U7euXtIO7f8hjThQ1JQGRA="
  },
  {
    title: "Sixth Post",
    content: "This is the content of the sixth post.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "Seventh Post",
    content: "This is the content of the seventh post.",
    image: "https://media.istockphoto.com/id/1696948294/photo/boat-under-bridge-at-night.jpg?s=612x612&w=0&k=20&c=k7uW4N4Et8z30SUIXJOO02VFkGVSDujbjPtCxVn_AEk="
  },
  {
    title: "Eighth Post",
    content: "This is the content of the eighth post.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    title: "Ninth Post",
    content: "This is the content of the ninth post.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
];

const postsPerPage = 6;

const Home = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedPosts = posts.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <Box sx={{ marginTop: '2rem' }}>
      <Container>
        <Grid container spacing={4}>
          {paginatedPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BlogPostCard title={post.title} content={post.content} image={post.image} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
