exports.config = {
  projectRoot: "./src",
  projectName: "my-scully-blog",
  outDir: './dist/static',
  routes: {
    '/blog/:postId': {
      type: 'contentFolder',
      postId: {
        folder: "./blog"
      }
    },
  }
};