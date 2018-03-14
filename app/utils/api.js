import { formatUsername } from './api-helpers';

const serviceRootUrl = `https://api.github.com/users`;

export const api = {

  getBio(username) {
    username = formatUsername(username);
    const url = `${serviceRootUrl}/${username}`;
    return fetch(url).then(res => res.json());
  },

  getRepos(username) {
    username = formatUsername(username);
    const url = `${serviceRootUrl}/${username}/repos`;
    return fetch(url).then(res => res.json());
  }
};