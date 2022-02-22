// // 01 - Format


  function formatDate(dateText) {
     let date = new Date(dateText);
     let day = date.getDate();
     if (day < 10) {
      day = "0" + day.toString();
     }
     console.log("day ==>",day)
     let month = date.getMonth() + 1;
     if (month < 10) {
      month = "0" + month.toString();
     }
    console.log("month ==>",month)
     let year = date.getFullYear();
     console.log("year ===>", year)
   
     let finallyDate = (day + "/" + month + "/" + year);
     console.log(finallyDate)
     return finallyDate
   }
  formatDate("2022-03-02");

// // 02 - Age

 function calculateAge(dateBirthday) {
     let date = new Date(dateBirthday);
   //   const toDay = new Date();
     let age = date.getFullYear() - dateBirthday + " ans"
     console.log(age)
}
 calculateAge("1975-04-16")


// 03  - Validator

const schema = [
  "email", "username", "password"
];

 var prompt = require ("prompt");

prompt.get(schema,(err,res) => {

  if (err) {
    console.log(err)
    return;
  }
   console.log(res)
})