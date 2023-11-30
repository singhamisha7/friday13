function getDate() {
  let startyear = new Date(document.getElementById("startyear").value);
  let endyear = new Date(document.getElementById("endyear").value);
  endyear.setFullYear(endyear.getFullYear() + 1);
  while (startyear < endyear) {
    if (startyear.getDate() == 13 && startyear.getDay() == 5) {
      console.log(startyear.toDateString());
    }
    startyear.setDate(startyear.getDate() + 1);
  }
}
