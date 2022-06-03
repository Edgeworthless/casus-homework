const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

/**
 *  I really like Moment.js just because you don't need to write this
 *  moment(date).fromNow()
 */
export default function formatDaysAgo(date) {
  let duration = (new Date(date) - new Date()) / 1000;
  // American English time formatter, i18n should tackle here
  const formatter = new Intl.RelativeTimeFormat('en-US');

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(
        Math.round(duration),
        division.name
      );
    }
    duration /= division.amount;
  }
}
