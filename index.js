const program = require('commander');

const auth = (username, password) => {
  //github auth
};

const getPullRequests = (user, options) => {
  //call githubn api.
  console.log(`Fetching PRs for ${user}`);
};

program
  .version('0.0.1', '-v', '--version')
  .command('get [user]')
  .description('fetch all prs for github user')
  .option('-o, --open', 'list all open prs')
  .action(getPullRequests);

program.parse(process.argv);
