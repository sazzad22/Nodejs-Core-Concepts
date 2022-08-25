const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!~~");
  }, 1000);
});

//not using async await
myPromise.then((res) => {
  console.log(res);
});

//using async await
async function getData() {
  const res = await myPromise;
  console.log(res, "from async await function");
}
getData();

//Another exmpl

fetch('')
    .then(res => res.json())
    .then(data => console.log(data));

async function getUser() {
    const res = await fetch('');
    const user = await res.json();
    //ei user ke use kore again aynchronouse kaj kore jabe without callbacks.
    const res2 = await fetch(`https://www.example.com/${user}`);
    const products = res2.json();

    console.log(products);
    //ei way te error handle korte hobe try catch use kore
    
}
