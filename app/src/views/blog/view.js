import React, {Component} from 'react';
import Blog from '../../components/Blog/Blog';
import '../../components/Blog/blog.scss';
import blogs from '../../components/Blog/blog.fixtures';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  }
});

const BlogView = ({ match }) => {

  const id = match.params['id'];

  let blog = blogs[id];
  console.log(blog);

  return (
    <Blog {...blog} />
  );

}

export default BlogView;