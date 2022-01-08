function max(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
  }
  
  console.log(max([8]), 'one element test, must return 8');
  console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
  console.log(max([8, 17]), '2 elements test, must return 17');