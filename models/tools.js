
function parseIDsFromList(topSongs) {
  IDs = []
  topSongs.forEach( (entry) => {
    if (entry != null) {
      IDs.push(entry.id);
    }
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

function getDateString() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  return months[month] + " " + day;
}

module.exports = {
  parseIDsFromList,
  createURIListFromIDs,
  getDateString
}
