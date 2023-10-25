require('dotenv').config();
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.PERSONAL_ACCESS_TOKEN,
});

const username = 'LoganHajdukiewicz';

async function hasUserCommittedToday(username) {
  const today = new Date().toISOString().split('T')[0];

  try {
    const response = await octokit.activity.listCommitsForUser({
      username,
      since: today,
    });

    return response.data.length > 0;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };

async function updateCommitStreak(username) {
  try {
    const response = await octokit.users.getByUsername({ username });
    const user = response.data;
    
    const commitStreak = user.commitStreak || 0;

    if (await hasUserCommittedToday(username)) {
      const newCommitStreak = commitStreak + 1;
      console.log(`${username} has a commit streak of ${newCommitStreak} now.`);
      
      await octokit.users.update({
        name: user.name,
        commitStreak: newCommitStreak,
      });
    } else {
      console.log(`${username} did not commit today.`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

updateCommitStreak(username);
