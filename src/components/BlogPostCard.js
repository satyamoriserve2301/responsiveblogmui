import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Avatar, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const BlogPostCard = ({ title, content, image }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card>
      {!isSmallScreen && image && <CardMedia component="img" height="140" image={image} alt={title} />}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Avatar src="https://via.placeholder.com/40" alt="Author" sx={{ mr: 1 }} />
        <Button size="small" component={Link} to="/post-details">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogPostCard;