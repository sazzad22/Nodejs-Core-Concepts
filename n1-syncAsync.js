// const colors = require('colors');

/* console.log('first');
setTimeout(() => { console.log('object'); }, 3000);
console.log('s'); */

console.log('first');
setTimeout(() => { //this is an asynchronous task. ei task e nicher ei user ta paisi. ei user er information die aro asynchronous task korte hoite pare.But sei asynchronous task ei first setTimeout func er moddhei korte hobe . Cz er baire user ke access kore jacche na scope er karone.
    const user = { id: 1 }

    console.log(user)

    setTimeout(() => {
        const userProducts = [{}, {}, {}];
    }, 4000);
    //this nested callback after nested callback creates problem called callback hell. If ruins the code's readability, managability etc.To solve this in javascript we use promise.

}, 3000);
console.log('s');