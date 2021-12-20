function myRegExp(pin) {
  if (pin.length === 4 || pin.length === 6) {
    if (/[0-9]/.test(pin)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(myRegExp("1234"));
console.log(myRegExp("45135"));
console.log(myRegExp("89abc1"));
console.log(myRegExp("900876"));
console.log(myRegExp(" 4983"));

