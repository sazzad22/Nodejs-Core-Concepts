const {errorHandler, two,three} = require('./errorHandler');

async function getData() {
  try {
    // undefined.find();
    const customError = new Error("Email already exist");
    throw customError;
  } catch (error) {
    // console.log(error);
    //this is how we find errors
    //in production , one send the error to a globally declared errorHandler function as a parameter;
    errorHandler(error);
  }
  console.log("done 2 ~~");
}
getData();
two();
three();

console.log(errorHandler,two);

/* function errorHandler(error) {
  const { name, message, stack } = error;
  //industry level e error guloke logger e record kore rakha hoy.
  // logger.error({
  //   name,
  //   message,
  //   stack
  // })
  console.log(name,message)
} */

