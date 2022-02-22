// 01 - Calculator

function calculate(num1, operator, num2) {

  if (operator === "+") {
    console.log(num1 + num2)
  }
  else if (operator === "x") {
    console.log(num1 * num2)
  }
  else if (operator === "-") {
    console.log(num1 - num2)
  }
  else if (operator === "%") {
    console.log(num1 / num2)
  }
  else {
    console.error("error")
  }
}

  calculate(1, "+", 2)
  calculate(5, "x", 2)
  calculate(14,"-", 2)


  // 04 - Guess

  const prompt = require("prompt");
  // console.log(typeof prompt)

  const misteryNumber = Math.floor(Math.random() * (100 + 1));
  // console.log(misteryNumber);
  // console.log(misteryNumber);
  // console.log(misteryNumber);
  // console.log(misteryNumber);
  // console.log(misteryNumber);co

  const misteryNum = () => {
     prompt.get({name: "number", desription : "Enter a number between 1 to  100"},function(err,res) {
      if(err) {
        console.log(err);
        return
      } else if(res.number != "number"){
        console.log("is not a nummber");
      }
      console.log("res ======>", res);
      if (res.number < misteryNum) {
        console.log("C'est plus !");
        Play();
      }else if (userNumber > misteryNum) {
        console.log("C'est moins");
        play();
      } else if (userNumber === misteryNum)
        console.log("bravo!");
       
    })
    }
 misteryNum();