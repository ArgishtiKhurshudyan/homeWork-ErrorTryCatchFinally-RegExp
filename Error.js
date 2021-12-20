function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("clean up workspace");
  }

  return s;
}
reverseString(5558);
