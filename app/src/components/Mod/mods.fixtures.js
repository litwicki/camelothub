import Mod from './Mod';

var faker = require('faker');
var mods = [];
var i = 0;

for(i=1;i<process.env.REACT_APP_MOD_FIXTURE_COUNT;i++) {
  mods.push({
    component: Mod,
    disabled: false,
    props: {
      id: i,
      name: faker.lorem.words(),
      title: faker.lorem.words(),
      author: faker.name.findName(),
      body: faker.lorem.sentences(),
      featured: 0,
      created: faker.date.past(),
      updated: faker.date.past(),
      github_url: '',
      img: 'https://loremflickr.com/320/240?random=' + i,
    }
  })
}

if(process.env.NODE_ENV !== 'prod') {
  console.log(mods);
}

export default mods;