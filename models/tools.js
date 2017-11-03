

function parseIDsFromList(topSongs) {
  IDS = []
  topSongs.forEach( (entry) => {
    IDS.push(entry.id);
  });
  return IDS;
}

module.exports = {
  parseIDsFromList,
}
