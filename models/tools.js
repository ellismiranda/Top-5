

function parseIDsFromList(topSongs) {
  IDs = []
  topSongs.forEach( (entry) => {
    console.log('parsing id from', entry);
    if (entry != null) {
      IDs.push(entry.id);
      console.log('parsed id from', entry);
    }
  });
  return IDs;
}

function createURIListFromIDs(songIds) {
  URIs = []
  songIds.forEach( (songId) => {
    console.log('getting uri from', songId);
    URIs.push("spotify:track:" + songId)
    console.log('got uri from', songId);
  });
  return { "uris": URIs };
}

module.exports = {
  parseIDsFromList,
  createURIListFromIDs
}
