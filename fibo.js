function fibs(num){
    let arr = [];

    for(let i = 0; i < num; i++){
        let arrIndex = arr.length - 1;

        if(arrIndex === -1 || arrIndex === 0){
            arr.push(arr.length);
        } else{
            arr.push(arr[arrIndex] + arr[arrIndex - 1]);
        }
        
    }
    return arr;
}

function fibsRec(num){
    if(num === 2){
        return [0, 1];
    } else{
        let arr = fibsRec(num - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log('iterative: ' + fibs(8));
console.log('recursion: ' + fibsRec(8));