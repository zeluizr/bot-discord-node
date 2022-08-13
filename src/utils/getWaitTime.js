function getWaitTime(isHunt) {
  const lastHunt = new Date(isHunt).getTime();
  const now = new Date().getTime();
  const wait = now - lastHunt < 60000 ? true : false;
  const waitString = new Date(60000 - (now - lastHunt))
    .toISOString()
    .substr(11, 8);

  return { wait, waitString };
}
module.exports = { getWaitTime };
