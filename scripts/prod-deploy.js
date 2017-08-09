var ghpages = require('gh-pages');
var path = require('path');
var build_dir = 'build';
var options = {
  branch: 'master',
  repo: 'git@github.com:bryantyao/bryantyao.github.io.git'
};

console.log(`Deploying to repo: ${options.repo}, branch: ${options.branch}...`);

ghpages.publish(build_dir, options, function(err) {
  if(err) {
    console.log(`An error has occurred: ${err}`);
  } else {
    console.log("Deployed");
  }
});

