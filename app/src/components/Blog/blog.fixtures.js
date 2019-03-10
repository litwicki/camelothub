import Blog from './Blog';

var faker = require('faker');
var blogs = [];
var i = 0;

for(i=1;i<process.env.REACT_APP_BLOG_FIXTURE_COUNT;i++) {
  blogs.push({
    component: Blog,
    disabled: false,
    props: {
      id: i,
      title: faker.lorem.words(),
      body: faker.lorem.paragraphs(),
      created: faker.date.past(),
      updated: faker.date.past(),
    }
  })
}

if(process.env.NODE_ENV !== 'prod') {
  console.log(blogs);
}

export default blogs;