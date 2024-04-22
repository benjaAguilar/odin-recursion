function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    } else{
        let mid = Math.floor(arr.length / 2);
        let leftSplittedArr = arr.slice(0, mid);
        let rightSplittedArr = arr.slice(mid, arr.length);

        return merge(mergeSort(leftSplittedArr), mergeSort(rightSplittedArr));
    }
}

const merge = (left, right) => {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
  
    return result;
  }

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));