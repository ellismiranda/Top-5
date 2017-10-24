const superagent = require('superagent');

function getUserPlaylists(userId, access_token) {
  return superagent.get(`https://api.spotify.com/v1/users/${userId}/playlists`)
                   .set('Authorization', 'Bearer ' + access_token);
}

module.exports = {
  getUserPlaylists
}
