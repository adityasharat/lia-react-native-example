export function timeSince(previous) {
  const current = new Date();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    let time = Math.round(elapsed / 1000);
    return  `${time} second${time == 1 ? '' : 's'} ago`;
  } else if (elapsed < msPerHour) {
    let time = Math.round(elapsed / msPerMinute);
    return `${time} minutes${time == 1 ? '' : 's'} ago`;
  } else if (elapsed < msPerDay ) {
    let time = Math.round(elapsed / msPerHour);
    return `${time} hour${time == 1 ? '' : 's'} ago`;
  } else if (elapsed < msPerMonth) {
    let time = Math.round(elapsed / msPerDay);
    return `${time} day${time == 1 ? '' : 's'} ago`;
  } else if (elapsed < msPerYear) {
    let time = Math.round(elapsed / msPerMonth);
    return `${time} month${time == 1 ? '' : 's'} ago`;
  } else {
    let time = Math.round(elapsed / msPerYear);
    return `${time} year${time == 1 ? '' : 's'} ago`;
  }
}