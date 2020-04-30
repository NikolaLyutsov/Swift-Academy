//Task 1
var array = ['I', 'am', 3, 'a', 'developer'];

function joinArrayInOne(array){
    var result =[];
    for(let i = 0; i < array.length; i +=1) {
        if(typeof array[i] === 'string'){
            result.push(array[i]);
        }
    }
    return result.join(' ') + '.';
}
joinArrayInOne(array);
