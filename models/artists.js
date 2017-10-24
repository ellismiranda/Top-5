const superagent = require('superagent');

// Returns all information about artists found given the name
function getArtistByName(name, access_token) {
  return superagent.get('https://api.spotify.com/v1/search')
                   .query({q: name, type: 'artist'})
                   .set('Authorization', 'Bearer ' + access_token);

}

// Returns the SID of the first artist in the list of artists gotten from getArtistByName
// This will return a specific flag if there are no artists returned.
async function getArtistId(name, access_token) {
  res = await getArtistByName(name, access_token);
  artists = res.body.artists.items;
  if (artists[0]) {
    return artists[0].id;
  }
}

// Using a SID, gets the top songs of the artist
// Returns: array of top songs
async function getArtistTopSongs(name, access_token) {
    artistId = await getArtistId(name, access_token);
    res = await superagent.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`)
              .query({country: 'US'})
              .set('Authorization', 'Bearer ' + access_token);
    return res.body.tracks;
}

//because why not
function error(err) {
  console.log('ERROR:\n', err);
}

module.exports = {
  getArtistByName,
  getArtistId,
  getArtistTopSongs
}
