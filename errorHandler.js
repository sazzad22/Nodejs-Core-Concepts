function errorHandler(error) {
    const { name, message, stack } = error;
    console.log(name,message);
};

function two() {
    console.log('two')
}
function three() {
    console.log('three')
}
function four() {
    console.log('four')
}


//default Export
// module.exports = errorHandler;

//named Export
// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

module.exports = {
    errorHandler: errorHandler,
    two: two,
    three:three
}

console.log(module);


