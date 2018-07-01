#!/usr/bin/env node

const program = require('commander');
const request = require('request-promise')

const url = 'https://api.github.com'


const auth = (username, password) => {
  //github auth
};

const getPullRequests = (user, options) => {
  //call githubn api.
  console.log(`Fetching PRs for ${user}`);

  return request({
    uri: `${url}/users/${user}`,
    headers: {
      'User-Agent': `${user}`
    }
  })
  .then(response => console.log(response))
  .catch(err=>console.log('ERROR: ', err.message))

};

program
  .version('0.0.1', '-v', '--version')
  .command('get [user]')
  .description('fetch all prs for github user')
  .option('-o, --open', 'list all open prs')
  .action(getPullRequests);

program.parse(process.argv);
