const { spawnSync } = require('child_process');

var getLastVersion = function() {
  const last_version_command = spawnSync('git', ['describe', '--abbrev=0', '--tags']);

  if(last_version_command.status !== 0) {
    const err = last_version_command.error;
    const stderr = last_version_command.stderr.toString();

    if(err) {
      console.log(`err: ${err}`);
    }

    if(stderr) {
      console.log(`stderr: ${stderr}`);
    }

    process.exit(1);
  }
  
  return last_version_command.stdout.toString();
}

var getNextVersion = function(release_type) {
  if(release_type !== 'major' && release_type !== 'minor' && release_type != 'patch') {
    console.log(`Invalid release type: ${release_type}`);
    process.exit(1);
  }

  const last_version = getLastVersion();
  if(!validVersion(last_version)) {
    console.log(`There is something wrong with the last version. Last version: ${last_version}`);
    process.exit(1);
  }

  const [major, minor, patch] = parseVersion(last_version);

  let next_version = 'v';
  switch (release_type) {
    case 'major':
      next_version += `${major+1}.0.0`;
      break;
    case 'minor':
      next_version += `${major}.${minor+1}.0`;
      break;
    case 'patch':
      next_version += `${major}.${minor}.${patch+1}`;
      break;
  }
  return next_version;
}

// Returns an array containing 3 elements: major, minor and patch version
var parseVersion = function(version) {
  return version
          .substring(1)
          .split(".")
          .map( (n) => (Number(n)) );
}

// Returns true if the version starts with v and contains 3 numbers with 2 periods in between each
var validVersion = function(version) {
  const starts_with_v = version[0] === 'v';
  if(!starts_with_v) {
    return false;
  }
  const anyNan = parseVersion(version)
                  .find( (n) => (isNaN(n)) );
  return anyNan === undefined;
}

module.exports = { getLastVersion, getNextVersion, parseVersion, validVersion };

