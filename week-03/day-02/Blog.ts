'use strict';

import { BlogPost } from './BlogPost'

class Blog {
  listOfBlogPosts: BlogPost[];

  constructor(blogList: BlogPost[]) {
    this.listOfBlogPosts = blogList;
  }

  delete(int: number) {
    this.listOfBlogPosts.splice(int - 1, 1);
  }

  update(int: number, newPost: BlogPost) {
    this.listOfBlogPosts.splice(int - 1, 1, newPost);
  }

  getList() {
    console.log(this.listOfBlogPosts);
  }
}

let blogList = [
  new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.'),
  new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'),
  new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'aniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.')
];

let myBlog = new Blog(blogList);
myBlog.getList();
myBlog.delete(3);
myBlog.getList();
let newPost = new BlogPost('Noemi', 'This exercise', 'This is really nice, isn\'t it, Maunika?', '2019.12.17');
myBlog.update(1, newPost);
myBlog.getList();

// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost