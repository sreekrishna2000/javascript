//higher order functions
//these are the functions that depends on the operate other fun
//higher order functions take another function as  an argument and execute the logic.
//array is an object in javascript
//array are container {0:'abc','1':'def'} --> ["abc","def"];
function fun(x,fn){
    console.log(x);
    fn();
}

fun(9,function fn(){
    console.log('hi srikrishna');
})


//map is an higher order function

