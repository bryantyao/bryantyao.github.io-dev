const { validVersion, getNextVersion } = require('./version');
const ghPagesJson = require('../config/gh-pages.json');

var processTestOverrides = function(options) {
  const overrideTag = process.env.TEST_OVERRIDE_TAG;
  if(overrideTag !== undefined && overrideTag !== null) {
    options.tag = overrideTag;
  }

  const overrideMsg = process.env.TEST_OVERRIDE_MSG;
  if(overrideMsg !== undefined && overrideMsg !== null) {
    options.message = overrideMsg;
  }

  if(process.env.TEST_OVERRIDE_NOTAG === 'true') {
    delete options.tag;
  }
}

var getArgs = function(env, release_type) {
  let ghPagesEnvVars = ghPagesJson[env];
  if(!ghPagesEnvVars) {
    console.log(`Invalid NODE_ENV=${env}. NODE_ENV must be empty or one of the following values: 'production', 'development', 'test'`);
    process.exit(1);
  }

  let options = Object.assign({}, ghPagesEnvVars['options']);

  if(release_type !== '') {
    const version = getNextVersion(release_type);

    // Repo url starts with git+ and ends with .git, so remove 4 chars from begin and end
    let dev_repo = process.env.npm_package_repository_url.slice(4, -4);
    let release_url = `${dev_repo}/releases/tag/${version}`;
    let message = `[${version}](${release_url})`;

    options.tag = version;
    options.message = message;
  }

  // Overrides for testing purposes
  processTestOverrides(options);

  return {
    build_dir: ghPagesJson['build_dir'],
    options: options
  };
}

module.exports = getArgs;

