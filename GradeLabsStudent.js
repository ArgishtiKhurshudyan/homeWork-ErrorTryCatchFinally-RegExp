function gradeLabs(studentLabs2) {
  try {
    for (let student of studentLabs2) {
      if (student.runlab) {
        return true;
      } else throw new Error("Student is canceled");
    }
  } catch (e) {
    return e.message;
  }

  return studentLabs2;
}
console.log(
  gradeLabs([
    {
      student: "Blake",
      myCode: function(num) {
        return Math.pow(num, num);
      }
    },
    {
      student: "Jessica",
      runLab: function(num) {
        return Math.pow(num, num);
      }
    },
    {
      student: "Mya",
      runLab: function(num) {
        return num * num;
      }
    }
  ])
);
