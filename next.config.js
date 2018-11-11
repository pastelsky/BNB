const withSass = require('@zeit/next-sass')
module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ['./node_modules', './node_modules/grommet/node_modules']
  }
})
