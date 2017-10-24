const superagent = require('superagent');

// make a check for whether or not anything is returned based on this Promise
function getArtistByName(name, access_token) {
  return superagent.get('https://api.spotify.com/v1/search')
                   .query({q: name, type: 'artist'})
                   .set('Authorization', 'Bearer ' + access_token);

}

module.exports = {
  getArtistByName
}
