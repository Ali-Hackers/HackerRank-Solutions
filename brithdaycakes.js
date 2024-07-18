

function (params) {
    

let largest = arr[0];
let Number = 1;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
        console.log(largest)
        Number=1;
        
    } else if (arr[i] === largest) {
        Number++;
    }
}
return Number
}






   


