function str(A, B, C) {
    let arrA = A.split("");
    let arrB = B.split("");
    let arrC = C.split("");
    let flag = true;
    let index = []
    if(arrA.length < B.length){
        return A;
    }
    for(let i = 0; i < arrA.length; i++){
        if(arrB[0] === arrA[i]){
            for(let j = 1; j < arrB.length; j++){
                if(arrB[j] !== arrA[i+j]){
                    flag = false;
                    break;
                }
            }
            if(flag){
               index.push(i);
            }  
        }
        flag = true; 
    }
    if(index.length > 0){
        for(i of index){
            arrA.splice(i, arrB.length, ...arrC);
        } 
    }
    return arrA.join("");
}

let test = str('abcdefghijk', 'ghi', 'abc');
console.log(test);