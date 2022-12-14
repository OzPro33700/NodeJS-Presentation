console.log('Before');
const user = getUser(1, (user) => {
  // Get the repositories
  getRepositories(user.gitHubUsername, (repo) => {
    console.log('Repos of ', user.gitHubUsername, ': ', repo);
    getCommits(repo, (commits) => {
      console.log('Commit ', commits);
      /* ...
      CALLBACK HELL
      */
    });
  });
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'osiris' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Calling GitHub API');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    callback(['commit']);
  }, 2000);
}
