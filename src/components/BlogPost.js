
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BlogPost = ({ title, content }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2">{content}</Typography>
    </CardContent>
  </Card>
);

export default BlogPost;
