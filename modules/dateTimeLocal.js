import { DateTime } from 'luxon';

/**
 * Function that captures local time and insert it to the DOM using luxon library
 * @returns {void}
 */
const startClock = () => {
  const localDateTime = DateTime.local().toLocaleString(DateTime.DATE_MED);
  const { hour, minute, second } = DateTime.local().c;
  const strTime = (hour) => {
    let temp;
    if (hour < 10) temp = `0${hour}`;
    else temp = `${hour}`;
    return temp;
  };
  const strHour = strTime(hour);
  const strMinute = strTime(minute);
  const strSec = strTime(second);
  const timeSec = document.querySelector('.time');
  timeSec.textContent = `${localDateTime} ${strHour}:${strMinute}:${strSec}`;
};

export default {
  startClock,
};