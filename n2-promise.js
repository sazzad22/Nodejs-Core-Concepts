//promise in js is an object .The promise object represents the eventual completion (or failure) of an asynchronous operation and it's resulting value
//promise has 3 states
//- pending
//- resolved
//- rejected

//creating a promise
const myPromise = new Promise((resolve, reject) => {
  const user = 1;
  if (!user) reject("Failed - reject");
  setTimeout(() => {
    resolve({name:'John'});
  }, 2000);
});

//consuming the promise
myPromise
  .then((res) => { //resolve hole then e pabo
    console.log(res, "from then");
  })
  .catch((err) => { //reject hole catch e pabo
    console.log(err, " from catch");
  });

//for multiple promise calls there arises a problem
//user ids got from client
const userIds = [1, 2, 3, 4];

let userData = [];

for (let i = 0; i < userIds.length; i++){
    const userId = userIds[i];
    // myPromise.then(user => {
    //     userData.push(user);
    // });

    userData.push(myPromise);

};
// console.log(userData); // []
//for loop us a synchronous action. writing myPromise, an asynchonouse action inside a synchronous for loop we get no data, hence an empty array. Because the asynchronouse task is sent to the thread pool while running the iterations or loop.
//to solve this we can use Promise.all
Promise.all(userData).then(res => {
    console.log(res);
});
//this is a way to get multiple promises.
//But this way, we still have to get the data within a callback func. And it cannot be accessed from outside.
//This issue is solved by async await 