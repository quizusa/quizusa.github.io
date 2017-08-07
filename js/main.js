document.addEventListener("DOMContentLoaded", function (event) {

});

function calculate() {
  var _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
  const currentDate = new Date();
  const currentDateUTC = Date.UTC(currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate());
  const dateOfBirthUTC = Date.UTC(dateOfBirth.getFullYear(),
      dateOfBirth.getMonth(),
      dateOfBirth.getDate());
  const age = Math.floor((currentDateUTC - dateOfBirth) / _MS_PER_DAY);
}

