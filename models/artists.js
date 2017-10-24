const superagent = require('superagent');

function getArtistByName(name, access_token) {
  const qName = nameToQ(name);
  console.log(qName);
  return superagent.get('https://api.spotify.com/v1/search')
                   .query({q: name, type: 'artist'})
                   .set('Authorization', 'Bearer ' + access_token);

}

module.exports = {
  getArtistByName
}
