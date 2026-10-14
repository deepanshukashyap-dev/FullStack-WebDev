function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
 
module.exports = { //default exporting way of multiple function
    addFn: add,
    subFn: sub,
};