function isPositive(a) {
  try {
    if (a > 0) {
      console.log("yes");
    } else if (a === 0) {
      throw new Error("Zero Error");
    } else {
      a < 0;
      throw new Error("Negative Error");
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log(":clean up workspace");
  }

  return a;
}

isPositive(1); // Yes;
isPositive(0); // error Zero Error;
isPositive(-1); // error Negative Error;
