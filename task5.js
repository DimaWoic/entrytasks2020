let arr = [];

function fillArray(){
    for(let i=-10; i<=10; i++){
        let num = Math.random() * i + arr.length * Math.random();
        num = Math.round(num);
        arr.push(num);
        if(arr.length === 20){
            break
        }   
    }
    return arr;
}

function replaceFromArray () {
    if (arr.length === 0) {
        console.log('Empty array, please fill array!')
    }
    for (let i=0; i<=arr.length; i++){
        if (arr[i]<0) {
          arr[i] = 0
        }
    }
}

function addToArray() {
    for (let i=0; i<=arr.length; i++){
      if (arr[i]===0 && i%2===0 && i != 0){
        arr.splice(i,0,-1)
      }
    }
}
  