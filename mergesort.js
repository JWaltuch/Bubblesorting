function split(wholeArray) {
  //if the length is odd:
  if(wholeArray.length===0||wholeArray.length===1){
    return wholeArray;
  }else{
    const middle=wholeArray.length/2;
    let firstHalf, secondHalf=[]
    if(wholeArray.length%2===0){
      firstHalf=wholeArray.slice(0,middle)
      secondHalf=wholeArray.slice(middle)
    }else{
       firstHalf=wholeArray.slice(0,middle+1)
       secondHalf=wholeArray.slice(middle+1)
    }
  /* your code here to define the firstHalf and secondHalf arrays */

  return [firstHalf, secondHalf];
}
}


function merge(firstArr, secondArr){

  if(firstArr.length===0){
    return secondArr;
  }
  else if(secondArr.length===0){
    return firstArr;
  }
  else{
    let wholeArr=[];
    if(firstArr[0]<secondArr[0]){
      wholeArr.push(firstArr[0]);
      return wholeArr.concat(merge(firstArr.slice(1),secondArr))
    }
    else{
      wholeArr.push(secondArr[0])
      return wholeArr.concat(merge(secondArr.slice(1),firstArr))
    }

  }

}
