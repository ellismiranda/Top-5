const superagent = require('superagent');
const { getArtistByName, getArtistId, getArtistTopSongs, getTopSongsFromArtists} = require('./artists');
const { parseIDsFromList, createURIListFromIDs } = require('./tools');


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

async function addSongsToPlaylistFromURIs(userId, access_token, playlistId, URIs) {
  return superagent.post(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`)
                   .set('Authorization', 'Bearer ' + access_token)
                   .set('Content-Type', 'application/json')
                   .send(URIs);
}

async function createTopSongsPlaylist(artists, userId, access_token) {
  var tracks = [];
  var promises = artists.map( (artist) => {
    return getArtistTopSongs(artist, access_token).then( (res, err) => {
      return res;
    })
  });
  Promise.all(promises).then( (topSongs) => {
    tracks = tracks.concat.apply([], topSongs);
    const uris = createURIListFromIDs(parseIDsFromList(tracks));
    createPlaylist(userId, access_token, "Top-10").then( (res, err) => {
      if (err) console.log('ERROR CREATING PLAYLIST:', err);
      const playlistId = res.body.id;
      addSongsToPlaylistFromURIs(userId, access_token, playlistId, uris).then( (err, res) => {
        if (err) console.log('ERROR ADDING SONGS TO PLAYLIST', err);
        else console.log('SUCCESS');
      })
    })

  })
}

module.exports = {
  getUserPlaylists,
  createPlaylist,
  addSongsToPlaylistFromURIs,
  createTopSongsPlaylist
}
