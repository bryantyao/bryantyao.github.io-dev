const ghpages = require('gh-pages');
const getGhPagesArgs = require('./gh_pages_args');

const DEFAULT_RELEASE = 'minor';

// By default, deploy to dev environment cause this is the dev repo
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const release_type = process.env.RELEASE || ((env === 'production') ? DEFAULT_RELEASE : '');

var printDeployMessage = function(build_dir, options) {
  let options_str = Object.entries(options).map(([k,v]) => (`    ${k}: ${v}`)).join("\n");

  console.log("Deploying...");
  console.log(`  Build Dir:\n    ${build_dir}`);
  console.log(`  Options:\n${options_str}`);
}

const ghPagesArgs = getGhPagesArgs(env, release_type);
const build_dir = ghPagesArgs['build_dir'];
const options = ghPagesArgs['options'];

printDeployMessage(build_dir, options);
const dryRun = (process.env.DRY_RUN === "true") ? true : false;
if(!dryRun) {
  ghpages.publish(build_dir, options, function(err) {
    if(err) {
      console.log(`An error has occurred: ${err}`);
    } else {
      console.log("Deployed");
    }
  });
}

