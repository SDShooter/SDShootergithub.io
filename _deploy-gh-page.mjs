import ghpages from 'gh-pages';
//var ghpages = require('gh-pages');
ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/SDShootergithub/SDShootergithub.github.io.git'
    },    
).then(() => {
    console.log('Deploy complete?');
    //Could:  build container, push to registry, run test, sentry, reports, webworker, etc. 
})