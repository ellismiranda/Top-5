const superagent = require('superagent');

function getUserPlaylists(userId, access_token) {
  return superagent.get(`https://api.spotify.com/v1/users/${userId}/playlists`)
                   .set('Authorization', 'Bearer ' + access_token);
}

function createPlaylist(userId, access_token, playlistName, pub=true) {
  return superagent.post(`https://api.spotify.com/v1/users/${userId}/playlists`)
                   .set('Authorization', 'Bearer ' + access_token)
                   .set('Content-Type', 'application/json')
                   .send({'name': playlistName, 'public': pub});
}

module.exports = {
  getUserPlaylists,
  createPlaylist,
}
