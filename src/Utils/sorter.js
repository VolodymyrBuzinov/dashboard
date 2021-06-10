  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

const sorter = (whole, todayList, tomorrowList, doneList, challengeList) => {
    whole.map(part => {
      if (!part.done) {
        if (!part.challenge) {
          if (
            today.getFullYear() === new Date(Date.parse(part.time)).getFullYear() &&
            today.getMonth() === new Date(Date.parse(part.time)).getMonth() &&
            today.getDay() === new Date(Date.parse(part.time)).getDay()
          ) {
            todayList.push(part);
          }
          if (
            tomorrow.getFullYear() === new Date(Date.parse(part.time)).getFullYear() &&
            tomorrow.getMonth() === new Date(Date.parse(part.time)).getMonth() &&
            tomorrow.getDay() === new Date(Date.parse(part.time)).getDay()
          ) {
            tomorrowList.push(part);
          }
        } else {
          challengeList.push(part);
        }
      } else {
        doneList.push(part);
      }
      return { todayList, tomorrowList, doneList };
    });
};
  
export default sorter;