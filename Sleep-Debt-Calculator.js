const getSleepHours = day => {
  if (day === 'monday') {
    return 6;  
  } else if 
    (day === 'tuesday') {
      return 9;
    } else if 
    (day === 'wednesday') {
      return 7;
    } else if 
      (day === 'thursday') {
        return 5;
      } else if 
        (day === 'friday') {
          return 7;
        } else if 
        (day === 'saturday') {
          return 8;
        } else {
        (day === 'sunday') 
          return 3;
        }
console.log(getSleepHours('tuesday')); 
};

const getActualSleepHours = () => {
  getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  +getSleepHours('saturday')
  + getSleepHours('sunday');
};

const getIdealSleepHours =()=> {
  let idealHours = 8;
  return idealHours * 7;

console.log(getActualSleepHours());
console.log(getIdealSleepHours());
};

const calculateSleepDebt =()=> {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
if (actualSleepHours  === idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) of sleep this week. That is Nice');
} else if
(actualSleepHours > idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week. Get some rest.');
} else if 
(actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
} 
};

calculateSleepDebt();
