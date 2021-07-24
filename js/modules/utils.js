export const getDate = (date) => {
  let dateTime = new Date(date);

  const getCurrentMonth = () => {
    const month = dateTime.getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };

  const getCurrentDay = () => {
    const day = dateTime.getDate();
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };

  const formatTime = (cb) => {
    let time = cb;
    let time_format = time < 10 ? `0${time}` : time;
    return time_format;
  };

  let date_formatted =
    dateTime.getFullYear() +
    "-" +
    getCurrentMonth() +
    "-" +
    getCurrentDay() +
    " ";
  let time_formatted =
    formatTime(dateTime.getHours()) +
    ":" +
    formatTime(dateTime.getMinutes()) +
    ":" +
    formatTime(dateTime.getSeconds());

  return [date_formatted, time_formatted];
};

export const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
  let timeout;

  const runInterval = () => {
    const timeoutFunction = () => {
      intervalFunction();
      runInterval();
    };

    const delay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    // console.log(
    //   `${Math.random()} x (${maxDelay}-${minDelay}+${1})+${minDelay}`
    // );

    timeout = setTimeout(timeoutFunction, delay);
  };

  runInterval();

  return {
    clear() {
      clearTimeout(timeout);
    },
  };
};
