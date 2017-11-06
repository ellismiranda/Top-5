

function parseIDsFromList(topSongs) {
  IDs = []
  topSongs.forEach( (entry) => {
    IDs.push(entry.id);
  });
  return IDs;
}

function createURIListFromIDs(songIds) {
  URIs = []
  songIds.forEach( (songId) => {
    URIs.push("spotify:track:" + songId)
  });
  return { "uris": URIs };
}

module.exports = {
  parseIDsFromList,
  createURIListFromIDs
}
