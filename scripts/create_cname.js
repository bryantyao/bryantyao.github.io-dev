const fs = require('fs');
// By default, deploy to dev environment cause this is the dev repo
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const scripts_dir = __dirname;

let cname;
switch (env) {
  case 'production':
    cname = 'bryantyao.com'
    break;
  case 'development':
  case 'test':
    cname = 'dev.bryantyao.com'
    break;
  default:
    console.log(`Invalid NODE_ENV=${env}. NODE_ENV must be empty or one of the following values: 'production', 'development', 'test'`);
    process.exit(1);
}

fs.writeFile(`${scripts_dir}/../build/CNAME`, cname, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log(`CNAME created with ${cname}`);
}); 
